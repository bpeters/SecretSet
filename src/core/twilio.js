import {
  apiUrl,
} from '../config';

export async function sendVerificationCode(phone) {

  return new Promise((resolve, reject) => {
    let url = `${apiUrl}/verify`;

    let body = {
      number: phone,
    };

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
    .then((response) => {

      if (response.ok) {
        return resolve(JSON.parse(response._bodyText));
      } else {
        return reject(response);
      }
      
    })
    .catch((err) => {
      console.log(err);
      return reject(err);
    });
  });

}
