import { authResponse } from 'interfaces/authResponse';
import { User } from 'interfaces/user';

import { api } from 'services/api';
import { setToken } from 'services/auth';

export async function signInUser(user: User) {
  await api.post('users/signin', user).then((response) => {
    const { token }: authResponse = response.data;
    setToken(token);
  });
}

export async function signUpUser(user: User) {
  await api.post('users/create', user).then((response) => {});
}
