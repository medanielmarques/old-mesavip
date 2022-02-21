import { Badge, Box } from '@chakra-ui/react';

export function Badges() {
  return (
    <Box>
      <Badge
        variant='solid'
        p='2px 8px'
        borderRadius='md'
        bg='#F8B333'
        fontSize='xs'
      >
        OUTDOOR SEATING
      </Badge>
    </Box>
  );
}
