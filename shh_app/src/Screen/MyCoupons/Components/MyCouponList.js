import * as React from 'react';
import { useState } from 'react';
import {
    StyleSheet, 
    View,
    TouchableOpacity,
    Alert,
  } from 'react-native';
import { NativeBaseProvider, Text, Pressable } from 'native-base';
import { useConsumerCoupon } from '../../../components';
import { MyCouponListView, CouponUseView } from '.';

const MyCouponList = ({
  isCouponAvailable, 
  total, 
  data,
  setShowModal2,
  setConsumerCouponId,
  setStoreName,
  setCouponName
}) => {

  // 여기부터
  const { consumerCouponPost } = useConsumerCoupon();
  const onDownloadPress = async () => {
    try {
      await consumerCouponPost(
        {
          consumerUserId: "hy",
          couponId: 3,
          state: 1,
        }, "2021-10-13", 2,
      );
      alert("쿠폰 발급 완료");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
  // 여기까지 쿠폰 다운 test용

  const onSortPress = () => {
      Alert.alert("정렬 방법 선택 모달 띄우기: \n발급순, 마감임박순");
  };

  return (
    <>
      {/* 여기부터 */}
      {/* <Pressable  style={styles.button} onPress={onDownloadPress}>
        <Text>테스트용 쿠폰 다운로드</Text>
      </Pressable> */}
      {/* 여기까지 쿠폰 다운 test용 */}

      <MyCouponListView 
        total={total} 
        data={data} 
        isCouponAvailable={isCouponAvailable} 
        onSortPress={onSortPress}
        setShowModal2= {setShowModal2}
        setConsumerCouponId={setConsumerCouponId} 
        setStoreName={setStoreName}
        setCouponName={setCouponName}
      />
      
    </>
  );
}

const styles = StyleSheet.create({
  button: {
      alignItems: "center",
  },
});



export default MyCouponList;