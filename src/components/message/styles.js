import React from 'react-native';

import {
  PRIMARY_COLOR_DARK,
  PRIMARY_COLOR_LIGHT,
} from '../../theme';

let {
  StyleSheet,
} = React;

let Styles = StyleSheet.create({
  message: {
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 14,
    lineHeight: 18,
    color: PRIMARY_COLOR_DARK,
  },
  url: {
    color: 'red',
    textDecorationLine: 'underline',
  },
  email: {
    textDecorationLine: 'underline',
  },
  phone: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Styles;