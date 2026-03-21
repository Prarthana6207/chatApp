import { useCallback, useEffect, useState } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { useSelector } from 'react-redux';
import { socket } from 'service/socketService';

interface RootState {
  user: {
    userId: string;
  };
}

export const useChatModal = (roomName: string) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const userId = useSelector((state: RootState) => state.user.userId);

  useEffect(() => {
    const handleMessage = (message: any) => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, {
          ...message,
          createdAt: new Date(message.createdAt),
          user: { _id: message.userId },
        }),
      );
    };

    const handleDisconnect = () => {
      console.log('Socket disconnected');
    };

    const handleError = (error: Error) => {
      console.log('Connection error:', error.message);
    };

    socket.on('message', handleMessage);
    socket.on('disconnect', handleDisconnect);
    socket.on('connect_error', handleError);

    return () => {
      socket.off('message', handleMessage);
      socket.off('disconnect', handleDisconnect);
      socket.off('connect_error', handleError);
    };
  }, []);

  const onSend = useCallback(
    (newMessages: IMessage[] = []) => {
      const msg = newMessages[0];

      setMessages(prev => GiftedChat.append(prev, [msg]));
      socket.emit('message', msg, roomName);
    },
    [roomName],
  );

  return {
    messages,
    onSend,
    userId,
  };
};
