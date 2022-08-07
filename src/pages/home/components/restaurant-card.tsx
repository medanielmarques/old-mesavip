import Link from 'next/link';
import { createContext, useContext } from 'react';
import {
  Grid,
  LinkProps,
  Link as ChakraLink,
  Flex,
  Box,
  Image,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';

import { Restaurant } from 'types';
import { useReviewScore } from 'pages/restaurant/hooks';

const RestaurantCardContext = createContext({} as Restaurant);
const useRestaurantCardCtx = () => useContext(RestaurantCardContext);

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <RestaurantCardContext.Provider value={restaurant}>
      <RestaurantCardWrapper>
        <Thumbnail />

        <Grid
          gridTemplateColumns={{ base: '1fr', md: '3fr 1fr' }}
          ml='4'
          mt='4'
          gridGap='3'
        >
          <Content />
          <ReviewInfo />
        </Grid>
      </RestaurantCardWrapper>
    </RestaurantCardContext.Provider>
  );
}

function RestaurantCardWrapper({ children }: LinkProps) {
  const { id, name } = useRestaurantCardCtx();

  return (
    <Link href={`/restaurant/${id}`} passHref>
      <ChakraLink _hover={{ outline: 'none' }}>
        <Flex
          bg='white'
          borderRadius='lg'
          shadow={{ base: 'none', md: 'base' }}
          _hover={{ shadow: { base: 'none', md: 'md' } }}
          role={name}
        >
          {children}
        </Flex>
      </ChakraLink>
    </Link>
  );
}

function Thumbnail() {
  const { image, name } = useRestaurantCardCtx();

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

function Content() {
  const { name, bairro, culinary } = useRestaurantCardCtx();

  return (
    <Stack spacing={{ base: '1', md: '3' }}>
      <Heading as='h3' fontSize={{ base: 'sm', md: 'lg' }}>
        {name}
      </Heading>

      <Text fontSize={{ base: 'xs', md: 'sm' }}>{bairro}</Text>
      <Text fontSize={{ base: 'xs', md: 'sm' }}>{culinary} • $$$</Text>
    </Stack>
  );
}

function ReviewInfo() {
  const { total_reviews } = useRestaurantCardCtx();

  return (
    <Flex
      align='center'
      w={{ base: '', md: 140 }}
      h={{ base: '', md: 130 }}
      borderLeftStyle='solid'
      borderLeftWidth={{ base: '', md: 'thin' }}
      borderLeftColor={{ base: '', md: 'gray.100' }}
    >
      <Flex
        direction={{ base: 'row', md: 'column' }}
        align='center'
        flexGrow='1'
        gridGap='3'
      >
        <Score />

        <Text fontSize='sm' color='gray.400'>
          {total_reviews} reviews
        </Text>
      </Flex>
    </Flex>
  );
}

function Score() {
  const { avg_rating } = useRestaurantCardCtx();
  const score = useReviewScore(Math.round(avg_rating));

  return (
    <Flex
      align='center'
      justifyContent='center'
      w={{ base: 12, xl: 16 }}
      h={{ base: 6, xl: 8 }}
      bg={score.color}
      color='white'
      borderRadius='2xl'
    >
      <Text fontSize={{ base: 'md', xl: 'lg' }} fontWeight='700'>
        {avg_rating}
      </Text>

      <Text fontSize={{ base: 'xs', xl: 'sm' }} fontWeight='500'>
        /5
      </Text>
    </Flex>
  );
}
