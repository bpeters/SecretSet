import * as types from '../constants/action-types';

const initialState = {
  menuIsOpen: false,
  showNav: true,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case types.APP_TOGGLE_SIDE_MENU:
      return Object.assign({}, state, {
        menuIsOpen: !state.menuIsOpen,
      });

    case types.APP_TOGGLE_NAV:
      return Object.assign({}, state, {
        showNav: !state.showNav,
      });

    default:
      return state;
  }
}