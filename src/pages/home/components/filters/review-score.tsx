import {
  Box,
  Grid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useRestaurantFiltersCtx } from 'contexts';

export function ReviewScore() {
  const { filters, dispatchFilters } = useRestaurantFiltersCtx();

  function handleIsSelected(i: number) {
    if (filters.avg_rating === i) return true;
  }

  return (
    <Stack spacing={3}>
      <Text as='b'>Review score ({filters.avg_rating} and above)</Text>

      <Box my='auto'>
        <Slider
          defaultValue={2}
          min={1}
          max={4}
          step={1}
          colorScheme='yellow'
          onChangeEnd={(score) =>
            dispatchFilters({
              type: 'avg_rating',
              payload: { avg_rating: score },
            })
          }
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>

          <SliderThumb w='5' h='5' shadow='md' />
        </Slider>

        <Grid templateColumns='repeat(4, 1fr)' gridGap={20}>
          {Array.from({ length: 4 }).map((_, i) => (
            <Box key={i}>
              <Text
                fontWeight='700'
                color={handleIsSelected(i + 1) ? 'yellow.500' : 'gray.400'}
              >
                {i + 1}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}
