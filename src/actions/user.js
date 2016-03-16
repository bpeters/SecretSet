import React from 'react-native';
import * as types from '../constants/action-types';
import * as twilio from '../core/twilio';

import VerifyPhoneContainer from '../containers/verify-phone';
import CaptureHandleContainer from '../containers/capture-handle';
import CaptureSecretContainer from '../containers/capture-secret';

import {
  VERIFY_PHONE,
  CAPTURE_HANDLE,
  CAPTURE_SECRET,
} from '../constants/routes';

let {
  AsyncStorage,
} = React;

export function setPhone(phone, navigator) {
  return async dispatch => {

    try {

      //let code = Math.floor(Math.random()*90000) + 10000;

      let code = 123456; //fake it

      await AsyncStorage.setItem('SECRET_SET_VERFICATION_CODE', code.toString());

      //await twilio.sendVerificationCode(phone, code);

      dispatch({
        type: types.USER_SET_PHONE,
        phone: phone,
      });

      navigator.push({
        component: VerifyPhoneContainer,
        type: VERIFY_PHONE,
      });

    } catch (err) {
      console.log(err);
    }

  };
}

export function verifyCode(code, navigator) {
  return async dispatch => {

    try {

      let savedCode = await AsyncStorage.getItem('SECRET_SET_VERFICATION_CODE');

      if (code === savedCode) {
        dispatch({
          type: types.USER_VERIFY_CODE,
        });

        navigator.push({
          component: CaptureHandleContainer,
          type: CAPTURE_HANDLE,
        });
      } else {
        dispatch({
          type: types.APP_ERROR,
          error: 'Verification code incorrect'
        });
      }

    } catch (err) {
      console.log(err);
    }

  };
}

export function setHandle(handle, navigator) {
  return async dispatch => {

    try {

      let handleCheck = new RegExp("^[A-Za-z0-9]{1,15}$");

      if (handleCheck.test(handle)) {
        dispatch({
          type: types.USER_SET_HANDLE,
        });

        navigator.push({
          component: CaptureSecretContainer,
          type: CAPTURE_SECRET,
        });
      } else {
        dispatch({
          type: types.APP_ERROR,
          error: 'Handle needs to be less than 16 characters and contain no spaces or special characters'
        });
      }

    } catch (err) {
      console.log(err);
    }

  };
}

export function changePhone(phone) {
  return dispatch => {
    dispatch({
      type: types.USER_CHANGE_PHONE,
      phone: phone,
    });
  };
}

export function changeCode(code) {
  return dispatch => {
    dispatch({
      type: types.USER_CHANGE_CODE,
      code: code,
    });
  };
}

export function changeHandle(handle) {
  return dispatch => {
    dispatch({
      type: types.USER_CHANGE_HANDLE,
      handle: handle,
    });
  };
}

export function changeSecret(secret) {
  return dispatch => {
    dispatch({
      type: types.USER_CHANGE_SECRET,
      secret: secret,
    });
  };
}