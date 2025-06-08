import { z } from 'zod';

export const createAccountschema = z
  .object({
    username: z.string().nonempty('Username is required'),
    first_name: z.string().nonempty('First name is required'),
    middle_name: z.string().optional(),
    last_name: z.string().nonempty('Last name is required'),
    email: z
      .string()
      .email('Email is required')
      .nonempty('Email is required'),
    status: z.enum(['active', 'inactive', 'hold'], {
      required_error: 'Status is required',
    }),
    mobile: z.string().nonempty('Mobile is required'),
    new_password: z
      .string()
      .nonempty('New Password is required')
      .min(6, 'Password must be at least 6 characters long'),
    confirm_password: z
      .string()
      .nonempty('Confirm password is required'),
  })
  .refine(data => data.new_password === data.confirm_password, {
    message: 'Passwords must match',
    path: ['confirm_password'],
  });

export const updateAccountSchema = z.object({
  username: z.string().nonempty('Username is required'),
  first_name: z.string().nonempty('First name is required'),
  middle_name: z.string().optional(),
  last_name: z.string().nonempty('Last name is required'),
  email: z
    .string()
    .email('Email is required')
    .nonempty('Email is required'),
  status: z.enum(['active', 'inactive', 'hold'], {
    required_error: 'Status is required',
  }),
  mobile: z.string().nonempty('Mobile is required'),
  new_password: z.string().optional(),
  confirm_password: z.string().optional(),
});
