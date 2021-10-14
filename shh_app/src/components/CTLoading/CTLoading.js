import React from "react";
import {
    Spinner,
    Heading,
    Center,
    NativeBaseProvider,
  } from "native-base"

const CTLoading = () => (
  <Center flex={1} bg="#eee">
      <Spinner size="lg" />
      {/* <Spinner accessibilityLabel="Loading posts" /> */}
      {/* <Heading color="primary.500" fontSize="md">
        Loading
      </Heading> */}
  </Center>
);

export default CTLoading;
