import * as yup from 'yup';

export const schema = yup
  .object({
    username: yup.string().required('Username is required'),
    first_name: yup.string().required('First name is required'),
    middle_name: yup.string(),
    last_name: yup.string().required('Last name is required'),
    email: yup.string().email().required('Email is required'),
    status: yup
      .mixed()
      .oneOf(['active', 'inactive', 'hold'] as const)
      .defined()
      .required('Status is required'),
    mobile: yup.string().required('Mobile is required'),
    password: yup.string().required('Password is required'),
    confirm_password: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required();
