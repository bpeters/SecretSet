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
} from '../../theme';

let {
  StyleSheet,
  PixelRatio,
} = React;

let Styles = StyleSheet.create({
  container: {
    top: STATUS_BAR_HEIGHT + 64,
    backgroundColor: BACKGROUND_COLOR,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  date: {
    marginTop: 8,
    color: PRIMARY_COLOR_GRAY,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bubble: {
    padding: 0,
  },
  bubbleLeft: {
    backgroundColor: 'transparent',
    width: SCREEN_WIDTH - 24 - 16,
    alignSelf: "flex-start",
  },
  bubbleRight: {
    width: SCREEN_WIDTH - 24,
    marginRight: -54,
    backgroundColor: 'transparent',
    alignSelf: "flex-end",
  },
  imagePosition: {
    height: 24,
    width: 24,
    marginLeft: 12,
    marginRight: 12,
  },
  image: {
    borderRadius: 12,
    marginTop: -10,
  },
  name: {
    color: PURPLE,
    fontSize: 12,
    marginLeft: 50,
    marginTop: 20,
  },
  textInputContainer: {
    height: 44,
    borderTopWidth: 1 / PixelRatio.get(),
    borderColor: BORDER_COLOR,
    backgroundColor: PRIMARY_COLOR_LIGHT,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Styles;