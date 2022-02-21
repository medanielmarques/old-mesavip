import { Image as ChakraImage } from '@chakra-ui/react';

interface ImageProps {
  image_url: string;
  alt: string;
}

export function Image({ image_url, alt }: ImageProps) {
  return (
    <ChakraImage
      src={image_url}
      alt={alt}
      // width={[340, 400, 500, 600, 780]}
      height={[235, 277, 346, 415, 540]}
    ></ChakraImage>
  );
}
