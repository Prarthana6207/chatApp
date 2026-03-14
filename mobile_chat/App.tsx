import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RootNavigation from 'routes';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />;
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
