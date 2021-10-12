import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AvailableCoupons, ExpiredCoupons } from './Components';

const Tab = createMaterialTopTabNavigator();

const MyCoupons = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 15 },
        // tabBarStyle: { backgroundColor: 'powderblue' },
        swipeEnabled: false,
      }}
    >
      <Tab.Screen name="사용 가능 쿠폰" component={AvailableCoupons} />
      <Tab.Screen name="만료 쿠폰" component={ExpiredCoupons} />
    </Tab.Navigator>
  );
}

export default MyCoupons;