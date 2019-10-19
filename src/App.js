import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './configureStore';

import { Navigation } from './navigation';


const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaView style={styles.flexOne}>
        <Navigation />
      </SafeAreaView>
    </PersistGate>
  </Provider>
);

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});

export default App;
