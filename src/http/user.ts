import { authResponse } from 'src/interfaces/authResponse';
import { User } from 'src/interfaces/user';

import { api } from 'src/services/api';
import { setToken } from 'src/services/auth';

export async function signInUser(user: User) {
  await api.post('users/signin', user).then((response) => {
    const { token }: authResponse = response.data;
    setToken(token);
  });
}

export async function signUpUser(user: User) {
  await api.post('users/create', user).then((response) => {});
}
