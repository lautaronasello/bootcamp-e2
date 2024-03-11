import axios from 'axios';

const URL_API = process.env.REACT_APP_BACKEND_URL;

export const getPostsService = async () => {
  const res = await axios(`${URL_API}/posts`, {
    method: 'get',
  });
  return res;
};

export const getPostsByIdService = async (id) => {
  const res = await axios(`${URL_API}/posts/${id}`, {
    method: 'get',
  });
  return res;
};
