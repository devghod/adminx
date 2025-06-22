'use server';

import { cookies } from 'next/headers';

// Client side use
const getToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get('session')?.value;
};

const getRefreshToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get('refreshToken')?.value;
};

export { getToken, getRefreshToken };
