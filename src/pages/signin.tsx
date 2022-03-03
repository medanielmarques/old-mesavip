import { GetServerSideProps } from 'next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useContext, useState } from 'react';
import { parseCookies } from 'nookies';
import { Flex, Stack, Divider, Link } from '@chakra-ui/react';

import { FormContainer } from 'components/SignForms/FormContainer';
import { Slogan } from 'components/SignForms/Slogan';
import { Input } from 'components/SignForms/Input';
import { FormButton } from 'components/SignForms/FormButton';

import { AuthContext } from 'contexts/AuthContext';
import { User } from 'interfaces/user';

export default function SignIn() {
  const router = useRouter();
  const { signIn } = useContext(AuthContext);

  const [user, userSet] = useState<User>({ email: '', password: '' });

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    signIn(user);
    router.push('/');
  };

  return (
    <Flex justify='center' mt='14'>
      <FormContainer onSubmit={handleSubmit}>
        <Slogan />

        <Stack spacing={5} align='center'>
          <Input
            name='email'
            type='email'
            placeholder='E-mail'
            value={user.email}
            onChange={(e) => userSet({ ...user, email: e.target.value })}
          />

          <Input
            name='password'
            type='password'
            placeholder='Password'
            value={user.password}
            onChange={(e) => userSet({ ...user, password: e.target.value })}
          />

          <FormButton bg='red.400' _hover={{ bg: 'red.500' }}>
            Sign in
          </FormButton>

          <Divider />

          <Link as={NextLink} href='/signup'>
            <FormButton bg='red.800' _hover={{ bg: 'red.900' }}>
              Create a new account
            </FormButton>
          </Link>

          <Link as={NextLink} href='/'>
            <a style={{ textDecoration: 'underline' }}>Forgot your password?</a>
          </Link>
        </Stack>
      </FormContainer>
    </Flex>
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
