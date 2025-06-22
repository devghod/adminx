import 'server-only';

import type { SessionPayload } from './definitions';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const secretKey = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1hr')
    .sign(key);
}

async function decrypt(session: string | undefined = '') {
  try {
    if (!session) return null;

    const { payload } = await jwtVerify(session, key, {
      algorithms: ['HS256'],
    });

    return payload;
  } catch (error) {
    console.debug(error);
    return null;
  }
}

async function createSession(data: any) {
  const {
    token: session,
    tokenExpIn,
    refreshToken,
    refreshTokenExpIn,
  } = data;
  const tokenExpAt = new Date(tokenExpIn);
  const refreshTokenExpAt = new Date(refreshTokenExpIn);
  const cookieStore = await cookies();

  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: tokenExpAt,
    sameSite: 'lax',
    path: '/',
  });

  cookieStore.set('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    expires: refreshTokenExpAt,
    sameSite: 'lax',
    path: '/',
  });

  redirect('/dashboard');
}

async function verifySession() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get('session')?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect('/auth/login');
  }

  return { isAuth: true, userId: Number(session.userId) };
}

async function updateSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get('session')?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: 'lax',
    path: '/',
  });
}

async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
  cookieStore.delete('refreshToken');
  redirect('/auth/login');
}

// Server only
async function getSession() {
  const cookieStore = await cookies();
  return cookieStore.get('session')?.value;
}

export {
  encrypt,
  decrypt,
  createSession,
  verifySession,
  updateSession,
  deleteSession,
  getSession,
};
