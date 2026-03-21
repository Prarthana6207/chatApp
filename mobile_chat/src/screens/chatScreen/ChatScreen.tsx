import { StyleSheet, View } from 'react-native';
import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { useChatModal } from './ChatScreen.viewModal';

interface ChatScreenProps {
  route: {
    params: {
      roomName: string;
    };
  };
}

const ChatScreen = ({ route }: ChatScreenProps) => {
  const { roomName } = route.params;

  const { messages, onSend, userId } = useChatModal(roomName);

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat messages={messages} onSend={onSend} user={{ _id: userId }} />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
