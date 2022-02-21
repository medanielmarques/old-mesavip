import {
  AccordionButton as ChakraAccordionButton,
  AccordionButtonProps as ChakraAccordionButtonProps,
  AccordionIcon,
  Flex,
  Text,
} from '@chakra-ui/react';
import { FaRegCalendarAlt } from 'react-icons/fa';

interface AccordionButtonProps extends ChakraAccordionButtonProps {
  formatedDate: string;
}

export function AccordionButton(props: AccordionButtonProps) {
  const { formatedDate, ...rest } = props;

  return (
    <ChakraAccordionButton justifyContent='space-between' {...rest}>
      <Flex gridGap='4' align='center'>
        <FaRegCalendarAlt size='22' color='gray' />

        <Text color='red.400' fontWeight='500'>
          {formatedDate}
        </Text>
      </Flex>

      <AccordionIcon />
    </ChakraAccordionButton>
  );
}
