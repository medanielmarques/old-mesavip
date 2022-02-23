import axios from 'axios';
import { getToken } from './auth';

const token = getToken();

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
