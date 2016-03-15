import React from 'react-native';

let {
  Dimensions,
  StyleSheet,
  Platform,
} = React;

export const BACKGROUND_COLOR = '#F5F5F5';

export const PRIMARY_COLOR_DARK = '#2E2E2E';
export const PRIMARY_COLOR_GRAY = '#616161';
export const PRIMARY_COLOR_LIGHT = '#FFFFFF';

export const RED = '#ED3D96';
export const BLUE = '#03A9F4';
export const YELLOW = '#F9CA6B';
export const GREEN = '#02D04E';

export const BORDER_COLOR = '#D1CCC7';
export const BORDER_COLOR_LIGHT = '#E9E7E9';
export const BORDER_COLOR_DARK = '#444241';

export const BODY_TEXT_COLOR = '#5F5F5F';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SIDE_MENU_OFFSET = SCREEN_WIDTH - 44;

export const STATUS_BAR_HEIGHT = 20;
export const NAV_BAR_HEIGHT = 64;
export const AVATAR_SIZE = 45;
export const TEXT_INPUT_HEIGHT = 74;

let Styles = StyleSheet.create({
  noNavBar: {
    backgroundColor: 'transparent',
  },
  navBar: {
    backgroundColor: PRIMARY_COLOR_LIGHT,
    flexDirection: 'row',
    height: NAV_BAR_HEIGHT,
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: Platform.OS == 'ios' ? 20 : 18,
    color: PRIMARY_COLOR_DARK,
    paddingTop: 8,
    paddingBottom: 5,
    marginTop: Platform.OS == 'ios' ? 0 : 18,
  },
});

export default Styles;