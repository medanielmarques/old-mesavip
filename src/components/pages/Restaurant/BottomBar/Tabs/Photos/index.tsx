import { useContext, useEffect, useState } from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';

import { RestaurantContext } from 'pages/restaurant/[id]';
import { Image } from 'components/pages/Restaurant/Image';
import { api } from 'services/api';
import { Texts } from './Texts';

interface Photo {
  id: string;
  path: string;
}

export function Photos() {
  const { id, name } = useContext(RestaurantContext);

  const [photos, photosSet] = useState([] as Photo[]);

  useEffect(() => {
    api
      .get(`files/list/${id}/gallery`)
      .then((response) => photosSet(response.data));
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
