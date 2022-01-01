import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ButtonsContainerProps {
  children: ReactNode;
}

export function ButtonsContainer(props: ButtonsContainerProps) {
  const { children } = props;

  return (
    <Flex
      gridGap={{ sm: '2', md: '4' }}
      direction={{
        sm: 'column',
        md: 'row',
      }}
    >
      {children}
    </Flex>
  );
}
