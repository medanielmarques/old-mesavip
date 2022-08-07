import { useState } from 'react';
import { Accordion, Box } from '@chakra-ui/react';

import { DatePicker } from './date-picker';
import { TimePicker } from './time-picker';

export function BookingWidget() {
  const [accordionIndex, accordionIndexSet] = useState(-1);

  function toggleDatePicker() {
    accordionIndex === 0 ? accordionIndexSet(-1) : accordionIndexSet(0);
  }

  return (
    <Box mt='8' mx={{ base: 'auto', xl: '10' }}>
      <Box position={{ base: 'static', xl: 'sticky' }} top='12'>
        <Accordion borderColor='white' w={350} index={[accordionIndex]}>
          <DatePicker toggleDatePicker={toggleDatePicker} />
        </Accordion>

        <TimePicker />
      </Box>
    </Box>
  );
}
