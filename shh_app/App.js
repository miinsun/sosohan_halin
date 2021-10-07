import React, {useState} from 'react';
import {
  NativeBaseProvider,
  Box,
} from 'native-base';
import RootNavigator from './src/Navigator/RootNavigator';

const App = () => {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="white" safeAreaTop>
         <RootNavigator />
      </Box>
    </NativeBaseProvider>
  );
}



export default App;