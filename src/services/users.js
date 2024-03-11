import axios from 'axios';

const URL_API = process.env.REACT_APP_BACKEND_URL;

export const getUsersService = async () => {
  const res = await axios(`${URL_API}/users`, {
    method: 'get',
  });
  return res;
};
