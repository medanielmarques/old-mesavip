import { Button, useColorMode } from '@chakra-ui/react';
import { Base } from 'styles/themes/chakra';

export default function Sandbox() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div style={{ padding: '20px' }}>
      {console.log(Base)}
      <Button variant='solid' type='submit' onClick={toggleColorMode}>
        Sign in
      </Button>
      <Button variant='outline' type='submit'>
        Sign out
      </Button>
    </div>
  );
}
