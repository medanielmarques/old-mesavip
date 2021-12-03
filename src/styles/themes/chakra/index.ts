import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { Button } from './Button';
import { Input } from './Input';

const themeConfig: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const Config = {
  ...themeConfig,
  components: {
    ...Button,
    ...Input,
  },
};

export const theme = extendTheme(Config);
