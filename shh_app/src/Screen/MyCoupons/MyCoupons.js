import * as React from 'react';
import { useEffect } from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MyCouponList } from './Components';
import { useConsumerCoupon } from '../../components';
import { CTLoading, useLoading } from '../../components/CTLoading';

const Tab = createMaterialTopTabNavigator();

const MyCoupons = () => {

  const { consumerCouponGetAllAvailable, consumerCouponGetAllExpired, consumerCouponListAvailable, consumerCouponListExpired } = useConsumerCoupon();
  const { loading, setLoading } = useLoading(true);

  const fetch = async () => {
    try {
      await consumerCouponGetAllAvailable("hy", 1);
      await consumerCouponGetAllExpired("hy", 0);
    } catch (e) {
      console.log(e);
    } 
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
    console.log("fetched");
  }, []);

  return (   
    loading ? (
      <CTLoading />
    ) : (
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 15 },
          // tabBarStyle: { backgroundColor: 'powderblue' },
          swipeEnabled: false,
        }}
      >
        <Tab.Screen name="사용 가능 쿠폰">
          {() => <MyCouponList 
            isCouponAvailable={true} 
            total={consumerCouponListAvailable.total} 
            data={consumerCouponListAvailable.results}
          />}
        </Tab.Screen>
        <Tab.Screen name="만료 쿠폰">
          {() => <MyCouponList 
            isCouponAvailable={false} 
            total={consumerCouponListExpired.total} 
            data={consumerCouponListExpired.results}
          />}
        </Tab.Screen>
      </Tab.Navigator>
    )
  );
}

export default MyCoupons;