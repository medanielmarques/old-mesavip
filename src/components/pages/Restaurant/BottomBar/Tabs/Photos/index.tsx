import { useContext } from 'react';
import { useQuery } from 'react-query';
import { Box, Stack } from '@chakra-ui/react';

import { PhotosTabSkeleton } from 'components/Feedback/Skeleton/ImagesSkeleton';
import { Image } from 'components/pages/Restaurant/Image';
import { Texts } from './Texts';

import { RestaurantContext } from 'pages/restaurant/[id]';
import { api } from 'services/api';

interface Photo {
  id: string;
  path: string;
}

export function Photos() {
  const { id } = useContext(RestaurantContext);

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
