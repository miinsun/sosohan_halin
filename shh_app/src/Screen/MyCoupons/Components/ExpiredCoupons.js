import * as React from 'react';
import { useEffect } from 'react';
import {
    StyleSheet, 
    View,
    Alert,
  } from 'react-native';
import { NativeBaseProvider, FlatList, Text, Box, Center, Flex, Spacer, List } from 'native-base';
import { useConsumerCoupon } from '../../../components';
import { CouponListView } from '.';

const AvailableCoupons = () => {

  const { consumerCouponList, consumerCouponGetAll } = useConsumerCoupon();

  const total = consumerCouponList.total;
  const data = consumerCouponList.results;

  const onCouponPress = () => {
    Alert.alert("쿠폰 사용된 날짜 팝업을 띄울 것? or no action?");
  };

  const fetch = async () => {
    try {
      await consumerCouponGetAll("hy", 1);
    } catch (e) {
      console.log(e);
    } 
    finally {
      // setLoading(false);
      console.log("expired");
    }
  };

  useEffect(() => {
    fetch();
  }, []);

    return (
        <View style={styles.container}>
            <Flex direction="row">
                <Text width="50%">총 {total}개</Text>
            </Flex>
            <View>
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
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
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