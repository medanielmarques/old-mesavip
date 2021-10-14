import { Input as ChakraInput, useColorModeValue } from '@chakra-ui/react';
import { dark } from 'styles/themes/dark';
import { light } from 'styles/themes/light';

export const Input = (props: any) => {
  const theme = useColorModeValue(light, dark);

  return (
    <ChakraInput
      {...props}
      variant='outline'
      style={{
        height: '70px',
        padding: '20px',
        width: '86.96%',
        fontSize: '17px',
        margin: '0 auto 20px auto',
        display: 'block',
      }}
      _placeholder={{ color: theme.form.input.placeholder }}
    />
  );
};
