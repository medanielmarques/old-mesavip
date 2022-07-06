import { useContext } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { RestaurantCardContext } from '.';

export function Thumbnail() {
  const { image, name } = useContext(RestaurantCardContext);

  return (
    <Box
      my='auto'
      borderLeftRadius='lg'
      borderRightRadius={{ base: 'lg', md: 'none' }}
    >
      <Image
        src={image}
        alt={`${name} thumbnail`}
        borderLeftRadius='lg'
        borderRightRadius={{ base: 'lg', md: 'none' }}
        w={{ base: 130, md: 240 }}
        maxW={{ base: 130, md: 240 }}
        h={{ base: 100, md: 145 }}
      />
    </Box>
  );
}
