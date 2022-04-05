import { Skeleton, Stack } from '@chakra-ui/react';

export function RestaurandCardSkeleton() {
  return (
    <Stack spacing={4} mt='12'>
      {Array.from({ length: 20 }).map((_, i) => (
        <Skeleton
          key={i}
          w={{ base: 300, md: 700 }}
          h={{ base: 125, md: 140 }}
        />
      ))}
    </Stack>
  );
}
