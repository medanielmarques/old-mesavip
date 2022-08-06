import { useEffect, useState } from 'react';
import { isAfter, isSameDay, format as dateFnsFormat } from 'date-fns';

export function useDatePicker() {
  const [selectedDate, selectedDateSet] = useState(new Date());
  const [formatedDate, formatedDateSet] = useState('');
  const today = new Date();

  useEffect(() => {
    const date = formatDate(selectedDate, 'eeee (dd/MM/yyyy)');
    formatedDateSet(date);
  }, [selectedDate]);

  function handleDateChange(date: Date) {
    if (isSameDay(date, today) || isAfter(date, today)) {
      selectedDateSet(date);
    }
  }

  function formatDate(date: Date, format: string) {
    return dateFnsFormat(date, format);
  }

  return { selectedDate, formatedDate, today, handleDateChange };
}
