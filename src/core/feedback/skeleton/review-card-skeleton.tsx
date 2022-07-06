import { Box, Skeleton, Stack } from '@chakra-ui/react';

export function ReviewCardSkeleton() {
  return (
    <Stack spacing='3'>
      {Array.from({ length: 10 }).map((_, i) => (
        <Skeleton key={i} h='44' />
      ))}
    </Stack>
  );
}
