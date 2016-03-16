import React from 'react-native';

import {
  BACKGROUND_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  NAV_BAR_HEIGHT,
  PRIMARY_COLOR_LIGHT,
  PRIMARY_COLOR_DARK,
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
  title: {
    marginTop: NAV_BAR_HEIGHT + 20,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
    height: NAV_BAR_HEIGHT + 20,
    backgroundColor: PRIMARY_COLOR_LIGHT,
  },
  input: {
    textAlign: 'center',
    color: PRIMARY_COLOR_DARK,
    height: NAV_BAR_HEIGHT + 20,
    fontSize: 28,
    fontWeight: 'bold',
  }
});

export default Styles;