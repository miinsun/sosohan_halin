import React, {useState} from 'react';
import { Provider } from "react-redux";
import {
  NativeBaseProvider,
  Box,
} from 'native-base';
import store from "./src/store";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/Navigator/MainTabNavigator';
import InputStore from './src/Screen/Camera/InputStore';
import NotAvailable from './src/Screen/Camera/NotAvailable';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Main" component={Main} />
              <Stack.Screen name="InputStore" component={InputStore}/>
              <Stack.Screen name="NotAvailable" component={NotAvailable}/>
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
    </Provider>
  );
}



export default App;