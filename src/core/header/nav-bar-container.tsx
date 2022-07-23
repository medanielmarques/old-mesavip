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
      px='3'
      bg='white'
      borderBottom='1px solid #f0f2f5'
    >
      {children}
    </Flex>
  );
}