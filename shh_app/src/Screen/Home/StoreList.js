import React from "react";
import { StyleSheet } from "react-native";
import {
  Image,
  HStack,
  Stack,
  Center,
  Text,
  VStack,
  Heading,
  NativeBaseProvider,
  Box,
} from "native-base";

const StoreList = () => {
  return (
    <>
      <VStack space={3} alignItems="center" mt="5">
      {/* 상점 1 */}
        <Box w="80" h="40" bg="gray.100" rounded="md" shadow={3}>
          <HStack space={2}>
            <Image
              m="4"
              borderRadius={10}
              source={{
                uri: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20211009_104%2F1633760870851rQtHE_JPEG%2Fupload_0f94eb4ef00229b81a08a4186912be55.jpeg",
              }}
              alt="Alternate Text"
              size="xl"
            />
            <Box h="40" w="40" rounded="md">
                <Heading size="md" ml="-1" mt="4" mb="1">
                  호랑이 식당
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{ color: "primary.500" }}
                  fontWeight="500"
                  ml="-0.5"
                  
                >
                  아시아 레스토랑
                </Text>
                <Text fontWeight="400" pr="5">
                  서울 최고의 라멘집! 일본의 라멘을 한국식으로 재해석한 라멘집입니다.
                </Text>
            </Box>
          </HStack>
        </Box>
        {/* 상점 2 */}
        <Box w="80" h="40" bg="gray.100" rounded="md" shadow={3}>
          <HStack space={2}>
            <Image
              m="4"
              borderRadius={10}
              source={{
                uri: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjhfMTI5%2FMDAxNjIyMTc2NjUzMTAz.9PJu2JNbUndihvr8Nm0d-E1hpEyAYDJ-4jPIYj3szVYg.B5NNcSAA_girZ0VOEugOu9INNbn7oRKeMENNmPUlh94g.JPEG.dami10033%2F1622176652956.JPG",
              }}
              alt="Alternate Text"
              size="xl"
            />
            <Box h="40" w="40" rounded="md">
                <Heading size="md" ml="-1" mt="4" mb="1">
                  마초쉐프
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{ color: "primary.500" }}
                  fontWeight="500"
                  ml="-0.5"
                  
                >
                  이탈리아 음식점
                </Text>
                <Text fontWeight="400" pr="5">
                  강남역 맛집 마초쉐프의 차별화된 인테리어, 고급진 소품, 
                  트렌디한 음악, 저렴하고 푸짐한 양!
                </Text>
            </Box>
          </HStack>
        </Box>
        {/* 상점 3 */}
        <Box w="80" h="40" bg="gray.100" rounded="md" shadow={3}>
          <HStack space={2}>
            <Image
              m="4"
              borderRadius={10}
              source={{
                uri: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210919_39%2F1631982796203qL8oL_JPEG%2Fupload_ef057194e9496369428e358168be4013.jpg",
              }}
              alt="Alternate Text"
              size="xl"
            />
            <Box h="40" w="40" rounded="md">
                <Heading size="md" ml="-1" mt="4" mb="1">
                  무월식탁
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{ color: "primary.500" }}
                  fontWeight="500"
                  ml="-0.5"
                  
                >
                  일식당 및 일정식집
                </Text>
                <Text fontWeight="400" pr="5">
                  한국의 가정식을 정갈하고 세련된 느낌의 반상으로 차려 나오는 캐주얼 한식당입니다
                </Text>
            </Box>
          </HStack>
        </Box>
      </VStack>
    </>
  );
};

const styles = StyleSheet.create({});

export default StoreList;
