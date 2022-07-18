import { Checkbox, Stack, Text } from '@chakra-ui/react';
import { useCuisines } from 'pages/home/hooks/use-cuisines';

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
