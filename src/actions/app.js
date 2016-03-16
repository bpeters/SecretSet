import * as types from '../constants/action-types';

export function toggleSideMenu() {
  return dispatch => {
    dispatch({
      type: types.APP_TOGGLE_SIDE_MENU,
    });
  };
}