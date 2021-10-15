import React, { useState } from 'react';
import {
    StyleSheet, 
    TouchableOpacity,
    View,
    Dimensions
  } from 'react-native';
import { 
  NativeBaseProvider, 
  Flex, 
  Spacer, 
  FlatList, 
  Text, 
  Center, 
  VStack, 
  Image, 
  Pressable, 
  Box,
  Button,
  Modal,
  // NativeBaseProvider,
  Heading,
  Stack,
  HStack,
  CircleIcon,
  WarningIcon, 
} from 'native-base';
import { style } from 'styled-system';
import DashedLine from 'react-native-dashed-line';
import { CouponUseView } from '.';

const [showModal, setShowModal] = useState(false);
const [consumerCouponId, setConsumerCouponId] = useState(-1);
const [storeName, setStoreName] = useState("");
const [couponName, setCouponName] = useState("");

const MyCouponListView = ({total,data,isCouponAvailable,onCouponPress,onSortPress}) => {
  return (
    <View style={styles.container}>
    <Flex direction="row">
        <Text width="50%">총 {total}개</Text>
        {isCouponAvailable && (
        <>
          <Spacer />
          <Pressable
              style={styles.button}
              onPress={onSortPress}
          >
              <Text>↑↓ 발급순</Text>
          </Pressable>
        </>)}
    </Flex>
    <View>
      <FlatList
        alignContent="center"
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => {isCouponAvailable && onCouponPress(item.consumerCouponId)}}>
            <Box h={40} mx={1} my={2} bg={isCouponAvailable ? "blueGray.50" : "#eee"} rounded="md" shadow={3}>
              <HStack h={40}>
                <VStack mx={2} space={5} alignItems="center">
                  <Box w="75px" h={9} bg={isCouponAvailable ? "blue.100" : "blueGray.300"} alignItems="center" justifyContent="center" shadow={3}>
                    <Text color="#555" textAlign="center">{item.remainingDay}일 남음</Text>
                  </Box>
                  <Image
                    source={{
                      uri: "https://wallpaperaccess.com/full/317501.jpg",
                    }}
                    alt="Alternate Text"
                    w="69px"
                    h="92px"
                    borderRadius={5}
                    marginTop={1000}
                  />
                </VStack>
                <VStack w="160px" mt={6} mb={2} mr={1} space={1}>
                  <Text fontSize="xs" isTruncated maxW="160px" color="#999" bold>{item.coupon.store.name}</Text>
                  <Text fontSize="lg" isTruncated maxW="160px" color="#222" bold>{item.coupon.name}</Text>
                  <Text fontSize="xs" isTruncated maxW="160px" color="#555" noOfLines={2}>{item.coupon.description}</Text>
                  <Spacer />
                  <Text fontSize="xs" isTruncated maxW="160px" color="#aaa">{item.finishDate} 까지</Text>
                </VStack>
                <DashedLine axis='vertical' dashLength={5} dashThickness={1.5} dashGap={7} dashColor='#ccc'/>
                <Pressable
                  style={styles.button}
                  onPress={
                    () => {
                      setConsumerCouponId(item.consumerCouponId); 
                      setStoreName(item.coupon.store.name);
                      setCouponName(item.coupon.name);
                      setShowModal(true);
                    } 
                  }
                >
                  <Center w="75px" >
                    {isCouponAvailable && (<Text fontSize="md" color="#777">사용 가능</Text>)}
                    {item.state == 0 && (<Text fontSize="md" color="#777">사용 완료</Text>)}
                    {item.state == -1 && (<Text fontSize="md" color="#777">기한 만료</Text>)}
                  </Center>
                </Pressable>
              </HStack>
            </Box>
          </Pressable>
        )}
        keyExtractor={(item) => item.consumerCouponId}
      />

      <CouponUseView 
        consumerCouponId={consumerCouponId} 
        storeName={storeName}
        couponName={couponName}
        setShowModal={setShowModal}
      />
    </View>
</View>



  )
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 10,
      backgroundColor: "#fff",
    },
  button: {
      alignItems: "center",
  },
  list: {
    alignContent: "center",
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

export default MyCouponListView;
