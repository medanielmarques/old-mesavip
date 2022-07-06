import { Box, BoxProps } from '@chakra-ui/react';

export function Divider({ ...rest }: BoxProps) {
  return <Box border='0.1px solid #eef1f6' {...rest}></Box>;
}
