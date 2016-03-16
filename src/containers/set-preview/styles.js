import React from 'react-native';

import {
  BACKGROUND_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  NAV_BAR_HEIGHT,
  PRIMARY_COLOR_LIGHT,
  PURPLE,
  DARK_PURPLE,
} from '../../theme';

let {
  StyleSheet,
} = React;

let Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: PURPLE,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  info: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  setName: {
    color: PRIMARY_COLOR_LIGHT,
  },
  createdBy: {
    color: PRIMARY_COLOR_LIGHT,
  },
  setDescription: {
    color: PRIMARY_COLOR_LIGHT,
  },
});

export default Styles;