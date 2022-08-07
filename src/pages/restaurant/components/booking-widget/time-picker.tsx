import { Button, Flex, Skeleton, Stack, Text } from '@chakra-ui/react';
import { FaRegClock } from 'react-icons/fa';

import { BookTableButton } from './book-table-button';

import { useTimePicker } from 'pages/restaurant/hooks';

export function TimePicker() {
  return (
    <Stack pl='4' mt='10' spacing='10' w={350}>
      <TimePickerHeader />
      <AvailableHours />
      <BookTableButton />
    </Stack>
  );
}

function TimePickerHeader() {
  return (
    <Flex gridGap='4' align='center'>
      <FaRegClock size='22' color='gray' />

      <Text fontWeight='500' color='red.400'>
        Choose a time:
      </Text>
    </Flex>
  );
}

export function AvailableHours() {
  const {
    availableHours,
    isLoading,
    isFetching,
    handleIsTimeSelected,
    handleClickSelectedTime,
  } = useTimePicker();

  return (
    <>
      {isLoading || isFetching ? (
        <AvailableHoursSkeleton />
      ) : (
        <Flex gridGap='3' flexFlow='wrap' width={334}>
          {availableHours?.map((availableHour, i) => (
            <Button
              key={i}
              width={100}
              rounded='lg'
              bg={handleIsTimeSelected(i) ? 'red.300' : 'gray.100'}
              color={handleIsTimeSelected(i) ? 'white' : 'inherit'}
              _hover={{ bg: handleIsTimeSelected(i) ? 'red.300' : 'gray.300' }}
              onClick={() => handleClickSelectedTime(i)}
            >
              {availableHour.hour}
            </Button>
          ))}
        </Flex>
      )}
    </>
  );
}

function AvailableHoursSkeleton() {
  return (
    <Flex gridGap='3' flexFlow='wrap' width={334}>
      {Array.from({ length: 18 }).map((_, i) => (
        <Skeleton key={i} w={100} h='10' rounded='lg' />
      ))}
    </Flex>
  );
}
