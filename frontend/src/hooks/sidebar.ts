'use server';

import { cookies } from 'next/headers';

export async function toggleSidebar() {
  const cookieStore = await cookies();
  const current = cookieStore.get('sidebar')?.value;
  const newState = current === 'expanded' ? 'collapsed' : 'expanded';

  // Store for 7 days
  cookieStore.set('sidebar', newState, {
    path: '/',
    maxAge: 7 * 24 * 60 * 60,
  });

  return newState;
}

export async function toggleSidebarStatus() {
  const cookieStore = await cookies();
  return cookieStore.get('sidebar')?.value;
}
