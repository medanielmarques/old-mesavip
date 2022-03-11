import { useState } from 'react';
import { Hour } from 'types/hour';

export function useTimePicker(availableHours: Hour[]) {
  const [selectedTime, selectedTimeSet] = useState({} as Hour);

  function handleClickSelectedTime(i: number) {
    const availableHour = availableHours[i];
    selectedTimeSet(availableHour);
  }

  function handleIsTimeSelected(i: number): boolean {
    if (availableHours[i] === selectedTime) {
      return true;
    }
    return false;
  }

  return {
    selectedTime,
    selectedTimeSet,
    handleClickSelectedTime,
    handleIsTimeSelected,
  };
}
