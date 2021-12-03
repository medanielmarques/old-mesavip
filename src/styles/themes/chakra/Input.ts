import { mode } from '@chakra-ui/theme-tools';
import { dark } from '../dark';
import { light } from '../light';

export const Input = {
  Input: {
    variants: {
      outline: (props: any) => ({
        field: {
          height: '70px',
          padding: '20px',
          width: '400px',
          fontSize: '17px',
          _placeholder: {
            color: mode(
              light.form.input.placeholder,
              dark.form.input.placeholder
            )(props),
          },
        },
      }),
    },
  },
};
