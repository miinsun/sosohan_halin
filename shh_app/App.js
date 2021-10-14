import React, {useState} from 'react';
import { Provider } from "react-redux";
import {
  NativeBaseProvider,
  Box,
} from 'native-base';
import store from "./src/store";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OverflowMenuProvider } from 'react-navigation-header-buttons';
import Main from './src/Navigator/MainTabNavigator';
import InputStore from './src/Screen/Camera/InputStore';
import MyCoupons from './src/Screen/MyCoupons';

import NotAvailable from './src/Screen/Camera/NotAvailable';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer>
            <OverflowMenuProvider>
              <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Main" component={Main} />
                <Stack.Screen options={{ headerShown: false }} name="InputStore" component={InputStore}/>
                <Stack.Screen options={{ headerShown: false }} name="MyCoupons" component={MyCoupons}/>
                <Stack.Screen options={{ headerShown: false }} name="NotAvailable" component={NotAvailable}/>
              </Stack.Navigator>
            </OverflowMenuProvider>
          </NavigationContainer>
        </NativeBaseProvider>
    </Provider>
  );
}



export default App;