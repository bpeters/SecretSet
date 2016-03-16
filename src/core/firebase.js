import Firebase from 'firebase';

import * as types from '../constants/action-types';

import {
  firebaseUrl,
  firebaseSecret,
} from '../config';

export async function getSet(secret) {
  return new Promise((resolve, reject) => {
    let url = `${firebaseUrl}/${secret}`;

    new Firebase(url)
      .once('value', (snapshot) => {

        let set = snapshot.val();

        return resolve(set);
      });
  });
}

export async function updateSet(secret, dispatch) {

  let url = `${firebaseUrl}/${secret}`;

  new Firebase(url)
    .on('value', (snapshot) => {

      let set = snapshot.val();

      dispatch({
        type: types.USER_FOUND_SET,
        set: set,
      });
    });
}
