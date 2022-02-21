import { useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Flex, Stack, Button, Divider, Link } from '@chakra-ui/react';

// Ver como usar
// import { signInFormSchema } from 'schemas/yup';

import { User } from 'interfaces/user';
import { signInUser } from 'http/user';
import { Input } from 'components/SignForms/Input';
import { Slogan } from 'components/SignForms/Slogan';

export default function SignIn() {
  const router = useRouter();

  const [user, userSet] = useState<User>({ email: '', password: '' });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signInUser(user);
    router.push('/');
  };

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

          <Button
            type='submit'
            bg='red.400'
            width={{ base: '320px', md: '400px' }}
            height='70px'
            fontSize='20px'
            color='#fff'
            _hover={{ bg: 'red.500' }}
          >
            Sign in
          </Button>

          <Divider />

          <Link as={NextLink} href='/signup'>
            <Button
              bg='red.800'
              width={{ base: '320px', md: '400px' }}
              height='70px'
              fontSize='20px'
              color='#fff'
              _hover={{ bg: 'red.900' }}
            >
              Create a new account
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
