import * as React from 'react';
import { useEffect, useState } from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MyCouponList, CouponUseView } from './Components';
import { useConsumerCoupon } from '../../components';
import { CTLoading, useLoading } from '../../components/CTLoading';


const Tab = createMaterialTopTabNavigator();

const MyCoupons = () => {

  const { consumerCouponGetAllAvailable, consumerCouponGetAllExpired, consumerCouponListAvailable, consumerCouponListExpired } = useConsumerCoupon();
  const { loading, setLoading } = useLoading(true);
  const [showModal2, setShowModal2] = useState(false);
  const [consumerCouponId, setConsumerCouponId] = useState(-1);
  const [storeName, setStoreName] = useState("");
  const [couponName, setCouponName] = useState("");

  const fetch = async () => {
    try {
      await consumerCouponGetAllAvailable("hy", true);
      await consumerCouponGetAllExpired("hy", false);
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
      <>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 15 },
          // tabBarStyle: { backgroundColor: 'powderblue' },
          swipeEnabled: true,
        }}
      >
        <Tab.Screen name="사용 가능 쿠폰">
          {() => <MyCouponList 
            isCouponAvailable={true} 
            total={consumerCouponListAvailable.total} 
            data={consumerCouponListAvailable.results}
            setShowModal2= {setShowModal2}
            setConsumerCouponId={setConsumerCouponId} 
            setStoreName={setStoreName}
            setCouponName={setCouponName}
          />}
        </Tab.Screen>
        <Tab.Screen name="만료 쿠폰">
          {() => <MyCouponList 
            isCouponAvailable={false} 
            total={consumerCouponListExpired.total} 
            data={consumerCouponListExpired.results}
            setShowModal2= {setShowModal2}
            setConsumerCouponId={setConsumerCouponId} 
            setStoreName={setStoreName}
            setCouponName={setCouponName}
          />}
        </Tab.Screen>
      </Tab.Navigator>
      
      <CouponUseView 
        consumerCouponId={consumerCouponId}
        storeName={storeName}
        couponName={couponName}
        showModal2={showModal2}
        setShowModal2={setShowModal2}
      />
      
    </>
    )
  );
}

export default MyCoupons;