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
    backgroundColor: 'rgba(52,52,52,.3)',
    padding: 18,
    flexDirection: 'row',
    height: 264,
  },
  emotions: {
    position: 'absolute',
    top: STATUS_BAR_HEIGHT + 160,
    width: SCREEN_WIDTH,
    left: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  face: {
    backgroundColor: 'rgba(255,255,255,.8)',
    height: 24,
    width: 24,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 12,
  },
  mood: {
    backgroundColor: PURPLE,
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
    fontFamily: 'AvenirNext-Regular',
  },
  icon: {
    color: PRIMARY_COLOR_LIGHT,
  },
  video: {
    marginTop: STATUS_BAR_HEIGHT,
    height: 200,
    backgroundColor: 'black',
  },
});

export default Styles;