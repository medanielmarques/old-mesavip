import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ButtonsContainerProps {
  children: ReactNode;
}

export function ButtonsContainer(props: ButtonsContainerProps) {
  const { children } = props;

  return (
    <Flex
      gridGap={{ base: '2', md: '4' }}
      direction={{
        base: 'column',
        md: 'row',
      }}
    >
      {children}
    </Flex>
  );
}
