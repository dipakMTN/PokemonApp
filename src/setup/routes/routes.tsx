import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import {NavigatorParamsList} from '.';
import { RouteNames } from '@/utils/route_names';
import HomeScreen from '@/screens/home/home';
import FilterScreen from '@/screens/filter/filter';

const Stack = createStackNavigator<NavigatorParamsList>();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={RouteNames.HomeScreen}>
      <Stack.Screen
        name={RouteNames.HomeScreen}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RouteNames.FilterScreen}
        component={FilterScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
