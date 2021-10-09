import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TouchableOpacity } from 'react-native';
import { VStack, Center, Heading, Text, NativeBaseProvider } from "native-base"
import { Camera } from 'expo-camera';
import PreviewPhoto from './PreviewPhoto';
import { useNavigation } from '@react-navigation/native';

let camera;

const App =() => {
  const navigation = useNavigation();
  const timestamp = + new Date();
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
  })

  const handleCamera = async () => {
    // try { 
      const { status } = await Camera.requestCameraPermissionsAsync();
      console.log(status)
      if (status === "granted") {
        setAppData({
          ...appData,
          hasPermission: true,
        })
      } else {
        Alert.alert("카메라 사용 권한이 없습니다.");
      }
    // } catch(e) {
    //   Alert.alert("error")
    // }
  }

  const onPress = () => {
    Alert.alert("Touched");
  }

  
  
  const detectText = (base64) => {
    fetch("https://4b99037f15eb4bc89fd878365fc07728.apigw.ntruss.com/custom/v1/11517/002e71dc6709a3ae2a683a123d31c01533cf2c16a88114107d2073537f6e815b/infer",
     {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'X-OCR-SECRET': 'RURKd0VGSVFwWWxqZkRnYnJBbUJ4d0h3ZGV1RE1MTE8='
        },
        body: JSON.stringify({
          "images": [
                      {
                        "format": "jpg",
                        "name": "medium",
                        "data": base64
                      }
                    ],
          "lang": "ko",
          "requestId": "userId",
          "resultType": "string",
          "timestamp": timestamp,
          "version": "V1"
        })
    })
    .then(response => { return response.json()})
    .then(jsonRes => {
      setStoreData({
      storeName: jsonRes.images[0].fields[0].inferText,
      businessNum :  jsonRes.images[0].fields[1].inferText,
      date : jsonRes.images[0].fields[2].inferText,
    })
    console.log( jsonRes.images[0].fields[1].inferText);
    }).catch(err => {
      console.log('Error', err)
    })
  }

const takePicture = async () => {
  const options = { quality: 0.5, base64: true };
    const photo = await camera.takePictureAsync (options);

    setAppData({
      ...appData,
      preview: true,
      photo,
    })
    console.log(photo);
    detectText(photo.base64);
  }

  const retakePicture = async () => {
    await setAppData({
      ...appData,
      preview: false,
      photo: null,

    }, async ()=> { await handleCamera() });
  }

  return (
        <View style={styles.container}>
          { appData.hasPermission ? (
            <View style={styles.cameraContainer}>
              {appData.preview && appData.photo ? (
                <PreviewPhoto 
                  photo={appData.photo}
                  retakePicture={retakePicture}
                  storeName = {storeData.storeName}
                  businessNum ={storeData.businessNum}
                  date = {storeData.date}
                  />
              ) : (
                <Camera
                  style={{
                    flex: 1
                  }}
                  type={appData.type}
                  ref={(r) => {
                    camera = r
                  }}
              >
                <View style={{
                  flex: 1,
                  width: "100%",
                  backgroundColor: "transparent",
                  flexDirection: "row"
                }}>
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      flexDirection: 'row',
                      flex: 1,
                      width: '100%',
                      padding: 20,
                      justifyContent: 'space-between'
                    }}
                  >
                    <View
                      style={{
                        alignSelf: 'center',
                        flex: 1,
                        alignItems: 'center'
                      }}
                    >
                      <TouchableOpacity
                        onPress={takePicture}
                        style={{
                          width: 70,
                          height: 70,
                          bottom: 0,
                          borderRadius: 50,
                          backgroundColor: '#fff'
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
                <VStack space={5} alignItems="center">
                <Heading textAlign="center" mb="10">
                  쿠폰 등록
                </Heading>
                <TouchableOpacity
                  onPress={handleCamera}
                  style={styles.touchableOpacity}
                >
                  <Center w="64" 
                  _text={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "lg",
                  }}
                  h="20" bg="primary.500" rounded="md" shadow={3}>
                    영수증 인식
                  </Center>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleCamera}
                  style={styles.touchableOpacity}
                >
                  <Center w="64" 
                  _text={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "lg",
                  }}
                  h="20" bg="primary.500" rounded="md" shadow={3}>
                    영수증 가져오기
                  </Center>
                </TouchableOpacity>
                <TouchableOpacity
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
              </TouchableOpacity>
              </VStack>
              </Center>
            </NativeBaseProvider>
          )
          }
          

          <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pictureText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cameraContainer:{
    flex: 1,
    width: "100%",
  }
});

export default App;