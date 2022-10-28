import { extendTheme } from "native-base";

const newColorTheme = {
  components: {
    Button: {
      variants: {
        solid: ({ colorScheme }) => {
          return {
            bg: `${colorScheme}.500`,
            _text: {
              fontWeight: 'bold'
            },
            _pressed: {
              bg: '#1B9EDE'
            }
            
          }
        },
      },
      sizes: {
        md: {
          height: '48px',
        },
      },
      // Can simply pass default props to change default behaviour of components.
      baseStyle: {
        rounded: 'md',
      },
      defaultProps: {
        colorScheme: 'primary',
      },
    },
    Input: {
      variants: {
        filled: ({ colorScheme }) => {
          return {
            borderColor: '#DFE2E3',
            borderWidth: 1,
          };
        },
      },
    },
  },
  colors: {
    primary: {
      500: '#1FB0F7',
    },
    gray: {
      500: '#9E9DA2',
    },
    yellow: {
      100: '#FFC34E',
    },
  }
};
export const theme = extendTheme(newColorTheme);
