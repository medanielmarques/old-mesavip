import { FormEvent, ReactNode } from 'react';
import { Flex, FormControlProps } from '@chakra-ui/react';

interface FormContainerProps extends FormControlProps {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLDivElement>) => void;
}

export function FormContainer(props: FormContainerProps) {
  const { children, onSubmit, ...rest } = props;

  return (
    <Flex
      as='form'
      align='center'
      direction='column'
      w={{ base: 320, md: 400 }}
      minH='100vh'
      pt={15}
      onSubmit={onSubmit}
      {...rest}
    >
      {children}
    </Flex>
  );
}
