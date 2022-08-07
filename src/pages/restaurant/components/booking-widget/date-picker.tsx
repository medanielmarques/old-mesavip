import {
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionButtonProps,
  AccordionIcon,
  Flex,
  Text,
} from '@chakra-ui/react';
import DayPicker from 'react-day-picker/DayPicker';
import { FaRegCalendarAlt } from 'react-icons/fa';
import 'react-day-picker/lib/style.css';

import { useDatePickerStore } from 'pages/restaurant/hooks/date-picker-store';

export function DatePicker({ toggleDatePicker }: { toggleDatePicker(): void }) {
  const { today, selectedDate, updateSelectedDate } = useDatePickerStore();

  function handleOnDayClick(date: Date) {
    toggleDatePicker();
    updateSelectedDate(date);
  }

  return (
    <AccordionItem>
      <DatePickerHeader onClick={toggleDatePicker} />

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

export function DatePickerHeader({ ...rest }: AccordionButtonProps) {
  const { formatedDate } = useDatePickerStore();

  return (
    <AccordionButton justifyContent='space-between' {...rest}>
      <Flex gridGap='4' align='center'>
        <FaRegCalendarAlt size='22' color='gray' />

        <Text fontWeight='500' color='red.400'>
          {formatedDate}
        </Text>
      </Flex>

      <AccordionIcon />
    </AccordionButton>
  );
}
