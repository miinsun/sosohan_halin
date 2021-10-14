import * as React from 'react';
import { useEffect } from 'react';

import CouponListView from './CouponListView';
import ScreenMyCoupons from "../MyCoupons/index.js"
import { useCoupon, useConsumerCoupon } from '../../components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const CouponList = ({storeName, receiptDate}) => {

  const { couponList, couponGetLinked, } = useCoupon();

  const fetch = async () => {
    try {
      await couponGetLinked(3);
    } catch (e) {
      console.log(e);
    } 
    finally {
    }
  };

  useEffect(() => {
    fetch();
    console.log("fetched");
  }, []);

  const { consumerCouponPost } = useConsumerCoupon();
  const onDownloadPress = async (couponId, storeId) => {
    try {
      await consumerCouponPost(
        {
            consumerUserId: "hy",
            couponId: couponId,
            state: 1,
        }, receiptDate, storeId,
      );
      alert("쿠폰 발급 완료");
    } catch (err) {
      alert(err);
      console.log(err);
    } 
  }

return (
    <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 15 },
          swipeEnabled: false,
        }}
      >
        <Tab.Screen name="사용 가능 쿠폰">
          {() => <CouponListView
            storeName={storeName} 
            total={couponList.total} 
            data={couponList.results}
            onDownloadPress={onDownloadPress}
            />   }
        </Tab.Screen>
        
      </Tab.Navigator>
);
}

export default CouponList;