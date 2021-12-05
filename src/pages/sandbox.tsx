import { Button, Stack, Input, Flex } from '@chakra-ui/react';
import { Config } from 'src/styles/themes/chakra';

export default function Sandbox() {
  return (
    <Flex p={20} w={1000} m='0 auto' align='center'>
      {console.log(Config)}
      <Stack spacing={4}>
        <Button variant='solid' type='submit'>
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
