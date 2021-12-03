import { mode } from '@chakra-ui/theme-tools';
import { dark } from '../dark';
import { light } from '../light';

const Solid = {
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
};

const Outline = {
  outline: (props: any) => ({
    width: '160px',
    height: '55px',
    fontSize: '17px',
    color: mode(light.color.primary, dark.color.primary)(props),
  }),
};

export const Button = {
  Button: {
    variants: {
      ...Solid,
      ...Outline,
    },
  },
};
