import { Box, Image, Skeleton, Stack, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';

import { api } from 'services/api';
import { useRestaurantCtx } from 'pages/restaurant/[id].page';

function usePhotos() {
  interface Photo {
    id: string;
    path: string;
  }

  const { id } = useRestaurantCtx();

  return useQuery('photos-tab', async () => {
    return api.get<Photo[]>(`files/list/${id}/gallery`).then((res) => res.data);
  });
}

export function PhotosTab() {
  const { data: photos, isLoading } = usePhotos();

  return (
    <Box>
      <Description total_photos={photos?.length} />

      {isLoading ? (
        <PhotosTabSkeleton />
      ) : (
        <Stack gridGap='8'>
          {photos?.map((photo) => (
            <Image
              key={photo.id}
              src={photo.path}
              alt='Restaurant surroudings and/or food'
              height={[235, 277, 346, 415, 540]}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
}

export function Description({ total_photos }: { total_photos?: number }) {
  const { name } = useRestaurantCtx();

  return (
    <Box>
      <Text fontSize='2xl' fontWeight='700'>
        Photos of {name}
      </Text>

      <Text fontSize='md' mt='2' mb='6'>
        Get a feel for the food and the atmosphere at {name}
      </Text>

      <Text fontSize='sm' fontWeight='600' mb='5'>
        {total_photos} pictures, taken by {name}
      </Text>
    </Box>
  );
}

function PhotosTabSkeleton() {
  return (
    <Stack gridGap='8'>
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton h={[235, 277, 346, 415, 540]} key={i} />
      ))}
    </Stack>
  );
}
