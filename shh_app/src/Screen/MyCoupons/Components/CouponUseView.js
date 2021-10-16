import React from 'react';
import {
  Button,
  Modal,
  Center,
  NativeBaseProvider,
  VStack,
  Heading,
  Spacer,
  Flex,
  Image,
  Box,
  Stack,
  Text,
  HStack,
  CircleIcon,
  WarningIcon,
} from 'native-base';
import { Dimensions } from 'react-native';
import { useState } from 'react';

const windowHeight = Dimensions.get('window').height;

const CouponUseView = ({consumerCouponId, storeName, couponName, showModal2, setShowModal2}) => {
    return (
      <>
        <Modal isOpen={showModal2} onClose={() => setShowModal2(false)}>
          <Modal.Content height="auto" maxHeight={windowHeight - 60}>
            <Modal.CloseButton />
            <Modal.Header>쿠폰 사용</Modal.Header>
            <Modal.Body>
              <VStack space={10} alignItems="center">
                <Center>
                  <Box
                    rounded="lg"
                    overflow="hidden"
                    width="72"
                    border="1px"
                    borderColor="coolGray.200"
                    _light={{ backgroundColor: 'gray.50' }}
                    _dark={{ backgroundColor: 'gray.700' }} 
                    textAlign="center">
                    <Stack p="4" space={3}>
                      <Text fontSize="sm" color="coolGray.600">
                        {storeName} 
                        {/* 상점명*/}
                      </Text>
                      <Text fontSize="lg">
                        {couponName}
                        {/* 쿠폰명*/}
                      </Text>
                    </Stack>
                  </Box>
                </Center>

                <Center w="135" h="135" bg="#54BAEB" rounded="md" shadow={5}>
                  <Image
                    source={{
                      uri: "https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=http://172.30.1.56:3000/couponRecog?cCouponId=" + consumerCouponId,
                    }}
                    alt="사용자 쿠폰 QR코드"
                    size="xl"
                  />
                </Center>

                <Box
                  rounded="lg"
                  overflow="hidden"
                  width="72"
                  shadow={1}
                  _light={{ backgroundColor: 'gray.50' }}
                  _dark={{ backgroundColor: 'gray.700' }}>
                  <Stack p="4" space={3}>
                    <Heading
                      size="sm"
                      ml="-1"
                      _light={{ color: 'red.400' }}
                      _dark={{ color: 'red.300' }}>
                      <WarningIcon size="4" color="red.400" /> 주의사항
                    </Heading>
                    <Text fontSize="xs" color="coolGray.400">
                      <CircleIcon size="1" color="coolGray.400" /> 
                      '사용하기' 버튼 클릭 후 환불이 불가능합니다.
                    </Text>
                    <Text fontSize="xs" color="coolGray.400">
                      <CircleIcon size="1" color="coolGray.400" /> 
                      판매자의 사정에 의해 쿠폰이 조기 마감될 수 있습니다.
                    </Text>
                  </Stack>
                </Box>
              </VStack>
            </Modal.Body>
          </Modal.Content>
        </Modal>


        {/* <Modal isOpen={showModal2} onClose={() => {setShowModal2(false);}}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Contact Us</Modal.Header>
            <Modal.Body>
              쿠폰 클릭 시 받아온 id: {consumerCouponId}
              리스트 사용도 가능.. total: {consumerCouponListAvailable.total}
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setShowModal2(false)
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setShowModal2(false)
                  }}
                >
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal> */}
      </>
  );
};

export default CouponUseView;