import { z } from 'zod';

export const changePasswordSchema = z
  .object({
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
