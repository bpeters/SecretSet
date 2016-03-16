import React from 'react-native';

import {
  BACKGROUND_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  NAV_BAR_HEIGHT,
  PRIMARY_COLOR_LIGHT,
  RED,
} from '../../theme';

let {
  StyleSheet,
} = React;

let Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: RED,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  big: {
    fontSize: 30,
    color: PRIMARY_COLOR_LIGHT,
    marginBottom: 10,
    fontFamily: 'AvenirNext-Bold',
  },
  small: {
    fontSize: 18,
    color: PRIMARY_COLOR_LIGHT,
    fontFamily: 'AvenirNext-Regular',
  },
});

export default Styles;