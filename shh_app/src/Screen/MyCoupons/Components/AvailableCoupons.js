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
import { CouponListView } from '.';

const AvailableCoupons = () => {
  const { consumerCouponList, consumerCouponPost, consumerCouponGetAll } = useConsumerCoupon();

  const total = consumerCouponList.total;
  const data = consumerCouponList.results;

  const onCouponPress = () => {
      Alert.alert("쿠폰 사용 모달 띄우기");
  };

  const onSortPress = () => {
      Alert.alert("정렬 방법 선택 모달 띄우기: \n발급순, 마감임박순");
  };

  const onDownloadPress = async () => {
    try {
      await consumerCouponPost(
        {
          receiptDate: "2021-10-09",
          storeId: 2,
          consumerUserId: "hy",
        }, 3);
      alert("쿠폰 발급 완료");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }

  const fetch = async () => {
    try {
      await consumerCouponGetAll("hy", "state=1");
    } catch (e) {
      console.log(e);
    } 
    finally {
      // setLoading(false);
      console.log("available");
    }
  };

  useEffect(() => {
    fetch();
  }, []);

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
              <CouponListView data={data} onCouponPress={onCouponPress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
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