import { useNavigation } from '@react-navigation/native';
import { use, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostThunk } from 'redux/FetchSlice/fetchThunk';

export const useViewModal = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onChangeText = (text: string) => {
    console.log(text);
    setValue(text);
  };
  const onPressJoinButton = async () => {
    // const res = await fetch('http://localhost:3000/posts');
    // const data = await res.json();
    // console.log(data, 'resresresres');
    dispatch(fetchPostThunk());
    navigation.navigate('chat');
  };
  return { value, onChangeText, onPressJoinButton };
};
