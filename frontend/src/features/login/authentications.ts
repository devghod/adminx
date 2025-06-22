'use server';

import { LoginFormState, LoginFormSchema } from './definitions';
import { createSession, deleteSession } from './stateless-session';

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
    `${process.env.DB_URL}/api/auth/login`,
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

  await createSession(result);
}

export async function logout() {
  await deleteSession();
}
