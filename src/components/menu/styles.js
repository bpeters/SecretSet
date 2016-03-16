import React from 'react-native';

import {
  SCREEN_HEIGHT,
  SIDE_MENU_OFFSET,
  PRIMARY_COLOR_DARK,
} from '../../theme';

let {
  StyleSheet,
  Platform,
} = React;

let Styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SIDE_MENU_OFFSET,
    backgroundColor: PRIMARY_COLOR_DARK,
    flexDirection: 'column',
  },
  hide: {
    opacity: 0,
  },
});

export default Styles;