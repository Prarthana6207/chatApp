import { StyleSheet, Text, View } from 'react-native';
const { io } = require('socket.io-client');
import React, { useCallback, useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

// For mobile, use your computer's IP address instead of localhost
// Example: 'http://192.168.1.XXX:3000' (replace XXX with your actual IP)
// For iOS Simulator, you can use 'http://localhost:3000'
// For Android Emulator, use 'http://10.0.2.2:3000'
const socket = io('http://localhost:3000', {
  transports: ['websocket'],
  reconnection: true,
});

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // Check connection status
    socket.on('message', message => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, {
          ...message,
          createdAt: new Date(message.createdAt),
        }),
      );
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });

    socket.on('connect_error', (error: Error) => {
      console.log('Connection error:', error.message);
    });

    // Listen for messages
    socket.on('message', (data: any) => {
      console.log(data, 'socketData');
    });

    return () => {
      socket.off('message');
      socket.off('connect');
      socket.off('disconnect');
      socket.off('connect_error');
    };
  }, []);
  const onSend = useCallback((newMessages = []) => {
    socket.emit('message', newMessages[0]);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <GiftedChat messages={messages} onSend={onSend} user={{ _id: 1 }} />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
