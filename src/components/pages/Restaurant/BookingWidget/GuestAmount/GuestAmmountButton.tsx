import { Box, BoxProps, Text } from '@chakra-ui/react';

interface GuestAmountButtonProps extends BoxProps {
  amount: number;
  selected: boolean;
}

export function GuestAmountButton(props: GuestAmountButtonProps) {
  const { amount, selected, ...rest } = props;

  return (
    <Box
      w='10'
      h='10'
      rounded='full'
      display='flex'
      justifyContent='center'
      alignItems='center'
      cursor='pointer'
      bg={!!selected ? 'red.300' : 'inherit'}
      _hover={{ bg: !selected ? 'gray.100' : 'red.300' }}
      {...rest}
    >
      <Text color={!!selected ? 'white' : 'inherit'} fontSize='xs'>
        {amount}
      </Text>
    </Box>
  );
}
