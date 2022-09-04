import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/Screens/LoginScreen';
import CategoryScreen from './src/Screens/CategoryScreen';
import HomeScreen from './src/Screens/HomeScreen';
import UploadScreen from './src/Screens/UploadScreen';
import AlertScreen from './src/Screens/AlertScreen';
import SettingsScreen from './src/Screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Login" component={LoginScreen} />

        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;