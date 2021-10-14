import React from "react";
import {
  HStack,
  Stack,
  Center,
  Heading,
  IconButton,
  Icon,
  NativeBaseProvider,
  CheckIcon,
  Select,
  View,
  ScrollView,
  Button,
  Input,
  Text,
  Box,
  Divider,
  VStack,
} from "native-base";
import GoogleMap from "./GoogleMap";
import StoreList from "./StoreList";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import AppBar from "../../layout/AppBar/AppBar";

const Home = () => {
  let [service, setService] = React.useState("");
  return (
      <View backgroundColor="#fff" flex="1">
        <Stack space={3} alignItems="center">
          <HStack space={3}>
            {/* 시도 선택 */}
            <Select
              selectedValue={service}
              minWidth="100"
              accessibilityLabel="시/도"
              placeholder="시/도"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="3" />,
              }}
              mt={3}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
            {/* 구군 선택 */}
            <Select
              selectedValue={service}
              minWidth="100"
              accessibilityLabel="구/군"
              placeholder="구/군"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="3" />,
              }}
              mt={3}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
            <IconButton
              mt={4}
              icon={<MaterialIcons name="gps-fixed" size={24} color="grey" />}
              borderRadius="full"
            />
          </HStack>
        </Stack>
        {/* 매장명 검색 창 */}
        <VStack width="100%" space={5} alignItems="center">
          <Input
            placeholder="매장명 검색"
            variant="filled"
            width="80%"
            bg="gray.100"
            borderRadius="10"
            my="2"
            py="1"
            px="2"
            placeholderTextColor="gray.500"
            _hover={{ bg: "gray.200", borderWidth: 0 }}
            borderWidth="0"
            _web={{
              _focus: { style: { boxShadow: "none" } },
            }}
            InputLeftElement={
              <Icon
                ml="2"
                size="5"
                color="gray.500"
                as={<Ionicons name="ios-search" />}
              />
            }
          />
        </VStack>
        <ScrollView style={{ height: '100%'}}>
          <GoogleMap />
          <StoreList />
        </ScrollView>
      </View>
  );
};

export default Home;
