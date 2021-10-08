// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import CouponsTabView from "./Components/CouponsTabView";
// import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

// const App =() => {

//   return (
//     // <View style={styles.container}>
//     //     <CouponsTabView />
//     // </View>
//     <CouponsTabView />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   touchableOpacity: {
//     width: 130,
//     borderRadius: 4,
//     backgroundColor: '#14274e',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 40
//   },
//   pictureText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     textAlign: 'center'
//   },
//   cameraContainer:{
//     flex: 1,
//     width: "100%",
//   }
// });

// export default App;

import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NativeBaseProvider, Box, Text, Center } from 'native-base';
import Constants from 'expo-constants';
import { AvailableCoupons, ExpiredCoupons } from './Components';

// const FirstRoute = () => <Center flex={1}>사용 가능 쿠폰 리스트</Center>;

const FirstRoute = () => <AvailableCoupons />;

const SecondRoute = () => <ExpiredCoupons />;

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const MyCoupons = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '사용 가능 쿠폰' },
    { key: 'second', title: '만료 쿠폰' },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color = index === i ? '#1f2937' : '#a1a1aa';
          const borderColor = index === i ? 'cyan.500' : 'coolGray.200';

          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer">
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}>
                <Animated.Text style={{ color }}>{route.title}</Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{ marginTop: StatusBar.currentHeight }}
      />
    </NativeBaseProvider>
  );
}

export default MyCoupons;


