import { Text } from '@chakra-ui/react';

interface ErrorMessageProps {
  searchError: boolean;
}

export function ErrorMessage(props: ErrorMessageProps) {
  const { searchError } = props;

  return (
    <Text
      display={!!searchError ? 'block' : 'none'}
      fontSize='20px'
      align='center'
      mt='8'
    >
      Restaurant not found!
    </Text>
  );
}
