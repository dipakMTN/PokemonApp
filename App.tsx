import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {SafeAreaView, StyleSheet} from 'react-native';
import Routes from './src/setup/routes/routes';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaView>
  );
};

export default App;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
