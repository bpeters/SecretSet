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
  branding: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 1.8,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    width: SCREEN_WIDTH / 1.8,
  },
  buttonContainer: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: PRIMARY_COLOR_LIGHT,
    padding: 18,
    width: BUTTON_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 10,
  },
  buttonText: {
    color: PURPLE,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Styles;