import {
  AccordionItem,
  AccordionPanel,
  AccordionButton as ChakraAccordionButton,
  AccordionButtonProps as ChakraAccordionButtonProps,
  AccordionIcon,
  Flex,
  Text,
} from '@chakra-ui/react';
import DayPicker from 'react-day-picker/DayPicker';
import 'react-day-picker/lib/style.css';
import { FaRegCalendarAlt } from 'react-icons/fa';

interface DatePickerProps {
  selectedDate: Date;
  today: Date;
  formatedDate: string;
  handleDateChange(date: Date): void;
  toggleDatePicker(): void;
}

export function DatePicker({
  selectedDate,
  formatedDate,
  today,
  handleDateChange,
  toggleDatePicker,
}: DatePickerProps) {
  function handleOnDayClick(date: Date) {
    toggleDatePicker();
    handleDateChange(date);
  }

  return (
    <AccordionItem>
      <AccordionButton formatedDate={formatedDate} onClick={toggleDatePicker} />

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

interface AccordionButtonProps extends ChakraAccordionButtonProps {
  formatedDate: string;
}

export function AccordionButton({
  formatedDate,
  ...rest
}: AccordionButtonProps) {
  return (
    <ChakraAccordionButton justifyContent='space-between' {...rest}>
      <Flex gridGap='4' align='center'>
        <FaRegCalendarAlt size='22' color='gray' />

        <Text fontWeight='500' color='red.400'>
          {formatedDate}
        </Text>
      </Flex>

      <AccordionIcon />
    </ChakraAccordionButton>
  );
}
