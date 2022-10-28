import * as React from 'react';
import { Text as NativeBaseText } from 'native-base';
import PropTypes from 'prop-types';

const atomicPropsValues = {
  // Sizes (Atomic style)
  sm: { fontSize: '14px' },
  xs: { fontSize: '11px' },
  lg: { fontSize: 'lg' },

  // styles (Atomic style)
  bold: { fontWeight: 'bold' },
  semibold: { fontWeight: 'semibold' },
  
  // colors (Atomic style)
  white: { color: 'white' },
  gray500: { color: 'gray.500' },
  yellow100: { color: 'yellow.500' },
}

const textPropsValue = () => {
  const {
    sm, lg, xs,
    bold, semibold,
    white, gray500, yellow100,
  } = atomicPropsValues;

  return {
    title1Black: { fontSize: '18px', ...bold },
    title1BlackSemibold: { fontSize: '18px', ...semibold },
    title2Black: { fontSize: '16px', ...bold },

    xsSemiboldGray500: { ...xs, ...gray500, ...semibold },
    xsBlack: { ...xs },
    xsYellow100: { ...xs },
    xsYellow100Bold: { ...xs, ...bold, ...yellow100 },
  }
};

export const getTextProps = (type) => {
  return textPropsValue()[type];
}

const Text = ({ type, children, ...rest }) => {
  return <NativeBaseText {...getTextProps(type)} {...rest} >{children}</NativeBaseText>
}

Text.propTypes = {
  type: PropTypes.oneOf(
    Object.keys(textPropsValue()).map(key => String(key))
  )
}

export default Text;
