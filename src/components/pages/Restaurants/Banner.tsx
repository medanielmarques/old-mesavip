import NextImage from 'next/image';
import { Image as ChakraImage } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { api } from 'services/api';
import { RestaurantContext } from 'pages/restaurant/[id]';

export function Banner() {
  const { id } = useContext(RestaurantContext);

  const [bannerImage, bannerImageSet] = useState('/');

  useEffect(() => {
    api
      .get(`files/list/${id}/banner`)
      .then((response) => bannerImageSet(response.data[0].path))
      .catch(() => {});
  }, []);

  return <NextImage src={bannerImage} width={781} height={540}></NextImage>;
}
