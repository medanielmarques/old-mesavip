import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    red: {
      '900': '#751C25',
      '800': '#8F222D',
      '700': '#9B2C2C',
      '600': '#C53030',
      '500': '#DB3545',
      '400': '#F43B4E',
      '300': '#E65C67',
      '200': '#FEB2B2',
      '100': '#FED7D7',
      '50': '#FFF5F5',
    },
    yellow: {
      '900': '#5F370E',
      '800': '#744210',
      '700': '#975A16',
      '600': '#B7791F',
      '500': '#F8B333',
      '400': '#FFC534',
      '300': '#FFD233',
      '200': '#FAF089',
      '100': '#FEFCBF',
      '50': '#FFFFF0',
    },
  },
  styles: {
    global: {
      body: {
        color: 'gray.600',
      },
    },
  },
});
