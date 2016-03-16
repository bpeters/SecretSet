import React from 'react-native';

import {
  BACKGROUND_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  NAV_BAR_HEIGHT,
  PRIMARY_COLOR_LIGHT,
  PURPLE,
  DARK_PURPLE,
  BUTTON_WIDTH,
  STATUS_BAR_HEIGHT,
} from '../../theme';

let {
  StyleSheet,
} = React;

let Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: BACKGROUND_COLOR,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  header: {
    position: 'absolute',
    top: STATUS_BAR_HEIGHT,
    left: 0,
    width: SCREEN_WIDTH,
    backgroundColor: 'black',
    padding: 18,
    flexDirection: 'row',
  },
  menu: {
    height: 28,
    width: 28,
  },
  title: {
    color: PRIMARY_COLOR_LIGHT,
    fontSize: 18,
    lineHeight: 24,
    marginLeft: 18,
  },
  icon: {
    color: PRIMARY_COLOR_LIGHT,
  },
});

export default Styles;