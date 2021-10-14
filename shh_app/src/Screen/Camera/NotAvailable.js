import React from 'react';

import { View, Container, Text, Heading, NativeBaseProvider, Center } from 'native-base';
import { FontAwesome } from '@expo/vector-icons'; 
import { StyleSheet} from "react-native";

const NotAvailable = () => {
  return(
    <View style={styles.back}>
  <Center mt="100">
        <FontAwesome name="warning"size={200} color="white" />
        <Heading size="4xl" mt="50"color="muted.50">
          등록되지 않은 {"\n"}
          매장이거나, {"\n"}
          이미 등록한 {"\n"}
          영수증입니다
        </Heading>
       
      </Center>
      </View>
  )
};

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: "#06b6d4",
    alignItems: "center",
  },
});

export default NotAvailable;
