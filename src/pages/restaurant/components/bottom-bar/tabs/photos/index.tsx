import { useQuery } from 'react-query';
import { Box, Stack } from '@chakra-ui/react';

import { Texts } from './texts';

import { api } from 'services/api';
import { useRestaurantCtx } from 'pages/restaurant/hooks';
import { Image } from 'pages/restaurant/components/image';
import { PhotosTabSkeleton } from 'core/feedback/skeleton';

interface Photo {
  id: string;
  path: string;
}

export function Photos() {
  const { id } = useRestaurantCtx();

  const { data: photos, isLoading } = useQuery('photos-tab', async () => {
    return api.get<Photo[]>(`files/list/${id}/gallery`).then((res) => res.data);
  });

  return (
    <Box>
      <Texts total_photos={photos?.length} />
      {isLoading ? (
        <PhotosTabSkeleton />
      ) : (
        <Stack gridGap='8'>
          {photos?.map((photo) => (
            <Image
              key={photo.id}
              image_url={photo.path}
              alt='Restaurant surroudings and/or food'
            />
          ))}
        </Stack>
      )}
    </Box>
  );
}
