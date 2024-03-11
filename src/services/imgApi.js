import axios from 'axios';

const URL_API = process.env.REACT_APP_IMG_URL;

export const getImageBySize = async (width, height = null) => {
  const res = await axios(`${URL_API}/${width}/${height}`, {
    method: 'get',
  });
  return res;
};
