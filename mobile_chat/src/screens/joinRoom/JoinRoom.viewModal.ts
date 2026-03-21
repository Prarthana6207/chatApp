import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRoomId } from 'redux/storeRoomId/roomIdSlice';
import { socket } from 'service/socketService';

interface RootState {
  user: {
    userId: string;
  };
}

type RootStackParamList = {
  chat: { roomName: string };
};

export const useViewModal = () => {
  const [value, setValue] = useState<string>('');

  const userId = useSelector((state: RootState) => state.user.userId);
  const dispatch = useDispatch();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onChangeText = (text: string) => {
    setValue(text);
  };

  const onPressJoinButton = async (roomName: string) => {
    if (!roomName) return;

    socket.emit('joinRoom', roomName, userId);
    dispatch(setRoomId(roomName));

    navigation.navigate('chat', { roomName });
  };

  return { value, onChangeText, onPressJoinButton };
};
