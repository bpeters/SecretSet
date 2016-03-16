import Firebase from 'firebase';

import {
  firebaseUrl,
  firebaseSecret,
} from '../config';

export async function getSet(secret) {

  let url = `${firebaseUrl}/${secret}`;

  new Firebase(url)
    .once('value', (snapshot) => {

      let set = snapshot.val();

      return new Promise.resolve(set);
    });
}
