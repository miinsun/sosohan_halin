import React from "react";
import { Button} from "react-native";
// 하위 탭 내비게이션 생성 함수 createBottomTabNavigator import
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';

// PostScreen import
import ScreenHome from "../Screen/Home"
import ScreenCamera from "../Screen/Camera"
import ScreenMyCoupons from "../Screen/MyCoupons"

const navigationOptionHandler = () => ({
  headerShown: false,
});

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ReusableItem = ({ onPress }) => <Item title="Edit" onPress={onPress} />;

const ReusableHiddenItem = ({ onPress }) => <HiddenItem title="hidden2" onPress={onPress} />;

// TabMain bottom 탭 내비게이션 생성
const TabMain = createBottomTabNavigator();

const MainTabNavigator = () => (
  <TabMain.Navigator>
    <TabMain.Screen name="소소한 할인" 
      component={ScreenHome} 
      options={{
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
            <Item title="myPage" iconName="person-outline" onPress={() => alert('마이페이지임다')} />
            {/* <ReusableItem onPress={() => alert('Edit')} />
            <OverflowMenu
              style={{ marginHorizontal: 10 }}
              OverflowIcon={({ color }) => <Ionicons name="ios-more" size={23} color={color} />}
            >
              <HiddenItem title="hidden1" onPress={() => alert('hidden1')} />
              <ReusableHiddenItem onPress={() => alert('hidden2')} />
            </OverflowMenu> */}
          </HeaderButtons>
        ),
        tabBarLabel: '홈',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
          // <MaterialCommunityIcons name="couponList" color={color} size={size} />
        ),
        headerShown: true,
      }}
    />
    <TabMain.Screen name="카메라" 
      component={ScreenCamera} 
      options={{
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
            <Item title="myPage" iconName="person-outline" onPress={() => alert('마이페이지임다')} />
          </HeaderButtons>
        ),
        tabBarLabel: '카메라',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="camera" color={color} size={size} />
        ),
        headerShown: true,
      }}
    />
    <TabMain.Screen name="쿠폰함" 
      component={ScreenMyCoupons} 
      options={{
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
            <Item title="myPage" iconName="person-outline" onPress={() => alert('마이페이지임다')} />
          </HeaderButtons>
        ),
        tabBarLabel: '쿠폰함',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="ticket-confirmation" color={color} size={size} />
        ),
        headerShown: true,
      }}
    />
  </TabMain.Navigator>
  
);

export default MainTabNavigator;