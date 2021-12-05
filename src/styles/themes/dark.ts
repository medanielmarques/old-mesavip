// Site de comida com dark mode kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk é mole

export const dark = {
  separator: '#3b3f42',
  logo: 'https://bit.ly/2UjKlSb',
  headerShadow: `--tw-shadow: 0 4px 1.25px -1px rgba(255, 255, 255, 0.1),
  0 2px 1px -1px rgba(255, 255, 255, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
  var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);`,

  color: {
    primary: '#fff',
    secondary: '#0a8af3',
  },

  background: {
    primary: '#2d333b',
    secondary: '#22272e',
  },

  button_solid: {
    background: {
      primary: '#444c56',
      secondary: '#347d39',
    },
    on_hover: {
      primary: '#535c66',
      secondary: '#3e8f42',
    },
  },

  button_outline: {
    on_hover: {
      primary: '#363E47',
      secondary: '#f3f6fa',
    },
  },

  form: {
    background: '#22272e',
    separator: '#3b3f42',
    boxShadow:
      '5px 2px 4px rgb(76 86 102 / 25%), 0 8px 16px rgb(76 86 102 / 25%)',

    input: {
      // I don't think I need this border here
      // Cause I'm just using Chakra's built-in
      border: '#4c5666d2',
      placeholder: '#b5b9be',
    },
  },
};
