import { useRouter } from 'next/router';
import { useState, FormEvent, ChangeEvent } from 'react';

import { useAuth } from 'contexts';
import { api } from 'services/api';
import { User } from 'types';

const cpfMask = (cpf: string) => {
  return cpf
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

type SignType = 'sign-in' | 'sign-up';

export function useSignUser(signType: SignType) {
  const router = useRouter();
  const { signIn } = useAuth();

  const [user, userSet] = useState<User>({
    name: '',
    cpf: '',
    email: '',
    password: '',
  });

  async function signUpUser(user: User) {
    await api
      .post('users/create', user)
      .catch(() => {})
      .finally(() => {
        signIn(user);
      });
  }

  function handleSubmit(e: FormEvent<HTMLDivElement>) {
    e.preventDefault();
    signType === 'sign-in' ? signIn(user) : signUpUser(user);
    router.push('/');
  }

  function handleCpfChange(e: ChangeEvent<HTMLInputElement>) {
    const cpf = cpfMask(e.target.value);
    userSet({ ...user, cpf });
  }

  return { user, userSet, handleSubmit, handleCpfChange };
}
