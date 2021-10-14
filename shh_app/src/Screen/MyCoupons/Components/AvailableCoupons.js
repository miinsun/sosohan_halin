import * as React from 'react';
import { useEffect } from 'react';
import {
    StyleSheet, 
    View,
    TouchableOpacity,
    Alert,
  } from 'react-native';
import { NativeBaseProvider, FlatList, Text, Box, Center, Flex, Spacer, List } from 'native-base';
import { useConsumerCoupon } from '../../../components';
import { MyCouponListView } from '.';

const AvailableCoupons = () => {
  const { consumerCouponList, consumerCouponPost } = useConsumerCoupon();

  const total = consumerCouponList.total;
  const data = consumerCouponList.results;
  console.log(data);

  const onCouponPress = (consumerCouponId) => {
      Alert.alert("consumerCouponId: " + consumerCouponId);
  };

  const onSortPress = () => {
      Alert.alert("정렬 방법 선택 모달 띄우기: \n발급순, 마감임박순");
  };

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
    return (
        <View style={styles.container}>
            <Flex direction="row">
                <Text width="50%">총 {total}개</Text>
                <Spacer />
                <TouchableOpacity
                    style={styles.button}
                    onPress={onSortPress}
                >
                    <Text>↑↓ 발급순</Text>
                </TouchableOpacity>
            </Flex>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={onDownloadPress}
              >
                <Text>테스트용 쿠폰 다운로드</Text>
              </TouchableOpacity>
              <MyCouponListView data={data} isCouponAvailable={true} onCouponPress={onCouponPress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff",
      },
    button: {
        alignItems: "center",
    },
    item: {
      height: 150,
      padding: 20,
      marginVertical: 10,
      marginHorizontal: 8,
      borderRadius: 10,
      backgroundColor: "#fff",
    },
});

export default AvailableCoupons;