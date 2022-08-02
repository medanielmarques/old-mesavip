import { Image as ChakraImage, ImageProps } from '@chakra-ui/react';

export function Image({ ...rest }: ImageProps) {
  return <ChakraImage {...rest} height={[235, 277, 346, 415, 540]} />;
}
