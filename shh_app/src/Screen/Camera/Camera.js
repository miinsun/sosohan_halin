import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import PreviewPhoto from './PreviewPhoto';

let camera;

const App =() => {
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

  const takePicture = async () => {
    const photo = await camera.takePictureAsync ();

    setAppData({
      ...appData,
      preview: true,
      photo,
    })
    console.log(photo);
  }
  
  const retakePicture = async () => {
    await setAppData({
      ...appData,
      preview: false,
      photo: null,
    }, async ()=> { await handleCamera() });
  }

  const savePhoto = () => {

  }


  return (
        <View style={styles.container}>
          { appData.hasPermission ? (
            <View style={styles.cameraContainer}>
              {appData.preview && appData.photo ? (
                <PreviewPhoto 
                  photo={appData.photo}
                  retakePicture={retakePicture}
                  savePhoto={savePhoto}
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
            <TouchableOpacity
              onPress={handleCamera}
              style={styles.touchableOpacity}
            >
              <Text
                style={styles.pictureText}
              >
                Take picture
              </Text>
            </TouchableOpacity>
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
  touchableOpacity: {
    width: 130,
    borderRadius: 4,
    backgroundColor: '#14274e',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
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