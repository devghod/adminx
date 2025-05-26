import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/features/login/stateless-session';

const protectedRoutes = ['/dashboard', '/dashboard/accounts'];
const publicRoutes = [
  '/login',
  '/register',
  '/auth/login',
  '/auth/register',
  '/auth',
  '/home',
  '/',
];

export default async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate',
  );

  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = request.cookies.get('session')?.value;
  const session = await decrypt(cookie);

  response.headers.set('x-middleware-status', 'ran');

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(
      new URL('/auth/login', request.nextUrl),
    );
  }

  if (
    isPublicRoute &&
    session?.userId &&
    !request.nextUrl.pathname.startsWith('/dashboard')
  ) {
    return NextResponse.redirect(
      new URL('/dashboard', request.nextUrl),
    );
  }

  return response;
}

export const config = {
  matcher: [
    '/auth',
    '/login',
    '/home',
    '/auth/:path*',
    '/dashboard',
    '/dashboard/:path*',
  ],
};
