import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import RootNavigation from 'routes';
import { Provider, useDispatch } from 'react-redux';
import { store } from 'redux/store';
import { generateUserId } from 'redux/storeUserId/userIdThunk';

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateUserId());
  }, [dispatch]);

  return <RootNavigation />;
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />;
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
