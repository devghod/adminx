'use client';

import { getCookie } from 'cookies-next';

type TFetchAuth = {
  api: string;
  id?: number;
  body?: object;
  method: string;
};

export async function fetchAuth(params: TFetchAuth) {
  const { api, id, method, body } = params;
  const token = getCookie('session');
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
