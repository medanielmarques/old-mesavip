import { Box, BoxProps } from '@chakra-ui/react';

export function ReservationCardWrapper({ children }: BoxProps) {
  return (
    <Box w='92' h='52' p='4' borderRadius='md' shadow='base'>
      {children}
    </Box>
  );
}
