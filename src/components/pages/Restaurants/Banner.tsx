import NextImage from 'next/image';

interface BannerProps {
  banner_url: string;
}

export function Banner({ banner_url }: BannerProps) {
  return <NextImage src={banner_url} width={781} height={540}></NextImage>;
}
