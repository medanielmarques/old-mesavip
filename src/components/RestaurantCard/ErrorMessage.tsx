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
    >
      Sorry, restaurant not found!
    </Text>
  );
}
