import { useEffect } from 'react';
import { Stack } from '@chakra-ui/react';
import { useQuery } from 'react-query';

import { TimePickerHeader } from './time-picker-header';
import { AvailableHours } from './available-hours';
import { BookTableButton } from '../book-table-button';
import { AvailableHoursSkeleton } from 'core/feedback/skeleton';

import { Hour } from 'types';
import { api } from 'services/api';
import { useTimePicker } from 'pages/restaurant/hooks';
import { useRestaurantCtx } from 'pages/restaurant/[id].page';

interface TimePickerProps {
  selectedDate: Date;
}

export function TimePicker({ selectedDate }: TimePickerProps) {
  const { id } = useRestaurantCtx();

  const {
    data: availableHours,
    isLoading,
    isFetching,
  } = useQuery(['available-hours', selectedDate], async () => {
    return api
      .get<Hour[]>(
        `restaurants/available-hours/${id}/${selectedDate.toDateString()}`
      )
      .then((res) => res.data);
  });

  const {
    selectedTime,
    selectedTimeSet,
    handleIsTimeSelected,
    handleClickSelectedTime,
  } = useTimePicker(availableHours!);

  useEffect(() => {
    if (availableHours) {
      selectedTimeSet(availableHours[0]);
    }
  }, [availableHours, selectedTimeSet]);

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
