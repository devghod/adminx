'use server';

import {
  LoginFormState,
  LoginFormSchema,
  // SignupFormSchema,
} from './definitions';
import { createSession, deleteSession } from './stateless-session';
// import bcrypt from 'bcrypt';

// export async function signup(
//   state: FormState,
//   formData: FormData,
// ): Promise<FormState> {
//   // 1. Validate form fields
//   const validatedFields = SignupFormSchema.safeParse({
//     name: formData.get('name'),
//     email: formData.get('email'),
//     password: formData.get('password'),
//   });

//   // If any form fields are invalid, return early
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//     };
//   }

//   // 2. Prepare data for insertion into database
//   const { name, email, password } = validatedFields.data;

//   // 3. Check if the user's email already exists
//   const existingUser = await db.query.users.findFirst({
//     where: eq(users.email, email),
//   });

//   if (existingUser) {
//     return {
//       message: 'Email already exists, please use a different email or login.',
//     };
//   }

//   // Hash the user's password
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // 3. Insert the user into the database or call an Auth Provider's API
//   const data = await db
//     .insert(users)
//     .values({
//       name,
//       email,
//       password: hashedPassword,
//     })
//     .returning({ id: users.id });

//   const user = data[0];

//   if (!user) {
//     return {
//       message: 'An error occurred while creating your account.',
//     };
//   }

//   // 4. Create a session for the user
//   const userId = user.id.toString();
//   await createSession(userId);
// }

export async function login(
  state: LoginFormState,
  formData: FormData,
): Promise<LoginFormState> {
  const validatedFields = LoginFormSchema.safeParse({
    username: formData.get('username'),
    password: formData.get('password'),
  });

  const errorMessage = { message: 'Invalid login credentials.' };

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const request = await fetch(
    'http://localhost:4001/api/auth/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedFields.data),
      cache: 'no-store',
    },
  );

  const result = await request.json();

  if (!result.success) {
    errorMessage.message = result.message;
    return errorMessage;
  }

  const userId = result.profile._id.toString();
  await createSession(userId);
}

export async function logout() {
  await deleteSession();
}
