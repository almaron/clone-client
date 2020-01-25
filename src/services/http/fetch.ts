import request from 'isomorphic-fetch';
import appConfig from '../../config'

const fetch = (url: string, opts: object, anonymous = false) => {
  let newOpts: RequestInit = {...opts}

  newOpts.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...newOpts.headers,
  };

  const token = localStorage.getItem('Auth_Token');
  if (!anonymous && token) {
    newOpts.headers.Authorization = token;
  }

  newOpts.headers.UUID = appConfig.getUuid()

  return request(url, newOpts);
};

export default fetch;

