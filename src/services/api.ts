import axios from 'axios';
import { getToken } from './auth';

const token = getToken();

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
