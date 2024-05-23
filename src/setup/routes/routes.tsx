import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import HomeScreen from '../../screens/home/home';
import FilterScreen from '../../screens/filter/filter';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FilterScreen"
          component={FilterScreen}
          options={{headerShown: false, presentation: 'modal'}}
        />
      </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
