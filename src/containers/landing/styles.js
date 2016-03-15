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
  },
  branding: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 2,
  },
  buttons: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup: {
    backgroundColor: PRIMARY_COLOR_LIGHT,
    padding: 10,
    width: SCREEN_WIDTH / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 10,
  },
  signupText: {
    color: RED,
  },
  login: {
    backgroundColor: 'transparent',
    padding: 10,
    width: SCREEN_WIDTH / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: PRIMARY_COLOR_LIGHT,
  },
});

export default Styles;