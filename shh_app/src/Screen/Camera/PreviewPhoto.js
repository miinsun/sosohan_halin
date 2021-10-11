import React, { useState } from 'react';
import {
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";

import {
  Button,
  Modal,
  Text,
  FormControl,
  Input,
  Center,
  VStack,
  HStack,
  NativeBaseProvider,
} from "native-base"

const PreviewPhoto = ({ photo, retakePicture, storeName, businessNum, date }) => {

  const [showModal, setShowModal] = useState(true)

  return (
    <>
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>상점 확인</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">상점 이름</Text>
                <Text color="blueGray.400">{storeName}</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">사업자 번호</Text>
                <Text color="blueGray.400">{businessNum}</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">날짜</Text>
                <Text color="green.500">{date}</Text>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
              }}
            >
              쿠폰 선택
            </Button>
          </Modal.Footer>
      </Modal.Content>
    </Modal>
    <View
      style={{
        backgroundColor: "transparent",
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            padding: 15,
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={retakePicture}
              style={{
                width: 130,
                height: 40,

                alignItems: "center",
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                }}
              >
                Re-take
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
    </>
  );
};

export default PreviewPhoto;
