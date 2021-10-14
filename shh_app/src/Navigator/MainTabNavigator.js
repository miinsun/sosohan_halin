import React from "react";

// 하위 탭 내비게이션 생성 함수 createBottomTabNavigator import
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

// PostScreen import
import ScreenHome from "../Screen/Home"
import ScreenCamera from "../Screen/Camera"
import ScreenMyCoupons from "../Screen/MyCoupons"
import ScreenCouponList from "../Screen/CouponList"

const navigationOptionHandler = () => ({
  headerShown: false,
});

// TabMain bottom 탭 내비게이션 생성
const TabMain = createBottomTabNavigator();

const MainTabNavigator = () => (
  <TabMain.Navigator>
    <TabMain.Screen name="홈" 
      component={ScreenHome} 
      options={{
        tabBarLabel: '홈',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
          // <MaterialCommunityIcons name="couponList" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
    <TabMain.Screen name="카메라" 
      component={ScreenCamera} 
      options={{
        tabBarLabel: '카메라',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="camera" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
    <TabMain.Screen name="쿠폰함" 
      component={ScreenMyCoupons} 
      options={{
        tabBarLabel: '쿠폰함',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="ticket-confirmation" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
  </TabMain.Navigator>
  
);

export default MainTabNavigator;