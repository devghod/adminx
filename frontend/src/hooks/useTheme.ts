'use server';

import { cookies } from 'next/headers';

export async function useTheme({ 
  property,
  value,
} : {
  property: string;
  value: any;
}) {
  const cookieStore = await cookies();
  const current = cookieStore.get('theme')?.value
    ? JSON.parse(cookieStore.get('theme')!.value)
    : {};

  const newState = { ...current, [property]: value };

  // Store for 7 days
  cookieStore.set('theme', JSON.stringify(newState), {
    path: '/',
    maxAge: 7 * 24 * 60 * 60,
  });

  return newState;
};

export async function getTheme() {
  const cookieStore = await cookies();
  return cookieStore.get('theme')?.value;
};
