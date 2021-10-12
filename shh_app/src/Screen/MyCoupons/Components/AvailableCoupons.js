import * as React from 'react';
import {
    StyleSheet, 
    View,
    TouchableOpacity,
    Alert,
    VirtualizedList,
  } from 'react-native';
import { NativeBaseProvider, Text, Flex, Spacer, List } from 'native-base';
import { useConsumerCoupon, useUser } from '../../../components';

// api 적용 전 임시 변수
const total = 0;
const list = {};

const DATA = []

const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
})

const getItemCount = (_data) => 10

const Item = ({ title }) => (
  <List.Item
    bg="emerald.200"
    borderRadius="md"
    justifyContent="center"
    _text={{
      fontSize: "2xl",
    }}
    px={4}
    py={2}
    my={2}
    height={140}
    onPress={onCouponPress}
  >
    {title}
  </List.Item>
)
const onCouponPress = () => {
    Alert.alert("쿠폰 사용 모달 띄우기");
};

const onSortPress = () => {
    Alert.alert("정렬 방법 선택 모달 띄우기: \n발급순, 마감임박순");
};

const AvailableCoupons = () => {

  const { consumerCouponPost } = useConsumerCoupon();
  // const { userGet } = useUser();

  const onPress = async () => {
    try {
      await consumerCouponPost('hy', 3);
    } catch (err) {
      alert(err);
      console.log(err);
    }
    // alert("완료");
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
            {/* <VirtualizedList
                data={DATA}
                initialNumToRender={4}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={(item) => item.key}
                getItemCount={getItemCount}
                getItem={getItem}
            /> */}
              <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                >
                    <Text>발급 받기</Text>
                </TouchableOpacity>
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
});

export default AvailableCoupons;