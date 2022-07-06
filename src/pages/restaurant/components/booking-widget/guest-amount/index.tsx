import { useState } from 'react';
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  AccordionItemProps,
  Flex,
} from '@chakra-ui/react';
import { FaUserFriends } from 'react-icons/fa';

import { GuestAmountButton } from './guest-ammount-button';

export function GuestAmount({ ...rest }: AccordionItemProps) {
  const [selectedGuestAmount, selectedGuestAmountSet] = useState(2);

  function handleIsSelected(amount: number) {
    return amount === selectedGuestAmount ? true : false;
  }

  function handleClickGuestAmount(amount: number) {
    selectedGuestAmountSet(amount);
  }

  return (
    <AccordionItem {...rest} mb='4'>
      <AccordionButton justifyContent='space-between'>
        <Flex gridGap='4' align='center'>
          <FaUserFriends size='22' color='gray' />
          <Text color='red.400' fontWeight='500'>
            {selectedGuestAmount} people
          </Text>
        </Flex>

        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel pb={4} display='flex' gridGap='2'>
        {Array.from([1, 2, 3, 4, 5, 6]).map((amount, i) => (
          <GuestAmountButton
            key={i}
            amount={amount}
            selected={handleIsSelected(amount)}
            onClick={() => handleClickGuestAmount(amount)}
          />
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
}
