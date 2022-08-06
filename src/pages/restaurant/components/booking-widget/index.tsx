import { useState } from 'react';
import { Accordion, Box } from '@chakra-ui/react';

import { DatePicker } from './date-picker';
import { TimePicker } from './time-picker';
import { useDatePicker } from 'pages/restaurant/hooks';

export function BookingWidget() {
  const { selectedDate, today, handleDateChange, formatedDate } =
    useDatePicker();

  const [accordionIndex, accordionIndexSet] = useState(-1);

  function toggleDatePicker() {
    accordionIndex === 0 ? accordionIndexSet(-1) : accordionIndexSet(0);
  }

  return (
    <Box mt='8' mx={{ base: 'auto', xl: '10' }}>
      <Box position={{ base: 'static', xl: 'sticky' }} top='12'>
        <Accordion borderColor='white' w={350} index={[accordionIndex]}>
          <DatePicker
            today={today}
            selectedDate={selectedDate}
            formatedDate={formatedDate}
            handleDateChange={handleDateChange}
            toggleDatePicker={toggleDatePicker}
          />
        </Accordion>

        <TimePicker selectedDate={selectedDate} />
      </Box>
    </Box>
  );
}
