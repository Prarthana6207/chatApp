import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useViewModal } from './JoinRoom.viewModal';

const JoinRoom = () => {
  const { value, onChangeText, onPressJoinButton } = useViewModal();
  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
      <TextInput
        placeholder="Enter Your room name"
        value={value}
        onChangeText={onChangeText}
        style={{ padding: 10, borderWidth: 1, backgroundColor: '#d1c6c6b6' }}
      />
      <TouchableOpacity
        onPress={() => onPressJoinButton(value)}
        style={{
          padding: 10,
          alignSelf: 'center',
          borderWidth: 1,
          marginTop: 20,
        }}
      >
        <Text>Join Room</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JoinRoom;

const styles = StyleSheet.create({});
