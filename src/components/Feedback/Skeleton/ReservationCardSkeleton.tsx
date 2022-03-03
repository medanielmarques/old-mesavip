import { Grid, Skeleton } from '@chakra-ui/react';

export function ReservationCardSkeleton() {
  return (
    <Grid templateColumns='repeat(auto-fill, minmax(384px, 1fr))' gap={6}>
      {Array.from({ length: 15 }).map((_, i) => (
        <Skeleton key={i} w='92' h='48' borderRadius='md' />
      ))}
    </Grid>
  );
}
