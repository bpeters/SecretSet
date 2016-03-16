import React from 'react-native';

import {
  BACKGROUND_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  NAV_BAR_HEIGHT,
  PRIMARY_COLOR_LIGHT,
  PRIMARY_COLOR_DARK,
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
  title: {
    marginTop: NAV_BAR_HEIGHT + 20,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'AvenirNext-Bold',
    color: PRIMARY_COLOR_LIGHT,
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
    color: PURPLE,
    height: NAV_BAR_HEIGHT + 20,
    fontSize: 28,
    fontFamily: 'AvenirNext-Bold',
  },
  buttonContainer: {
    marginTop: 40,
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
    fontFamily: 'AvenirNext-Bold',
  },
});

export default Styles;