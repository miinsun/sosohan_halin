import * as React from 'react';
import {
    StyleSheet, 
    TouchableOpacity,
  } from 'react-native';
import { NativeBaseProvider, Spacer, FlatList, Text, Center, VStack, HStack, Image, Pressable, Box } from 'native-base';
import { style } from 'styled-system';
import DashedLine from 'react-native-dashed-line';

const CouponListView = (props) => {

  const isCouponAvailable = props.isCouponAvailable;

  return (
    <FlatList
      alignContent="center"
      data={props.data}
      renderItem={({ item }) => (
        <Pressable onPress={() => {isCouponAvailable && props.onCouponPress(item.consumerCouponId)}}
        >
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
      keyExtractor={(item) => item.consumerCouponId}
    />
  )
};

const styles = StyleSheet.create({
  list: {
    alignContent: "center",
  },
});

export default CouponListView;
