import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { api } from 'services/api';
import { Hour } from 'types';
import { useRestaurantCtx } from '../[id].page';

export function useTimePicker(selectedDate: Date) {
  const { id } = useRestaurantCtx();

  const [selectedTime, selectedTimeSet] = useState({} as Hour);

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

  function handleClickSelectedTime(i: number) {
    const availableHour = availableHours![i];
    selectedTimeSet(availableHour);
  }

  function handleIsTimeSelected(i: number): boolean {
    if (availableHours![i] === selectedTime) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    if (availableHours) {
      selectedTimeSet(availableHours[0]);
    }
  }, [availableHours, selectedTimeSet]);

  return {
    availableHours,
    isLoading,
    isFetching,
    selectedTime,
    handleClickSelectedTime,
    handleIsTimeSelected,
  };
}
