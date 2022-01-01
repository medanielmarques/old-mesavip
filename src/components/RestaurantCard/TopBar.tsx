import { Stack } from '@chakra-ui/react';
import { SearchBar } from '../SearchBar';
import { TotalRestaurantsText } from './TotalRestaurantsText';

interface TopBarProps {
  totalRestaurants: number;
  searchRestaurantSet(name: string): void;
}

export function TopBar(props: TopBarProps) {
  const { totalRestaurants, searchRestaurantSet } = props;

  return (
    <Stack
      spacing={4}
      w={{
        base: '288px',
        md: '350px',
        lg: '432px',
      }}
      m={{
        base: '0 auto',
        md: '0 auto',
        lg: '0',
      }}
    >
      <TotalRestaurantsText length={totalRestaurants} />
      <SearchBar searchRestaurantSet={searchRestaurantSet} />
    </Stack>
  );
}
