import { Flex, Text, Stack, Input } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { signInFormSchema } from 'src/schemas/yup';
import { User } from 'src/interfaces/user';

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<User> = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex
        as='form'
        w={460}
        h={440}
        pt={15}
        borderRadius={10}
        align='center'
        onSubmit={handleSubmit(handleSignIn)}
        direction='column'
      >
        <Text>
          MESAVIP helps you to make reservations in your favorite restaurants.
        </Text>

        <Stack spacing={4}>
          <Input
            type='email'
            {...register('email')}
            placeholder='E-mail'
            m='0 auto 20px auto'
          />
          <Input
            type='email'
            placeholder='Password'
            {...register('password')}
          />
        </Stack>
      </Flex>
    </Flex>
  );
}
