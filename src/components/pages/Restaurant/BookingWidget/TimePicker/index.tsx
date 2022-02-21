import { useContext } from 'react';
import { Stack } from '@chakra-ui/react';

import { TimePickerHeader } from './TimePickerHeader';
import { AvailableHours } from './AvailableHours';
import { BookTableButton } from '../BookTableButton';

import { RestaurantContext } from 'pages/restaurant/[id]';
import { Hour } from 'interfaces/hour';
import { useFetch } from 'hooks/useFetch';
import { useTimePicker } from 'hooks/useTimePicker';

interface TimePickerProps {
  selectedDate: Date;
}

export function TimePicker({ selectedDate }: TimePickerProps) {
  const { id } = useContext(RestaurantContext);

  const { data: availableHours } = useFetch<Hour[]>(
    `restaurants/available-hours/${id}/${selectedDate.toDateString()}`,
    [selectedDate]
  );

  const { selectedTime, handleIsTimeSelected, handleClickSelectedTime } =
    useTimePicker(availableHours!);

  return (
    <Stack pl='4' mt='10' spacing='10' w={350}>
      <TimePickerHeader />

      <AvailableHours
        availableHours={availableHours!}
        handleIsTimeSelected={handleIsTimeSelected}
        handleClickSelectedTime={handleClickSelectedTime}
      />

      <BookTableButton
        selectedTime={selectedTime!}
        selectedDate={selectedDate}
      />
    </Stack>
  );
}
