import { GetServerSideProps } from 'next';
import { Box, BoxProps, Divider, Flex, Stack, Text } from '@chakra-ui/react';

import { Filters } from './components/filters';
import { RestaurandCardSkeleton } from 'core/feedback/skeleton';
import { RestaurantCard } from './components/restaurant-card';
import { Footer } from 'core/footer';

import { Restaurant } from 'types';
import { getRestaurants } from 'services/queries/get-restaurants';
import { useRestaurants } from './hooks/use-restaurants';

interface RestaurantsProps {
  initialData: Restaurant[];
}

export default function Home({ initialData }: RestaurantsProps) {
  const { restaurants, isLoading, isFetching, error } =
    useRestaurants(initialData);

  return (
    <RestaurantsWrapper>
      <Filters />

      {isLoading || isFetching ? (
        <RestaurandCardSkeleton />
      ) : error ? (
        <ErrorMessage />
      ) : (
        <Stack spacing={6}>
          <TotalRestaurantsText length={restaurants?.length} />

          {restaurants?.map((restaurant) => (
            <Stack spacing={4} key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
              <Divider display={{ base: 'block', md: 'none' }} />
            </Stack>
          ))}
        </Stack>
      )}
    </RestaurantsWrapper>
  );
}

function RestaurantsWrapper({ children }: BoxProps) {
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

function TotalRestaurantsText({ length }: { length: number | undefined }) {
  return (
    <Text fontSize='sm' fontWeight='400'>
      {length} {length! > 1 ? 'results' : 'result'}
    </Text>
  );
}

function ErrorMessage() {
  return (
    <Text fontSize='20px' align='center'>
      Sorry, restaurant not found!
    </Text>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const initialData = await getRestaurants({ avg_rating: 2 });

  return {
    props: {
      initialData,
    },
  };
};
