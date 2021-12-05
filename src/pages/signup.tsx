import { useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Flex,
  Text,
  Stack,
  Input,
  Button,
  Divider,
  Link,
} from '@chakra-ui/react';

import { User } from 'src/interfaces/user';
import { signUpUser } from 'src/http/user';

export default function SignUp() {
  const router = useRouter();

  const [user, userSet] = useState<User>({
    name: '',
    cpf: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signUpUser(user);
    router.push('/sandbox');
  };

  return (
    <Flex justify='center' mt={50}>
      <Flex
        as='form'
        w={400}
        h={440}
        pt={15}
        align='center'
        direction='column'
        onSubmit={handleSubmit}
      >
        <Text fontSize={22} mb={50} align='center'>
          <Text as='b'> MESAVIP </Text> helps you to make reservations in your
          favorite restaurants.
        </Text>

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
            type='number'
            placeholder='CPF'
            value={user.cpf}
            onChange={(e) => userSet({ ...user, cpf: e.target.value })}
          />

          <Input
            name='password'
            type='password'
            placeholder='Password'
            value={user.password}
            onChange={(e) => userSet({ ...user, password: e.target.value })}
          />

          <Button type='submit'>Sign up</Button>

          <Link as={NextLink} href='/sandbox'>
            <Button background='#3e8f42' _hover={{ background: '#347d39' }}>
              Already have an account? Sign in
            </Button>
          </Link>

          <Divider />

          <Link as={NextLink} href='/sandbox'>
            <a style={{ textDecoration: 'underline' }}>Forgot your password?</a>
          </Link>
        </Stack>
      </Flex>
    </Flex>
  );
}
