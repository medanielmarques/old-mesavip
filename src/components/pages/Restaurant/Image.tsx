import NextImage from 'next/image';

interface ImageProps {
  image_url: string;
}

export function Image({ image_url }: ImageProps) {
  return <NextImage src={image_url} width={781} height={540}></NextImage>;
}
