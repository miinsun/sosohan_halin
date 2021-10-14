import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppBar from "../../layout/AppBar/AppBar";
import { StyleSheet, View, Alert, TouchableOpacity } from "react-native";
import {
  VStack,
  Center,
  Heading,
  Text,
  NativeBaseProvider,
  Box,
  AspectRatio,
  HStack,
  Stack,
  Image,
  Icon,
  Button,
} from "native-base";
import { Camera } from "expo-camera";
import PreviewPhoto from "./PreviewPhoto";
import { useNavigation } from "@react-navigation/native";
import receiptsample from "../../../assets/images/receiptsample.jpg";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
let camera;

const App = () => {
  const navigation = useNavigation();
  const timestamp = +new Date();
  const [storeData, setStoreData] = useState({
    storeName: null,
    date: null,
    businessNum: null,
  });
  const [appData, setAppData] = useState({
    preview: false,
    photo: null,
    hasPermission: false,
    type: Camera.Constants.Type.back,
  });

  const handleCamera = async () => {
    // try {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setAppData({
        ...appData,
        hasPermission: true,
      });
    } else {
      Alert.alert("카메라 사용 권한이 없습니다.");
    }
    // } catch(e) {
    //   Alert.alert("error")
    // }
  };

  const onPress = () => {
    Alert.alert("Touched");
  };

  const detectText = async (base64) => {
     fetch(
      "https://4b99037f15eb4bc89fd878365fc07728.apigw.ntruss.com/custom/v1/11517/002e71dc6709a3ae2a683a123d31c01533cf2c16a88114107d2073537f6e815b/infer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "X-OCR-SECRET": "RURKd0VGSVFwWWxqZkRnYnJBbUJ4d0h3ZGV1RE1MTE8=",
        },
        body: JSON.stringify({
          images: [
            {
              format: "jpg",
              name: "medium",
              data: base64,
            },
          ],
          lang: "ko",
          requestId: "userId",
          resultType: "string",
          timestamp: timestamp,
          version: "V1",
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then(async (jsonRes) => {
        if(jsonRes.images[0].inferResult !== "FAILURE"){
          await setStoreData({
            storeName: jsonRes.images[0].fields[0].inferText,
            businessNum: jsonRes.images[0].fields[1].inferText,
            date: jsonRes.images[0].fields[2].inferText,
          });
        };
      })

      .catch((err) => {
        console.log("Error", err);
      });
  };
  
  const takePicture = async () => {
    const options = { quality: 0.5, base64: true };
    const photo = await camera.takePictureAsync(options);

    await setAppData({
      ...appData,
      preview: true,
      photo,
    });
    
    await detectText(photo.base64);
  };

  const retakePicture = async () => {
    await setStoreData(
      {
        storeName: null,
        date: null,
        businessNum: null,
      });
    await setAppData(
      {
        ...appData,
        preview: false,
        photo: null,
      }, 
      async () => {
        await handleCamera();
      }
    );
  };

  return (
    <>
    <AppBar title = "영수증 인식" />
    <View style={styles.container}>
      {appData.hasPermission ? (
        <View style={styles.cameraContainer}>
          {appData.preview && appData.photo ? (
            <PreviewPhoto
              photo={appData.photo}
              retakePicture={retakePicture}
              storeName={storeData.storeName}
              businessNum={storeData.businessNum}
              date={storeData.date}
            />
          ) : (
            <Camera
              style={{
                flex: 1,
              }}
              type={appData.type}
              ref={(r) => {
                camera = r;
              }}
            >
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  backgroundColor: "transparent",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    flexDirection: "row",
                    flex: 1,
                    width: "100%",
                    padding: 20,
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      alignSelf: "center",
                      flex: 1,
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={takePicture}
                      style={{
                        width: 70,
                        height: 70,
                        bottom: 0,
                        borderRadius: 50,
                        backgroundColor: "#fff",
                      }}
                    />
                  </View>
                </View>
              </View>
            </Camera>
          )}
        </View>
      ) : (
        <NativeBaseProvider>
          <Center flex={1} px="3">
          <Heading mb="10" >[ 사용 전,  꼭 읽어주세요 ]</Heading>
            <VStack space={5} alignItems="center">
              {/* 영수증 샘플 */}
              <Box
                mb="8"
                rounded="lg"
                overflow="hidden"
                width="72"
                shadow={1}
                _light={{ backgroundColor: "gray.50" }}
                _dark={{ backgroundColor: "gray.700" }}
              >
                <Box >
                  <AspectRatio ratio={30 / 20}>
                    <Image
                      source={{
                        uri: "https://ifh.cc/g/jWMGcq.png",
                      }}
                      style={styles.receiptsample}
                      alt="image"
                    />
                  </AspectRatio>
                  <Center
                    bg="primary.500"
                    _text={{
                      color: "white",
                      fontWeight: "700",
                      fontSize: "xs",
                    }}
                    position="absolute"
                    bottom={0}
                    px="3"
                    py="1.5"
                  >
                    주의
                  </Center>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md">촬영 방법</Heading>
                  </Stack>
                  <Text fontWeight="100">
                    1) 영수증을 펼친 후 영수증 전체가 잘 나오도록 정면에서
                    촬영해 주세요{"\n"}
                    2) 배경에 다른 물체나 글씨가 없도록 촬영해 주세요{"\n"}
                    3) 필수 정보(업체명, 사업자등록번호, 결제일시 등)가 잘
                    나오게 찍어주세요
                  </Text>
                </Stack>
              </Box>
              {/* action 버튼 */}
              <Button.Group
      mx={{
        base: "auto",
        md: 0,
      }}
    >
              <Button
                p="3"
                onPress={handleCamera}
                leftIcon={<Icon as={Ionicons} name="camera" size="sm" />}
              >
                영수증 인식하기
              </Button>
              <Button
                p="3"
                leftIcon={
                  <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
                }
              >
                영수증 가져오기
              </Button>
              </Button.Group>

              {/* <TouchableOpacity
                onPress={() => navigation.navigate('InputStore')}
                style={styles.touchableOpacity}
                >
                 <Center w="64" 
                  _text={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "lg",
                  }}
                  h="20" bg="primary.500" rounded="md" shadow={3}>
                    영수증 직접입력
                  </Center>
              </TouchableOpacity> */}
            </VStack>
          </Center>
        </NativeBaseProvider>
      )}
      <StatusBar style="auto" />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pictureText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  cameraContainer: {
    flex: 1,
    width: "100%",
  },
  receiptsample: {
    width:"100%",
    height: "100%",
  },
});

export default App;
