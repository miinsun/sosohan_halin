import React from 'react'
import { Input, Stack, Center, Heading, NativeBaseProvider } from "native-base"

const InputStore = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px = "3">
      <Stack
        space={4}
        w={{
          base: "70%",
          md: "20%",
        }}
      >
        <Center>
          <Heading textAlign="center" mb="10">
            영수증 직접 입력
          </Heading>
        </Center>
        <Input variant="outline" placeholder="상점 이름" />
        <Input variant="outline" placeholder="사업자 번호" />
      </Stack>
      </Center>
    </NativeBaseProvider>
  )
}

export default InputStore
