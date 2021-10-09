import React, {useState} from 'react';
import { Provider } from "react-redux";
import {
  NativeBaseProvider,
  Box,
} from 'native-base';
import RootNavigator from './src/Navigator/RootNavigator';
import store from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Box flex={1} bg="white" safeAreaTop>
          <RootNavigator />
        </Box>
      </NativeBaseProvider>
    </Provider>
  );
}



export default App;