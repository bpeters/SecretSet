import React from 'react-native';

import {
  BACKGROUND_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  NAV_BAR_HEIGHT,
  AVATAR_SIZE,
  PRIMARY_COLOR_GRAY,
  PRIMARY_COLOR_LIGHT,
  BORDER_COLOR,
  STATUS_BAR_HEIGHT,
  PURPLE,
  PRIMARY_COLOR_DARK,
} from '../../theme';

let {
  StyleSheet,
  PixelRatio,
} = React;

let Styles = StyleSheet.create({
  container: {
    bottom: 60,
    backgroundColor: PRIMARY_COLOR_LIGHT,
    width: SCREEN_WIDTH - 40,
    left: 20,
    height: 400,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      width: 2,
      height: 2
    },
  },
  title: {
    width: SCREEN_WIDTH - 40 - 20,
    marginLeft: 10,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  underTitle: {
    width: SCREEN_WIDTH - 40 - 20,
    marginLeft: 10,
    flexDirection: 'row',
    padding: 10,
  },
  time: {
    color: PRIMARY_COLOR_DARK,
    fontSize: 12,
    fontFamily: 'AvenirNext-Bold',
    flex: 1,
  },
  location: {
    color: PURPLE,
    fontSize: 12,
    fontFamily: 'AvenirNext-Regular',
  },
  date: {
    color: PRIMARY_COLOR_DARK,
    fontSize: 12,
    fontFamily: 'AvenirNext-Bold',
    flex: 1,
    textAlign: 'right',
  },
  QR: {
    alignSelf: 'center',
    width: 300,
    height: 300,
  },
});

export default Styles;