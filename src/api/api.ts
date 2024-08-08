import axios from 'axios';
import { API_URL } from 'src/shared/consts/api';

const getAuthorizationToken = () => `Bearer ${localStorage.getItem('token') || ''}`;

export const $api = axios.create({
  baseURL: API_URL,
  headers: {
    authorization: getAuthorizationToken(),
  },
});