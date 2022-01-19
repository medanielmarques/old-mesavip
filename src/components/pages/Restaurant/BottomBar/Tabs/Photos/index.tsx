import { useContext, useEffect, useState } from 'react';
import { Box, Stack } from '@chakra-ui/react';

import { RestaurantContext } from 'pages/restaurant/[id]';
import { Image } from 'components/pages/Restaurant/Image';
import { Texts } from './Texts';
import { api } from 'services/api';

interface Photo {
  id: string;
  path: string;
}

export function Photos() {
  const { id } = useContext(RestaurantContext);

  const [photos, photosSet] = useState([] as Photo[]);

  useEffect(() => {
    api
      .get(`files/list/${id}/gallery`)
      .then((response) => photosSet(response.data))
      .catch(() => {});
  }, []);

  return (
    <Box>
      <Texts total_photos={photos.length} />

      <Stack gap='8'>
        {photos.map((photo) => (
          <Image key={photo.id} image_url={photo.path} />
        ))}
      </Stack>
    </Box>
  );
}
