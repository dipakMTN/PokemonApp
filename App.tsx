import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import store from './src/store/store';
import FilterScreen from './src/screens/FilterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="FilterScreen" component={FilterScreen} options={{ headerShown: false, presentation: 'modal' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
