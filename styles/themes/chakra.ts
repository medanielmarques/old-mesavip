import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { dark } from './dark';
import { light } from './light';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const Button = {
  Button: {
    variants: {
      solid: (props: any) => ({
        width: '400px',
        height: '70px',
        fontSize: '20px',
        color: 'white',
        background: mode(
          light.button_solid.background.primary,
          dark.button_solid.background.primary
        )(props),
        _hover: {
          background: mode(
            light.button_solid.on_hover.primary,
            dark.button_solid.on_hover.primary
          )(props),
        },
      }),
      outline: (props: any) => ({
        width: '160px',
        height: '55px',
        fontSize: '17px',
        color: mode(light.color.primary, dark.color.primary)(props),
      }),
    },
  },
};

const Input = {
  Input: {
    variants: {
      outline: {
        width: '86.96%',
        height: '150px',
        fontSize: '60px',
      },
    },
  },
};

export const Base = {
  ...config,
  components: {
    ...Button,
    // ...Input,
  },
};

export const theme = extendTheme(Base);
