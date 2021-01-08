import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeViewController from "./HomeViewController.js";
import TafseerController from "./TafseerController.js";
import BookmarkScreen from "./BookmarkScreen.js";
import SettingScreen from "./SettingScreen.js";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName="HomeViewController">
        <Stack.Screen name="HomeViewController" component={HomeViewController} />
        <Stack.Screen name="TafseerController" component={TafseerController} />
        <Stack.Screen name="BookmarkScreen" component={BookmarkScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
