import { Flex, Skeleton } from '@chakra-ui/react';

export function AvailableHoursSkeleton() {
  return (
    <Flex gridGap='3' flexFlow='wrap' width={334}>
      {Array.from({ length: 18 }).map((_, i) => (
        <Skeleton key={i} w={100} h='10' rounded='lg' />
      ))}
    </Flex>
  );
}
