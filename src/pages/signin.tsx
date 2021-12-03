import Link from 'next/link';
import { Button, useColorModeValue } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

import { authResponse } from 'src/interfaces/authResponse';
import { User } from 'src/interfaces/user';

import { api } from 'src/services/api';
import { setToken } from 'src/services/auth';

import { Input } from 'src/components/Input';
import { Separator } from 'src/components/Separator';

import { dark } from 'src/styles/themes/dark';
import { light } from 'src/styles/themes/light';

export default function Signin() {
  const theme = useColorModeValue(light, dark);

  const handleSubmit = async (user: User) => {
    await api
      .post(`users/signin`, user)
      .then((response) => {
        const { token }: authResponse = response.data;
        setToken(token);
      })
      // Improve it, it's not currently giving the user a SPA experience
      // Maybe use Next Router stuff, IDK, take a look
      .then(() => (window.location.href = '../'));
  };

  return (
    <div className='form-main'>
      <div className='text'>
        <h3>
          <span>MESAVIP</span> helps you to make reservations in your favorite
          restaurants.
        </h3>
      </div>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(user) => handleSubmit(user)}
      >
        <Form
          className='form'
          // style={{
          //   boxShadow:
          //     '0 2px 20px rgb(76 86 102 / 25%), 0 8px 16px rgb(76 86 102 / 25%)',
          // }}
        >
          <Field as={Input} placeholder='E-mail' name='email' type='email' />
          <Field
            as={Input}
            placeholder='Password'
            name='password'
            type='password'
          />

          <Button type='submit'>Sign in</Button>

          <Link href='/todo'>
            <a>Forgot your password?</a>
          </Link>

          <Separator width='86.96%' />

          <Button
            background={theme.button_solid.background.secondary}
            _hover={{ background: theme.button_solid.on_hover.secondary }}
          >
            Create a new account
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
