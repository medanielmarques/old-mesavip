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
      height={[235, 277, 346, 415, 540]}
    ></ChakraImage>
  );
}
