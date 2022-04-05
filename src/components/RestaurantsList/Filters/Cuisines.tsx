import { Checkbox, Stack, Text } from '@chakra-ui/react';
import { useCuisines } from 'hooks/restaurants/useCuisines';

export function Cuisines() {
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
            <Text color='gray.500'>{cuisine.name} (1)</Text>
          </Checkbox>
        ))}
      </Stack>
    </Stack>
  );
}
