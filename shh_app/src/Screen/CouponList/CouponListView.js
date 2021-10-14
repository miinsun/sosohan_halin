import * as React from 'react';
import {
    StyleSheet, 
    TouchableOpacity,
    View,
  } from 'react-native';
import { NativeBaseProvider, Flex, Spacer, FlatList, Text, Center, VStack, HStack, Image, Pressable, Box } from 'native-base';
import { style } from 'styled-system';
import DashedLine from 'react-native-dashed-line';

const CouponListView = ({storeName,total,data, onDownloadPress}) => {

  return (
    <View style={styles.container}>
      <Text fontSize="xl" isTruncated maxW="160px" color="#222" bold>{storeName}</Text>
      <Text width="100%">다운로드 가능한 쿠폰(총 {total}개)</Text>
      <Spacer />

      <FlatList
        alignContent="center"
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => onDownloadPress(couponId=(item.couponId), storeId=(item.store.storeId))}>
            <Box h={40} mx={1} my={2} bg={"blueGray.50"} rounded="md" shadow={3}>
              <HStack h={40}>
                <VStack mx={2} space={5} alignItems="center">
                  <Image
                    source={item.store.logoImage}
                    alt="Alternate Text"
                    w="69px"
                    h="92px"
                    borderRadius={5}
                  marginTop={7}
                  />
                </VStack>
                <VStack w="160px" mt={7} mb={2} mr={1} space={1}>
                  <Text fontSize="xs" isTruncated maxW="160px" color="#999" bold>{item.store.name}</Text>
                  <Text fontSize="lg" isTruncated maxW="160px" color="#222" bold>{item.name}</Text>
                  <Text fontSize="xs" isTruncated maxW="160px" color="#555" noOfLines={2}>{item.description}</Text>
                  <Text fontSize="xs" isTruncated maxW="160px" color="#aaa">{item.finishDate} 까지 사용가능</Text>
                </VStack>
                <DashedLine axis='vertical' dashLength={5} dashThickness={1.5} dashGap={7} dashColor='#ccc'/>
                <Center w="75px" >
                  <Text fontSize="md" color="#777">다운로드</Text>
                </Center>
              </HStack>
            </Box>
          </Pressable>
        )}
        keyExtractor={(item) => item.couponId}
      />
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

export default CouponListView;
