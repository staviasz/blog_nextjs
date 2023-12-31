export interface Theme {
  name: string;
  colors: { [key: string]: string };
  font: { [key: string]: { [key: string]: string } };
  media: { [key: string]: string };
  spacings: { [key: string]: string };
  sizes: { [key: string]: string };
}

export const theme: Theme = {
  name: 'default',
  colors: {
    primary: '#000',
    secondary: '#dc143c',
    darkText: '#333',
    white: '#FFF',
    mediumGray: '#DDD',
    darkerGray: '#AAAAAA',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
    },
    sizes: {
      small: '1.4rem',
      xsmall: '1.6rem',
      xxsmall: '1.8rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
    lteSmall: '(max-width: 500px)',
  },
  spacings: {
    small: '1.4rem',
    xsmall: '1.6rem',
    xxsmall: '1.8rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
  sizes: {
    max: '96rem',
    content: '80rem',
  },
};
