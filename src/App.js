import React from 'react';
import {
  SafeAreaView, StyleSheet, View, Text,
} from 'react-native';


const App = () => (
  <SafeAreaView>
    <View style={styles.body}>
      <Text style={styles.sectionTitle}>Step One</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});


export default App;
