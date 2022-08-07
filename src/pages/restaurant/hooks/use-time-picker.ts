import { useQuery } from 'react-query';
import { api } from 'services/api';
import { Hour } from 'types';
import { useRestaurantCtx } from '../[id].page';
import { useDatePickerStore } from './date-picker-store';

export function useTimePicker() {
  const { id } = useRestaurantCtx();

  const { selectedTime, selectedDate, updateSelectedTime } =
    useDatePickerStore();

  const {
    data: availableHours,
    isLoading,
    isFetching,
  } = useQuery(['available-hours', selectedDate], async () => {
    return api
      .get<Hour[]>(
        `restaurants/available-hours/${id}/${selectedDate.toDateString()}`
      )
      .then((res) => {
        const availableHours = res.data;
        updateSelectedTime(res.data[0]);
        return availableHours;
      });
  });

  function handleClickSelectedTime(i: number) {
    const availableHour = availableHours![i];
    updateSelectedTime(availableHour);
  }

  const handleIsTimeSelected = (i: number) =>
    availableHours![i] === selectedTime;

  return {
    availableHours,
    isLoading,
    isFetching,
    handleClickSelectedTime,
    handleIsTimeSelected,
  };
}
