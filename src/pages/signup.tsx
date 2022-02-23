import { useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Flex, Stack, Button, Divider, Link } from '@chakra-ui/react';

import { User } from 'interfaces/user';
import { signInUser, signUpUser } from 'http/user';
import { Input } from 'components/SignForms/Input';
import { Slogan } from 'components/SignForms/Slogan';
import { cpfMask } from 'utils/cpf-mask';

export default function SignUp() {
  const router = useRouter();

  const [user, userSet] = useState<User>({
    name: '',
    cpf: '',
    email: '',
    password: '',
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    signUpUser(user).finally(() => {
      signInUser(user);
    });
    router.push('/');
  }

  function handleCpfChange(e: any) {
    const cpf = cpfMask(e.target.value);
    userSet({ ...user, cpf });
  }

  return (
    <Flex justify='center' mt={50}>
      <Flex
        as='form'
        width={{ base: '320px', md: '400px' }}
        pt={15}
        align='center'
        direction='column'
        onSubmit={handleSubmit}
      >
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

          <Button
            type='submit'
            bg='red.400'
            width={{ base: '320px', md: '400px' }}
            height='70px'
            fontSize='20px'
            color='#fff'
            _hover={{ bg: 'red.500' }}
          >
            Sign up
          </Button>

          <Divider />

          <Link as={NextLink} href='/signin'>
            <Button
              bg='red.800'
              width={{ base: '320px', md: '400px' }}
              height='70px'
              fontSize='20px'
              color='#fff'
              _hover={{ bg: 'red.900' }}
            >
              Already have an account?
            </Button>
          </Link>

          <Link as={NextLink} href='/'>
            <a style={{ textDecoration: 'underline' }}>Forgot your password?</a>
          </Link>
        </Stack>
      </Flex>
    </Flex>
  );
}
