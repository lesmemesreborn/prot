import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './components/navigation';
import IndexScreen from './screens/IndexScreen';

const App = () => {
  return (
      <Navigation />
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

export default App;