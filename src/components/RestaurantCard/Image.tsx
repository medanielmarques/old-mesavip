import { useContext } from 'react';
import Image from 'next/image';
import { RestaurantCardContext } from './contexts/RestaurantCardContext';
import { Box } from '@chakra-ui/react';

export function Thumbnail() {
  const { image, name } = useContext(RestaurantCardContext);

  return (
    <Box w='66' height='140px' borderRadius='sm' overflow='hidden'>
      <Image
        src={image}
        width={264}
        height={140}
        alt={`${name} thumbnail`}
      ></Image>
    </Box>
  );
}
