import React from 'react-native';

import {
  SCREEN_HEIGHT,
  SIDE_MENU_OFFSET,
  PRIMARY_COLOR_DARK,
  STATUS_BAR_HEIGHT,
  BACKGROUND_COLOR,
  PRIMARY_COLOR_LIGHT,
  PURPLE,
  RED,
  DARK_PURPLE,
} from '../../theme';

let {
  StyleSheet,
  Platform,
} = React;

let Styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SIDE_MENU_OFFSET,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  hide: {
    opacity: 0,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    width: SIDE_MENU_OFFSET,
    backgroundColor: BACKGROUND_COLOR,
  },
  image: {
    marginTop: -6,
    height: 200,
  },
  scrollView: {
    marginLeft: 18,
    width: SIDE_MENU_OFFSET - 40,
  },
  artist: {
    color: PRIMARY_COLOR_LIGHT,
    fontSize: 24,
    fontFamily: 'AvenirNext-Bold',
    paddingBottom: 20,
    paddingTop: 10,
  },
  name: {
    color: PRIMARY_COLOR_LIGHT,
    fontSize: 14,
    fontFamily: 'AvenirNext-Bold',
    paddingBottom: 10,
  },
  description: {
    color: PRIMARY_COLOR_LIGHT,
    fontSize: 14,
    paddingBottom: 20,
    fontFamily: 'AvenirNext-Regular',
  },
  link: {
    color: PURPLE,
    fontSize: 14,
    fontFamily: 'AvenirNext-Bold',
    paddingBottom: 10,
  },
  people: {
    borderTopWidth: 1,
    borderTopColor: PRIMARY_COLOR_DARK,
    borderBottomWidth: 1,
    borderBottomColor: PRIMARY_COLOR_DARK,
    marginTop: 20,
    marginBottom: 20,
    paddingBottom: 40,
  },
  peopleTitle: {
    color: PRIMARY_COLOR_DARK,
    fontSize: 14,
    fontFamily: 'AvenirNext-Bold',
    paddingBottom: 20,
    paddingTop: 20,
  },
  person: {
    color: PRIMARY_COLOR_LIGHT,
    fontSize: 14,
    padding: 2,
    fontFamily: 'AvenirNext-Regular',
  },
  leave: {
    marginBottom: 10,
    marginTop: 20,
    flexDirection: 'row',
  },
  leaveText: {
    color: DARK_PURPLE,
    fontSize: 14,
    fontFamily: 'AvenirNext-Bold',
  },
  leaveIcon: {
    color: DARK_PURPLE,
    marginRight: 10,
  }
});

export default Styles;