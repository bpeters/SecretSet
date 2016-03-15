import * as types from '../constants/action-types';

const initialState = {
  phone: null,
  handle: null,
  isVerified: false,
};

export default function app(state = initialState, action) {
  switch (action.type) {

    case types.USER_SET_PHONE:

      return Object.assign({}, state, {
        phone: action.phone,
      });

    case types.USER_VERIFY_CODE:

      return Object.assign({}, state, {
        isVerified: true,
      });

    case types.USER_SET_HANDLE:
      return Object.assign({}, state, {
        handle: action.handle,
      });

    default:
      return state;
  }
}