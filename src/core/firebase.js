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

export function addUser(user, mood) {

  let url = `${firebaseUrl}/${user.secret}/online/${user.phone}`;

  new Firebase(url).set({
    phone: user.phone,
    handle: user.handle,
    mood: mood || 'soso',
  });
}

export function removeUser(user) {

  let url = `${firebaseUrl}/${user.secret}/online/${user.phone}`;

  new Firebase(url).remove();
}

export function addMessage(message, user) {

  let url = `${firebaseUrl}/${user.secret}/messages`;

  new Firebase(url).push(message);
}
