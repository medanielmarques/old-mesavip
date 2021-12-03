import { Button, useColorMode, Stack, Input, Flex } from '@chakra-ui/react';
import { Config } from 'src/styles/themes/chakra';

export default function Sandbox() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex p={20} w={1000} m='0 auto' align='center'>
      {console.log(Config)}
      <Stack spacing={4}>
        <Button variant='solid' type='submit' onClick={toggleColorMode}>
          Sign in
        </Button>

        <Button variant='outline' type='submit'>
          Sign out
        </Button>

        <Input variant='outline' placeholder='Input de Teste' />
      </Stack>
    </Flex>
  );
}
