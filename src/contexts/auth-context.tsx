import Router from 'next/router';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

import { api } from 'services/api';

interface AuthProviderProps {
  children: ReactNode;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface authResponse {
  token: string;
}

interface User {
  email: string;
}

interface AuthContextData {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  user: User | undefined;
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextData);
export const useAuth = () => useContext(AuthContext);

export function signOut() {
  destroyCookie(undefined, 'mesavip.token');

  if (Router.pathname === '/') {
    Router.reload();
  } else {
    Router.push('/');
    Router.reload();
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, userSet] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'mesavip.token': token } = parseCookies();

    if (token) {
      api
        .get('users/me')
        .then((res) => {
          const { email } = res.data;
          userSet({ email });
        })
        .catch(() => signOut());
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const { token }: authResponse = await api
        .post('users/signin', { email, password })
        .then((res) => res.data);

      setCookie(undefined, 'mesavip.token', token, {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });

      userSet({ email });
    } catch (error) {}
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
