import { useContext, useEffect } from 'react';
import { Stack } from '@chakra-ui/react';
import { useQuery } from 'react-query';

import { TimePickerHeader } from './TimePickerHeader';
import { AvailableHours } from './AvailableHours';
import { BookTableButton } from '../BookTableButton';
import { AvailableHoursSkeleton } from 'components/Feedback/Skeleton/AvailableHoursSkeleton';

import { RestaurantContext } from 'pages/restaurant/[id]';
import { Hour } from 'types/hour';
import { useTimePicker } from 'hooks/useTimePicker';
import { api } from 'services/api';

interface TimePickerProps {
  selectedDate: Date;
}

export function TimePicker({ selectedDate }: TimePickerProps) {
  const { id } = useContext(RestaurantContext);

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
