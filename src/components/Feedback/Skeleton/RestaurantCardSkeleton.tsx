import { SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';

export function RestaurandCardSkeleton() {
  return (
    <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={5}>
      {Array.from({ length: 20 }).map((_, i) => (
        <Stack key={i} w='66' spacing={3}>
          <Skeleton h='32' />
          <Skeleton h='4' />
          <Skeleton h='4' />
        </Stack>
      ))}
    </SimpleGrid>
  );
}
