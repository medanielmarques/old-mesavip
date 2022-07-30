import {
  Box,
  BoxProps,
  Stack,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Checkbox,
  Divider,
  Grid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';

import { useRestaurantFiltersStore } from 'pages/home/hooks/use-restaurants';
import { useSearchBar } from 'pages/home/hooks/use-search-bar';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useCuisines } from '../hooks/use-cuisines';

export function Filters() {
  return (
    <>
      <FiltersWrapper>
        <SearchBar />
        <Cuisines />
        <Divider />
        <ReviewScore />
      </FiltersWrapper>
    </>
  );
}

function FiltersWrapper({ children }: BoxProps) {
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

export function SearchBar() {
  const { search, searchSet, searchRestaurant, handleClick } = useSearchBar();

  return (
    <Flex as='form' bg='white' mx='auto' w='100%'>
      <InputGroup size='lg'>
        <Input
          fontSize='md'
          name='search'
          type='text'
          placeholder='Find restaurants or cuisines'
          value={search}
          onChange={(e) => searchSet(e.target.value)}
        />

        <InputRightElement
          cursor='pointer'
          borderRightRadius='md'
          _hover={{ bg: 'gray.200' }}
          onClick={handleClick}
        >
          {searchRestaurant ? (
            <FaTimes aria-label='close-icon' />
          ) : (
            <FaSearch aria-label='search-icon' />
          )}
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}

function Cuisines() {
  const { cuisines, handleClick } = useCuisines();

  return (
    <Stack>
      <Text as='b' mb='2'>
        Cuisine
      </Text>

      <Stack>
        {cuisines?.map((cuisine, index) => (
          <Checkbox
            key={index}
            isChecked={cuisine.isChecked}
            colorScheme='yellow'
            size='lg'
            _hover={{ color: 'yellow.400' }}
            onChange={() => handleClick(index)}
          >
            <Text color='gray.500'>
              {/* &#40; &#41; - left and right parentheses */}
              {cuisine.name} &#40;{cuisine.total}&#41;
            </Text>
          </Checkbox>
        ))}
      </Stack>
    </Stack>
  );
}

function ReviewScore() {
  const { filters, updateAvgRating } = useRestaurantFiltersStore();

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
          onChangeEnd={(score) => {
            updateAvgRating(score.toString());
          }}
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
