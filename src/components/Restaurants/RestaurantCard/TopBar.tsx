import { Stack } from '@chakra-ui/react';
import { SearchBar } from 'components/SearchBar';
import { TotalRestaurantsText } from './TotalRestaurantsText';

interface TopBarProps {
  totalRestaurants: number;
  searchRestaurant: string;
  searchRestaurantSet(name: string): void;
}

export function TopBar(props: TopBarProps) {
  const { totalRestaurants, searchRestaurant, searchRestaurantSet } = props;

  return (
    <Stack
      spacing={4}
      w={{
        base: '288px',
        md: '350px',
        lg: '432px',
      }}
      mx={{
        base: 'auto',
        md: 'auto',
        lg: '0',
      }}
    >
      <TotalRestaurantsText length={totalRestaurants} />
      <SearchBar
        searchRestaurant={searchRestaurant}
        searchRestaurantSet={searchRestaurantSet}
      />
    </Stack>
  );
}
