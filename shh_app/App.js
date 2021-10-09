import React, {useState} from 'react';
import {
  NativeBaseProvider,
  Box,
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/Navigator/MainTabNavigator';
import InputStore from './src/Screen/Camera/InputStore';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="InputStore" component={InputStore}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}



export default App;