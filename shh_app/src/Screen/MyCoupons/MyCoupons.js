import * as React from 'react';
import { useEffect } from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AvailableCoupons, ExpiredCoupons } from './Components';
import { useConsumerCoupon } from '../../components';

const Tab = createMaterialTopTabNavigator();

const MyCoupons = () => {
  const { consumerCouponGetAll, consumerCouponGetAllExpired } = useConsumerCoupon();

  const fetch = async () => {
    try {
      await consumerCouponGetAll("hy", 1);
      await consumerCouponGetAllExpired("hy", 0);
    } catch (e) {
      console.log(e);
    } 
    finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

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