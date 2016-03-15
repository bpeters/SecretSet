import React from 'react-native';

import {
  PRIMARY_COLOR_GRAY,
} from '../../theme';

let {
  StyleSheet,
} = React;

let Styles = StyleSheet.create({
  button: {
    marginTop: 3,
    padding: 8,
    paddingLeft: 10,
  },
  text: {
    color: PRIMARY_COLOR_GRAY,
    lineHeight: 16,
    marginTop: 3,
    fontSize: 16,
  },
});

export default Styles;