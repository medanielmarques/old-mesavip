import create from 'zustand';
import { format, isAfter, isSameDay } from 'date-fns';
import { Hour } from 'types';

interface IDatePickerStore {
  today: Date;
  selectedDate: Date;
  formatedDate: string;
  selectedTime: Hour;
  updateSelectedDate: (newDate: Date) => void;
  updateSelectedTime: (newTime: Hour) => void;
}

// don't update if it's a past day
const handleDateChange = (newDate: Date, today: Date) => {
  if (isSameDay(newDate, today) || isAfter(newDate, today)) return newDate;
};

export const useDatePickerStore = create<IDatePickerStore>((set) => ({
  today: new Date(),
  selectedDate: new Date(),
  formatedDate: '',
  selectedTime: { id: '', hour: '' },

  updateSelectedDate: (newDate: Date) => {
    set((state) => ({
      ...state,
      selectedDate:
        handleDateChange(newDate, state.today) || state.selectedDate,
      formatedDate: format(newDate, 'eeee (dd/MM/yyyy)'),
    }));
  },

  updateSelectedTime: (newTime: Hour) => {
    set((state) => ({
      ...state,
      selectedTime: newTime,
    }));
  },
}));
