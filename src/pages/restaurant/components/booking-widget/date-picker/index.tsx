import { useContext } from 'react';
import { AccordionItem, AccordionPanel } from '@chakra-ui/react';
import DayPicker from 'react-day-picker/DayPicker';
import 'react-day-picker/lib/style.css';

import { AccordionButton } from './accordion-button';

import { BookingWidgetContext } from '..';
import { UseDatePickerProps } from 'pages/restaurant/hooks';

export function DatePicker(props: UseDatePickerProps) {
  const { selectedDate, formatedDate, today, handleDateChange } = props;

  const { toggleAccordionDatePicker } = useContext(BookingWidgetContext);

  function handleOnDayClick(date: Date) {
    toggleAccordionDatePicker();
    handleDateChange(date);
  }

  return (
    <AccordionItem onClick={toggleAccordionDatePicker}>
      <AccordionButton formatedDate={formatedDate} />

      <AccordionPanel pb={4}>
        <DayPicker
          fromMonth={today}
          disabledDays={{ before: today }}
          selectedDays={selectedDate}
          modifiers={{ highlighted: selectedDate }}
          modifiersStyles={{ highlighted: { backgroundColor: '#F43B4E' } }}
          onDayClick={handleOnDayClick}
        />
      </AccordionPanel>
    </AccordionItem>
  );
}
