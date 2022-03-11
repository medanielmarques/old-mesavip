import { Button, Flex } from '@chakra-ui/react';

interface ShowRatingButtonProps {
  onToggle: () => void;
}

export function ShowRatingButton({ onToggle }: ShowRatingButtonProps) {
  return (
    <Flex justify='center' my='3'>
      <Button
        variant='outline'
        width='56'
        height='10'
        gridGap='2'
        fontSize='md'
        onClick={onToggle}
      >
        Show rating
      </Button>
    </Flex>
  );
}
