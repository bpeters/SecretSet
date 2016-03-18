import React from 'react-native';
import _ from 'lodash';

import * as types from '../constants/action-types';
import * as twilio from '../core/twilio';
import * as firebase from '../core/firebase';

import VerifyPhoneContainer from '../containers/verify-phone';
import SuccessContainer from '../containers/success';
import FailureContainer from '../containers/failure';
import CaptureHandleContainer from '../containers/capture-handle';
import CaptureSecretContainer from '../containers/capture-secret';
import SetPreviewContainer from '../containers/set-preview';
import SecretSetContainer from '../containers/secret-set';

import {
  VERIFY_PHONE,
  SUCCESS,
  FAILURE,
  CAPTURE_HANDLE,
  CAPTURE_SECRET,
  SET_PREVIEW,
  SECRET_SET,
} from '../constants/routes';

let {
  AsyncStorage,
} = React;

export function initalize(user) {
  return async dispatch => {

    try {
      let user = await AsyncStorage.getItem('SECRET_SET_USER');

      dispatch({
        type: types.USER_INITIALIZE,
        user: JSON.parse(user),
      });

    } catch (err) {
      console.log(err);
    }
  };
}

export function setPhone(phone, navigator) {
  return async dispatch => {

    try {

      if (phone.length === 10) {

        let response = await twilio.sendVerificationCode(phone);

        await AsyncStorage.setItem('SECRET_SET_VERFICATION_CODE', response.code);

        dispatch({
          type: types.USER_SET_PHONE,
          phone: phone,
        });

        navigator.push({
          component: VerifyPhoneContainer,
          type: VERIFY_PHONE,
        });
      } else {
        navigator.push({
          component: FailureContainer,
          type: FAILURE,
          error: "Phone needs to include area code",
        });
      }

    } catch (err) {
      navigator.push({
        component: FailureContainer,
        type: FAILURE,
        error: "Looks like something happened to the network",
      });
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
          component: SuccessContainer,
          type: SUCCESS,
        });
      } else {
        navigator.push({
          component: FailureContainer,
          type: FAILURE,
          error: "Verification code is incorrect",
        });
      }

    } catch (err) {
      console.log(err);
    }

  };
}

export function setHandle(user, navigator) {
  return async dispatch => {

    try {

      user.handle = user.handle.toLowerCase();
      let online = _.map(user.set.online);

      let handleUsedAlready = _.find(online, (other) => {
        return other.handle === user.handle;
      });

      let handleCheck = new RegExp("^[A-Za-z0-9]{1,15}$");

      if (handleCheck.test(user.handle)) {

        if (!handleUsedAlready) {

          firebase.addUser(user);

          dispatch({
            type: types.APP_TOGGLE_NAV,
          });

          navigator.resetTo({
            component: SecretSetContainer,
            type: SECRET_SET,
          });
        } else {
          navigator.push({
            component: FailureContainer,
            type: FAILURE,
            error: "Handle already in use",
          });
        }
      } else {
        navigator.push({
          component: FailureContainer,
          type: FAILURE,
          error: "Handle must contain no spaces or special characters",
        });
      }

    } catch (err) {
      console.log(err);
    }

  };
}

export function verifySecret(secret, navigator) {
  return async dispatch => {

    try {

      dispatch({
        type: types.USER_LOADING,
      });

      let set = await firebase.getSet(secret);

      if (set) {

        dispatch({
          type: types.USER_FOUND_SET,
          set: set,
        });

        firebase.updateSet(secret, dispatch);

        navigator.push({
          component: SetPreviewContainer,
          type: SET_PREVIEW,
        });
      } else {
        navigator.push({
          component: FailureContainer,
          type: FAILURE,
          error: "That's not the right secret",
        });
      }

    } catch (err) {
      console.log(err);
    }

  };
}

export function joinSet(user, navigator) {
  return async dispatch => {

    try {

      firebase.addUser(user);

      navigator.push({
        component: CaptureHandleContainer,
        type: CAPTURE_HANDLE,
      });

    } catch (err) {
      console.log(err);
    }
  };
}

export function claimTicket(user) {
  return async dispatch => {

    try {

      firebase.claimUser(user);

      dispatch({
        type: types.USER_CLAIM_TICKET,
      });

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

export function leaveSet(user, navigator) {
  return async dispatch => {

    try {
      firebase.removeUser(user);

      dispatch({
        type: types.USER_LEAVE_SET,
      });

      navigator.resetTo({
        component: CaptureSecretContainer,
        type: CAPTURE_SECRET,
      });
    } catch (err) {
      console.log(err);
    }

  };
}

export function sendMessage(message, user) {
  return dispatch => {
    firebase.addMessage(message, user);
  };
}

export function addMood(mood, user) {
  return dispatch => {
    firebase.addUser(user, mood);
  };
}