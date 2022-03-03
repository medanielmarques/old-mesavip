import { Badge, Box } from '@chakra-ui/react';

export function Badges() {
  return (
    <Box>
      <Badge
        variant='solid'
        px='2'
        py='0.5'
        borderRadius='md'
        bg='#F8B333'
        fontSize='xs'
      >
        OUTDOOR SEATING
      </Badge>
    </Box>
  );
}
