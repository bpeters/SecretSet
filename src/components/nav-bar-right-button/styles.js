import React from 'react-native';

import {
  PRIMARY_COLOR_GRAY,
  PRIMARY_COLOR_LIGHT,
  PRIMARY_COLOR_DARK,
} from '../../theme';

let {
  StyleSheet,
} = React;

let Styles = StyleSheet.create({
  button: {
    marginTop: 8,
    marginRight: 0,
    padding: 10,
    paddingRight: 18,
  },
  text: {
    color: PRIMARY_COLOR_GRAY,
    padding: 3,
    paddingRight: 0,
    fontSize: 18,
    lineHeight: 20,
    fontFamily: 'AvenirNext-Medium',
  },
  ready: {
    color: PRIMARY_COLOR_DARK,
  },
});

export default Styles;