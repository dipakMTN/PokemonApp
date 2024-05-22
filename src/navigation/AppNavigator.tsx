import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FilterScreen from '../screens/FilterScreen';
import { IconButton } from 'react-native-paper';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={({ navigation }) => ({
        headerRight: () => (
          <IconButton
            icon="filter"
            onPress={() => navigation.navigate('Filter')}
          />
        ),
      })}
    />
    <Stack.Screen name="Filter" component={FilterScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
