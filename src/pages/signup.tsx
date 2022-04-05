import { GetServerSideProps } from 'next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useContext, useState } from 'react';
import { parseCookies } from 'nookies';
import { Flex, Stack, Divider, Link } from '@chakra-ui/react';

import { FormContainer } from 'components/pages/SignForms/FormContainer';
import { Slogan } from 'components/pages/SignForms/Slogan';
import { Input } from 'components/pages/SignForms/Input';
import { FormButton } from 'components/pages/SignForms/FormButton';
import { Footer } from 'components/Footer';

import { AuthContext } from 'contexts/AuthContext';
import { api } from 'services/api';
import { User } from 'types/user';
import { cpfMask } from 'utils/cpf-mask';

export async function signUpUser(user: User) {
  await api.post('users/create', user).catch(() => {});
}

export default function SignUp() {
  const router = useRouter();
  const { signIn } = useContext(AuthContext);

  const [user, userSet] = useState<User>({
    name: '',
    cpf: '',
    email: '',
    password: '',
  });

  function handleSubmit(e: FormEvent<HTMLDivElement>) {
    e.preventDefault();
    signUpUser(user).finally(() => {
      signIn(user);
    });
    router.push('/');
  }

  function handleCpfChange(e: any) {
    const cpf = cpfMask(e.target.value);
    userSet({ ...user, cpf });
  }

  return (
    <>
      <Flex justify='center' mt={50}>
        <FormContainer onSubmit={handleSubmit}>
          <Slogan />

          <Stack spacing={5} align='center'>
            <Input
              name='name'
              type='text'
              placeholder='Name'
              value={user.name}
              onChange={(e) => userSet({ ...user, name: e.target.value })}
            />

            <Input
              name='email'
              type='email'
              placeholder='E-mail'
              value={user.email}
              onChange={(e) => userSet({ ...user, email: e.target.value })}
            />

            <Input
              name='cpf'
              type='text'
              placeholder='CPF'
              value={user.cpf}
              onChange={handleCpfChange}
            />

            <Input
              name='password'
              type='password'
              placeholder='Password'
              value={user.password}
              onChange={(e) => userSet({ ...user, password: e.target.value })}
            />

            <FormButton bg='red.400' _hover={{ bg: 'red.500' }}>
              Sign up
            </FormButton>

            <Divider />

            <Link as={NextLink} href='/signin'>
              <FormButton bg='red.800' _hover={{ bg: 'red.900' }}>
                Already have an account?
              </FormButton>
            </Link>

            <Link as={NextLink} href='/'>
              <a style={{ textDecoration: 'underline' }}>
                Forgot your password?
              </a>
            </Link>
          </Stack>
        </FormContainer>
      </Flex>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);

  if (cookies['mesavip.token']) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
