import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(req) {
  const body = await req.json();
  const { username, code } = body;

  if (
    username === process.env.AUTH_USERNAME &&
    code === process.env.AUTH_CODE
  ) {
    const cookie = serialize('auth', 'ok', {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production', // Uncomment for production
      path: '/',
      maxAge: 60 * 60 * 8,
    });

    return new NextResponse(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Set-Cookie': cookie },
    });
  }

  return new NextResponse(JSON.stringify({ success: false }), {
    status: 401,
  });
}
