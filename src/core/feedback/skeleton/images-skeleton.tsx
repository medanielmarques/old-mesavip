import { Skeleton, Stack } from '@chakra-ui/react';

export function ImageSkeleton() {
  return <Skeleton h={[235, 277, 346, 415, 540]} />;
}

export function PhotosTabSkeleton() {
  return (
    <Stack gridGap='8'>
      {Array.from({ length: 5 }).map((_, i) => (
        <ImageSkeleton key={i} />
      ))}
    </Stack>
  );
}
