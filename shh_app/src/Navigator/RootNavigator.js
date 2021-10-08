// RootNavigator.js

import React from "react";
// 최상위 내비게이터를 관리하고 연결하는 NavigationContainer import
import { NavigationContainer } from "@react-navigation/native";

// 생성된 drawer 내비게이션 import
import MainTabNavigator from "./MainTabNavigator";

const RootNavigator = () => (
  <NavigationContainer>
    <MainTabNavigator />
  </NavigationContainer>
);

export default RootNavigator;