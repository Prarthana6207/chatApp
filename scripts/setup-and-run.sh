#!/usr/bin/env bash
set -uo pipefail

GREEN="\033[32m"
RED="\033[31m"
YELLOW="\033[33m"
RESET="\033[0m"
CHECK="✅"
CROSS="❌"

FAILED_STEPS=0

run_step() {
  local description="$1"
  local command="$2"

  printf "%s %s... %s\n" "${YELLOW}${CHECK}${RESET}" "${description}" "${RESET}"
  if eval "${command}"; then
    printf "%s ${GREEN}%s${RESET}\n" "${CHECK}" "${description} done"
  else
    printf "%s ${RED}%s failed${RESET}\n" "${CROSS}" "${description}"
    FAILED_STEPS=$((FAILED_STEPS + 1))
  fi
}

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "=== Workspace bootstrap started ==="

run_step "Install chat server dependencies" "cd \"${ROOT_DIR}/chatServer\" && yarn install"
run_step "Install mobile app dependencies" "cd \"${ROOT_DIR}/mobile_chat\" && yarn install"

run_step "Clean Android Gradle build" "cd \"${ROOT_DIR}/mobile_chat/android\" && ./gradlew clean"
run_step "Install iOS CocoaPods" "cd \"${ROOT_DIR}/mobile_chat/ios\" && pod install"

echo "=== Build/setup complete.${FAILED_STEPS:+ WARNING: ${FAILED_STEPS} step(s) failed} Starting servers... ==="

# Start Metro and backend server in background
cd "${ROOT_DIR}" || true

yarn --cwd "${ROOT_DIR}/mobile_chat" start &
METRO_PID=$!

yarn --cwd chatServer dev &
BACKEND_PID=$!

# Show live status
echo "${CHECK} Metro running (PID ${METRO_PID})"
echo "${CHECK} Backend server running (PID ${BACKEND_PID})"

echo "Press CTRL+C to stop both servers"

# When script is terminated, kill background processes
trap "echo 'Stopping dev servers...'; kill ${METRO_PID} ${BACKEND_PID} 2>/dev/null || true; exit" SIGINT SIGTERM

# Wait for processes to exit
wait ${METRO_PID} ${BACKEND_PID}
