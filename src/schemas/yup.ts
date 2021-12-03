import * as yup from 'yup';

export const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail is required').email('Invalid e-mail'),
  password: yup.string().required('Password is required'),
});

export const signUpFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  cpf: yup.string().required('CPF is required'),
  email: yup.string().required('E-mail is required').email('Invalid e-mail'),
  password: yup.string().required('Password is required'),
});
