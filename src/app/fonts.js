import { Rubik, Fraunces } from 'next/font/google';

export const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik',
  display: 'swap',
});

export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-fraunces',
  display: 'swap',
});
