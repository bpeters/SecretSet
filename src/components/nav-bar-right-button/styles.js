import React from 'react-native';

import {
  PRIMARY_COLOR_GRAY,
  PRIMARY_COLOR_DARK,
} from '../../theme';

let {
  StyleSheet,
} = React;

let Styles = StyleSheet.create({
  button: {
    marginTop: 3,
    marginRight: 0,
    padding: 8,
    paddingRight: 10,
  },
  text: {
    color: PRIMARY_COLOR_GRAY,
    padding: 3,
    paddingRight: 0,
    fontSize: 16,
    lineHeight: 16,
  },
  ready: {
    color: PRIMARY_COLOR_DARK,
  }
});

export default Styles;