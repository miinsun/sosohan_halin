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
import { CouponUseView } from '.';

const windowHeight = Dimensions.get('window').height;

const CouponUseView = ({consumerCouponId, storeName, couponName, setShowModal}) => {
  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
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
                    <Text fontSize="s" color="coolGray.600">
                      {storeName}
                    </Text>
                    <Text fontSize="lg">{couponName}</Text>
                  </Stack>
                </Box>
              </Center>
              <Center w="135" h="135" bg="#54BAEB" rounded="md" shadow={5}>
                <Image
                  source={{
                    uri: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=http://172.30.1.56:3000/couponRecog?cCouponId=${consumerCouponId}`,
                  }}
                  alt="사용자 쿠폰 QR코드"
                  size="xl"
                />
              </Center>
              {/* <Center w="72" h="64" bg="emerald.500" rounded="md" shadow={3}></Center>*/}
              <Box
                rounded="lg"
                overflow="hidden"
                width="72"
                shadow={1}
                _light={{ backgroundColor: 'gray.50' }}
                _dark={{ backgroundColor: 'gray.700' }}>
                <Stack p="4" space={3}>
                  <Heading
                    size="s"
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

          {/*<Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button>LEARN ME</Button>
              <Button>
                onPress={() => {
                  setShowModal(false)
                }}
              >
                ACCEPT
              </Button>
            </Button.Group>
          </Modal.Footer> */}
        </Modal.Content>
      </Modal>
    </>
  );
};

export default CouponUseView;
