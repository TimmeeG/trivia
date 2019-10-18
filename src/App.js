import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { Navigation } from './navigation';


const App = () => (
  <SafeAreaView style={styles.flexOne}>
    <Navigation />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});

export default App;
