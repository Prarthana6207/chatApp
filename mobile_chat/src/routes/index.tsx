import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import JoinRoom from 'screens/joinRoom/JoinRoom';
import chatScreen from 'screens/chatScreen/ChatScreen';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="joinRoom">
        <Stack.Screen name="joinRoom" component={JoinRoom} />
        <Stack.Screen name="chat" component={chatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
