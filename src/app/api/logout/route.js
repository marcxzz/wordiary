import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
  const cookie = serialize('auth', '', {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production', // Uncomment for production
    path: '/',
    maxAge: 0,
  });

  return new NextResponse(null, {
    status: 200,
    headers: { 'Set-Cookie': cookie },
  });
}
