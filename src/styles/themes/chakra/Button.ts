const Solid = {
  solid: () => ({
    width: '400px',
    height: '70px',
    fontSize: '20px',
    color: '#fff',
  }),
};

const Outline = {
  outline: () => ({
    width: '160px',
    height: '55px',
    fontSize: '17px',
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
