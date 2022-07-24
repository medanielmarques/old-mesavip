import { GetServerSideProps } from 'next';
import NextLink from 'next/link';
import { Flex, Stack, Divider, Link } from '@chakra-ui/react';

import { FormContainer, FormButton, Input, Slogan } from 'core/sign-forms';
import { Footer } from 'core/footer';
import { useSignUser } from 'hooks/use-sign-user';
import { verifyAuthOnPublicPages } from 'services/verify-auth';

export default function SignUp() {
  const { user, userSet, handleSubmit, handleCpfChange } =
    useSignUser('sign-up');

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

            <Link as={NextLink} href='/home'>
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
  return verifyAuthOnPublicPages(ctx);
};
