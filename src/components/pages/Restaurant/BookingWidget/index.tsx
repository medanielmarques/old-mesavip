import { createContext, useState } from 'react';
import { Accordion, Box } from '@chakra-ui/react';

import { DatePicker } from './DatePicker';
import { TimePicker } from './TimePicker';

import { useDatePicker } from 'hooks/useDatePicker';

export const BookingWidgetContext = createContext(
  {} as BookingWidgetContextData
);

interface BookingWidgetContextData {
  toggleAccordionDatePicker(): void;
}

export function BookingWidget() {
  const { selectedDate, today, handleDateChange, formatedDate } =
    useDatePicker();

  const [accordionIndex, accordionIndexSet] = useState(-1);

  function toggleAccordionDatePicker() {
    accordionIndex === 0 ? accordionIndexSet(-1) : accordionIndexSet(0);
  }

  return (
    <BookingWidgetContext.Provider value={{ toggleAccordionDatePicker }}>
      <Box mt='8' mx={{ base: 'auto', xl: '10' }}>
        <Box position={{ base: 'static', xl: 'sticky' }} top='12'>
          <Accordion
            allowToggle
            borderColor='white'
            w={350}
            index={[accordionIndex]}
          >
            <DatePicker
              today={today}
              selectedDate={selectedDate}
              formatedDate={formatedDate}
              handleDateChange={handleDateChange}
            />
          </Accordion>

          <TimePicker selectedDate={selectedDate} />
        </Box>
      </Box>
    </BookingWidgetContext.Provider>
  );
}
