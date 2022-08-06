import { Button, Flex, Skeleton, Stack, Text } from '@chakra-ui/react';
import { FaRegClock } from 'react-icons/fa';

import { BookTableButton } from './book-table-button';

import { Hour } from 'types';
import { useTimePicker } from 'pages/restaurant/hooks';

export function TimePicker({ selectedDate }: { selectedDate: Date }) {
  const {
    availableHours,
    isLoading,
    isFetching,
    selectedTime,
    handleIsTimeSelected,
    handleClickSelectedTime,
  } = useTimePicker(selectedDate);

  return (
    <Stack pl='4' mt='10' spacing='10' w={350}>
      <TimePickerHeader />

      {isLoading || isFetching ? (
        <AvailableHoursSkeleton />
      ) : (
        <AvailableHours
          availableHours={availableHours!}
          handleIsTimeSelected={handleIsTimeSelected}
          handleClickSelectedTime={handleClickSelectedTime}
        />
      )}

      <BookTableButton
        selectedTime={selectedTime!}
        selectedDate={selectedDate}
      />
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

interface AvailableHoursProps {
  availableHours: Hour[];
  handleClickSelectedTime: (i: number) => void;
  handleIsTimeSelected: (i: number) => boolean;
}

export function AvailableHours({
  availableHours,
  handleClickSelectedTime,
  handleIsTimeSelected,
}: AvailableHoursProps) {
  return (
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
