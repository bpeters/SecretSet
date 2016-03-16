import querystring from 'query-string';

import {
  twilioSID,
  twilioToken,
  twilioPhone,
} from '../config';

export async function sendVerificationCode(phone, code) {

  let url = `https://${twilioSID}:${twilioToken}@api.twilio.com/2010-04-01/Accounts/${twilioSID}/Messages.json?`;
  let query = `To=+1${phone}&From=${twilioPhone}&Body=Verification code for SecretSet: ${code}`;

  // let query = querystring.stringify({
  //   To: `+1${phone}`,
  //   From: twilioPhone,
  //   Body: `Verification code for SecretSet: ${code}`,
  // });

  // let body = {
  //   to: `${phone}`,
  //   from: twilioPhone,
  //   body: `Verification code for SecretSet: ${code}`,
  // };

  console.log(query);

  return fetch(url + query, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  .then((response) => {
    response = JSON.parse(response._bodyText);

    if (response.ok) {
      return new Promise.resolve(response);
    } else {
      return new Promise.reject(response);
    }
    
  })
  .catch((err) => {
    return new Promise.reject(err);
  });
}
