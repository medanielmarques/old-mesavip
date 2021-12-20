import { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

interface NavBarContainerProps {
  children: ReactNode;
}

export function NavBarContainer({ children }: NavBarContainerProps) {
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      p='0 12px'
    >
      {children}
    </Flex>
  );
}
