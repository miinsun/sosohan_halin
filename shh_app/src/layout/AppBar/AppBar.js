import React from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  Center,
  Box,
  StatusBar,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const AppBar = ({ title }) => {
  return (
    <>
      <StatusBar backgroundColor="muted.50" />
      <HStack
        bg="muted.50"
        px="3"
        justifyContent="space-between"
        alignItems="center"
        shadow={2}
      >
        <HStack space="4">
          <Text color="info.600" fontSize="20" fontWeight="bold">
            {title}
          </Text>
        </HStack>
        <HStack space="2">
          <IconButton
            icon={
              <MaterialIcons name="account-circle" size={30} color="info.600" />
            }
            borderRadius="full"
          />
        </HStack>
      </HStack>
    </>
  );
};

export default AppBar;
