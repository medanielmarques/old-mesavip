import { extendTheme } from '@chakra-ui/react';
import { Button } from './Button';

export const theme = extendTheme({
  colors: {
    red: {
      '900': '#751C25',
      '800': '#8F222D',
      '700': '#9B2C2C',
      '600': '#C53030',
      '500': '#DB3545',
      '400': '#F43B4E',
      '300': '#FC8181',
      '200': '#FEB2B2',
      '100': '#FED7D7',
      '50': '#FFF5F5',
    },
    styles: {
      global: {
        body: {
          color: '#000',
        },
      },
    },
  },

  components: {
    ...Button,
  },
});
