import React, { useState, useEffect, componentDidUpdate } from 'react';
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Input,
} from "react-native";

import {
  Button,
  Modal,
  Text,
  FormControl,
  Center,
  VStack,
  HStack,
  NativeBaseProvider,
  Badge,
} from "native-base"
import { useReceipt } from '../../components';
import NotAvailable from "./NotAvailable";
import { useNavigation } from "@react-navigation/native";

const PreviewPhoto = ({ photo, retakePicture, storeName, businessNum, date}) => {
  const { isInReceipt, receiptGetParam } = useReceipt();
  const [showModal, setShowModal] = useState(true);
  const navigation = useNavigation();

  const fetch = async () => {
    try {
      console.log(storeName);
      await receiptGetParam("storename=방탈출 미로&businessnum=1111122222&date=2021-08-17&consumeruserid=hy");
      const store = isInReceipt.result;

      if(!store){
        console.log(storeName);

        navigation.navigate('NotAvailable');
      }
      else{
        if(isInReceipt.isin){
          navigation.navigate('NotAvailable');
        }

        //if isin이 false이고, store 객체가 있으면 쿠폰 선택가능
        navigation.navigate('CouponList',{store : store, receiptDate:date, navigation:navigation});
      }

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
    {storeName ? (
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
              onPress={fetch}
            >
              쿠폰 선택
            </Button>
          </Modal.Footer>
      </Modal.Content>
    </Modal>
    ) : ( 
      <Badge colorScheme="success"> 로딩중... </Badge>
    )}
    
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
