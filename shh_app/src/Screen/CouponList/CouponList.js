import * as React from 'react';
import { useEffect } from 'react';
import {
    StyleSheet, 
    View,
    TouchableOpacity,
    Alert,
  } from 'react-native';
import { NativeBaseProvider, FlatList, Text, Box, Center, Flex, Spacer, List } from 'native-base';
import { useCoupon } from '../../components';
import { CouponListView } from '../MyCoupons/Components/CouponListView';

const CouponList = ({store}) => {
  const { couponList, couponGetLinked } = useCoupon();
  
  const total = couponList.total;
  const data = couponList.result;

  const onDownloadPress = async () => {
    try {
      await couponGetLinked(2);
      alert("hi");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }

    return (
        <View style={styles.container}>
            <Flex direction="row">
                <Text width="100%">상점명</Text>
            </Flex>
            <Text width="100%">다운로드 가능한 쿠폰(총 0개)</Text>
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
    },
});

export default CouponList;