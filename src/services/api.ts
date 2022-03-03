import axios from 'axios';
import { parseCookies } from 'nookies';

const cookies = parseCookies(undefined);

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${cookies['mesavip.token']}`,
  },
});
