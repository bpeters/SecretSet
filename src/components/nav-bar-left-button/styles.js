import React from 'react-native';

import {
  PRIMARY_COLOR_GRAY,
  PRIMARY_COLOR_DARK,
  PRIMARY_COLOR_LIGHT,
} from '../../theme';

let {
  StyleSheet,
} = React;

let Styles = StyleSheet.create({
  button: {
    marginTop: 8,
    padding: 10,
    paddingLeft: 18,
  },
  text: {
    color: PRIMARY_COLOR_DARK,
    lineHeight: 18,
    marginTop: 3,
    fontSize: 18,
  },
  icon: {
    color: PRIMARY_COLOR_LIGHT,
  },
});

export default Styles;