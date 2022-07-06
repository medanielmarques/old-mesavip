import { Box, BoxProps, Stack } from '@chakra-ui/react';

export function FiltersWrapper({ children }: BoxProps) {
  return (
    <Box
      minW={320}
      h={550}
      mt={12}
      bg='white'
      rounded='lg'
      shadow='sm'
      display={{ base: 'none', xl: 'block' }}
    >
      <Stack spacing={8} mt='8' px='6' mx='auto'>
        {children}
      </Stack>
    </Box>
  );
}
