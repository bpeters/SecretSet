import * as types from '../constants/action-types';
import React from 'react-native';
import _ from 'lodash';

let {
  AsyncStorage,
} = React;

const initialState = {
  phone: null,
  code: null,
  handle: null,
  sentCode: false,
  isVerified: false,
  secret: null,
};

export default function app(state = initialState, action) {
  let user = _.cloneDeep(state);

  switch (action.type) {

    case types.USER_CHANGE_PHONE:
      return Object.assign({}, state, {
        phone: action.phone,
      });

    case types.USER_CHANGE_CODE:
      return Object.assign({}, state, {
        code: action.code,
      });

    case types.USER_CHANGE_HANDLE:
      return Object.assign({}, state, {
        handle: action.handle,
      });

    case types.USER_CHANGE_SECRET:
      return Object.assign({}, state, {
        secret: action.secret,
      });

    case types.USER_SET_PHONE:

      user.phone = action.phone;
      user.sentCode = true;

      AsyncStorage.setItem('SECRET_SET_USER', JSON.stringify(user));

      return Object.assign({}, state, user);

    case types.USER_VERIFY_CODE:

      user.isVerified = true;

      AsyncStorage.setItem('SECRET_SET_USER', JSON.stringify(user));

      return Object.assign({}, state, user);

    case types.USER_SET_HANDLE:

      user.handle = action.handle;

      AsyncStorage.setItem('SECRET_SET_USER', JSON.stringify(user));

      return Object.assign({}, state, user);

    case types.USER_SET_SECRET:

      user.secret = action.secret;

      AsyncStorage.setItem('SECRET_SET_USER', JSON.stringify(user));

      return Object.assign({}, state, user);

    default:
      return state;
  }
}