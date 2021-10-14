import * as React from 'react';
import { useEffect } from 'react';
import {
    StyleSheet, 
    View,
    TouchableOpacity,
    Alert,
  } from 'react-native';
import { NativeBaseProvider, Text, Pressable } from 'native-base';
import { useConsumerCoupon } from '../../../components';
import { MyCouponListView } from '.';

const MyCouponList = ({isCouponAvailable, total, data}) => {

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
  // 여기까지는 CouponList 완성 후 CouponList 쪽으로 이동할 예정

  const onCouponPress = (consumerCouponId) => {
      Alert.alert("consumerCouponId: " + consumerCouponId);
  };

  const onSortPress = () => {
      Alert.alert("정렬 방법 선택 모달 띄우기: \n발급순, 마감임박순");
  };

  return (
    <>
      {/* 여기부터 */}
      <Pressable  style={styles.button} onPress={onDownloadPress}>
        <Text>테스트용 쿠폰 다운로드</Text>
      </Pressable>
      {/* 여기까지는 CouponList 완성 후 CouponList 쪽으로 이동할 예정 */}

      <MyCouponListView total={total} data={data} isCouponAvailable={isCouponAvailable} onCouponPress={onCouponPress} onSortPress={onSortPress} />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
      alignItems: "center",
  },
});



export default MyCouponList;