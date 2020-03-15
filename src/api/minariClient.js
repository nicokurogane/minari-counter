import axios from 'axios';

const clientInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

export const getData = async (url, params = {}) => {
  const response = await clientInstance.get(url, params);
  return response;
};
