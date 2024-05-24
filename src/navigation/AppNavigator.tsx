import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/home/home';
import FilterScreen from '@/screens/filter/filter';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Filter" component={FilterScreen} />
  </Stack.Navigator>
);

export default Navigator;
