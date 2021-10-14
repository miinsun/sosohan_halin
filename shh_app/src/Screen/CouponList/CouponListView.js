import * as React from 'react';
import {
    StyleSheet, 
    TouchableOpacity,
  } from 'react-native';
import { NativeBaseProvider, FlatList, Text } from 'native-base';

const CouponListView = (props) => {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={props.onCouponPress} style={styles.item}>
          <Text>{item.consumerCouponId}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.consumerCouponId}
    />
  )
};

const styles = StyleSheet.create({
  item: {
    height: 150,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 8,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});

export default CouponListView;
