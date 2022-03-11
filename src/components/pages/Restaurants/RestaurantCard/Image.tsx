import Image from 'next/image';
import { useContext } from 'react';
import { Box } from '@chakra-ui/react';

import { RestaurantCardContext } from '.';

export function Thumbnail() {
  const { image, name } = useContext(RestaurantCardContext);

  return (
    <Box w='66' h='32' borderRadius='sm' overflow='hidden'>
      <Image
        src={image}
        width={264}
        height={140}
        alt={`${name} thumbnail`}
      ></Image>
    </Box>
  );
}
