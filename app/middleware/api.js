/**
* An Middleware to handling every request
* @param {payload }
* @return {data}
*/

import axios from 'axios';
import confi

export function fetching(payload) {
  return axios({
    url: payload.url,
    data: payload.data,
    auth: {
      username: 'janedoe',
      password: 's00pers3cret'
    }
  }).then(resp => {
    Promise.resolve(resp);
  }, err => {
    Promise.reject(err);
  });
}
