'use client';

import { getCookie, hasCookie } from 'cookies-next';
// import { getSession } from '@/app/api/session';

type TFetchAuth = {
  api: string;
  id?: number;
  body?: object;
  method: string;
};

export async function fetchAuth(params: TFetchAuth) {
  const { api, id, method, body } = params;
  const token = getCookie('session');
  // const token = getSession();
  console.log(token, hasCookie('session'));
  const authToken = `Bearer ${token}`;

  return await fetch(`http://localhost:4001/api/${api}/${id ?? ''}`, {
    method: method,
    headers: {
      Authorization: authToken,
      'Content-Type': 'application/json',
    },
    ...(['UPDATE', 'PUT', 'POST'].includes(method) && {
      body: JSON.stringify(body),
    }),
  });
}
