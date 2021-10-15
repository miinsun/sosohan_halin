import React, { useState } from 'react';
import {
    StyleSheet, 
    TouchableOpacity,
    View,
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
  HStack,
  Button
} from 'native-base';
import { style } from 'styled-system';
import DashedLine from 'react-native-dashed-line';
import { CouponUseView } from '.';

const MyCouponListView = ({
  total,
  data,
  isCouponAvailable,
  onSortPress, 
  setShowModal2,
  setConsumerCouponId,
  setStoreName,
  setCouponName
}) => {

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
          <Pressable onPress={() => {
            // try {
            // setConsumerCouponId(item.consumerCouponId); 
            // console.log(consumerCouponId);
            // setStoreName(item.coupon.store.name);
            // console.log(item.coupon.store.name);
            // setCouponName(item.coupon.name);
            // console.log(item.coupon.name);
            if (item.state == 1) {
              try {
                setShowModal2(true);
                setConsumerCouponId(item.consumerCouponId);
              } catch (e) {
                alert('에러: ' + e);
              }
            }
            // } catch(e) {
            //   console.log(e);
            // }
            // alert('모달');
          } }>
            <Box h={40} mx={1} my={2} bg={isCouponAvailable ? "blueGray.50" : "#eee"} rounded="md" shadow={3}>
              <HStack h={40}>
                <VStack mx={2} space={5} alignItems="center">
                  <Box w="75px" h={9} bg={isCouponAvailable ? "blue.100" : "blueGray.300"} alignItems="center" justifyContent="center" shadow={3}>
                    <Text color="#555" textAlign="center">{item.remainingDay}일 남음</Text>
                  </Box>
                  <Image
                    source={{
                      uri: (item.coupon.store.logoImage),
                    }}
                    alt="상점 이미지"
                    w="69px"
                    h="92px"
                    borderRadius={5}
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
                  
                <Center w="75px" >
                  {isCouponAvailable && (<Text fontSize="md" color="#777">사용 가능</Text>)}
                  {item.state == 0 && (<Text fontSize="md" color="#777">사용 완료</Text>)}
                  {item.state == -1 && (<Text fontSize="md" color="#777">기한 만료</Text>)}
                </Center>
              </HStack>
            </Box>
          </Pressable> 
        )}
        keyExtractor={(item) => item.consumerCouponId.toString()}
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
