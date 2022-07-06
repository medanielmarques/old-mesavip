import { Box, BoxProps, Flex, Stack } from '@chakra-ui/react';
import { Footer } from 'core/footer';

export function RestaurantsWrapper({ children }: BoxProps) {
  return (
    <>
      <Box bg={{ base: 'inherit', md: 'gray.50' }} minHeight='100vh'>
        <Box px={{ base: '6', md: '24' }} pt='8'>
          <Stack spacing={6}>
            <Flex gridGap='12' mx='auto'>
              {children}
            </Flex>
          </Stack>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
