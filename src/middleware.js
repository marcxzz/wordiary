import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/login') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  const auth = req.cookies.get('auth');
  console.log('Cookie auth:', auth);
  if (auth?.value !== 'ok') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Protegge tutte le route eccetto:
     * - /login
     * - /api/login
     * - static files (_next, favicon, ecc.)
     */
    '/((?!login|api/login|_next/static|_next/image|favicon.ico).*)',
  ],
};