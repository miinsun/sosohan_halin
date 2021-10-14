import React from "react";
import {PROVIDER_GOOGLE} from 'react-native-maps';
import MapView, {Marker}  from 'react-native-maps';
import { StyleSheet, Dimensions  } from 'react-native';
import { Box, Center} from 'native-base';

const GoogleMap = () => {
  return (
    <Center>
    <Box>
      <MapView style={styles.map} 
      zoomEnabled={true}
      provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.497,
          longitude:  127.0280,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.021,
        }}
      >
      <Marker
          coordinate={{latitude:  37.497, longitude: 127.030}}
          title="마초 쉐프"
          description="이탈리아 음식점"
        />
        <Marker
          coordinate={{latitude:  37.493, longitude: 127.02}}
          title="무월식탁"
          description="일식당 및 일정식집"
        />
        <Marker
          coordinate={{latitude:  37.492, longitude: 127.035}}
          title="미즈컨테이너"
          description="서양음식전문점"
        />
        <Marker
          coordinate={{latitude:  37.495, longitude: 127.028}}
          title="호랑이 식당"
          description="아시아 레스토랑"
        />
      </MapView>
      <Center
          bg="primary.500"
          _text={{ color: 'white', fontWeight: '700', fontSize: '2xl' }}
          position="absolute"
          top={0}
          px="2"
          py="1"
        >
          추천 매장
        </Center>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({

  map: {
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.4,
  },
});

export default GoogleMap;
