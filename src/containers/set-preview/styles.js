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
  info: {
    width: SCREEN_WIDTH - 80,
    top: NAV_BAR_HEIGHT + 20,
    left: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: PRIMARY_COLOR_LIGHT,
    fontSize: 20,
    fontFamily: 'AvenirNext-Bold',
    marginBottom: 10,
  },
  createdBy: {
    color: PRIMARY_COLOR_LIGHT,
    fontSize: 18,
    marginBottom: 60,
    fontFamily: 'AvenirNext-Regular',
  },
  description: {
    color: PRIMARY_COLOR_LIGHT,
    fontSize: 14,
    marginBottom: 40,
    textAlign: 'center',
    fontFamily: 'AvenirNext-Regular',
  },
  stats: {
    width: SCREEN_WIDTH - 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spots: {
    color: PRIMARY_COLOR_LIGHT,
    opacity: 0.8,
    fontSize: 16,
    padding: 10,
  },
  open: {
    opacity: 1,
  },
  online: {
    color: PRIMARY_COLOR_LIGHT,
    fontSize: 14,
    fontFamily: 'AvenirNext-Bold',
    padding: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
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