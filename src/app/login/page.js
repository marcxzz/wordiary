'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AlertDanger from '@/components/common/alerts/AlertDanger';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, code }),
    });

    if (res.ok) {
      router.push('/');
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1 className='h1'>Login</h1>

      <div className="flex rounded-2xl dark:bg-gray-700 border border-gray-600 overflow-hidden mb-2">
        <div className="p-1 flex w-full">
          <div className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
          <input type="text" placeholder="Type the username..." className="w-full outline-none dark:text-white text-sm" required value={username || ''} onChange={(e) => setUsername(e.target.value)} />
        </div>
      </div>

      <div className="flex rounded-2xl dark:bg-gray-700 border border-gray-600 overflow-hidden">
        <div className="p-1 flex w-full">
          <div className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>
          <input type="password" placeholder="Type the code..." className="w-full outline-none dark:text-white text-sm" required value={code} onChange={(e) => setCode(e.target.value)} />
        </div>
      </div>
      
      <button type="submit" className='button button-primary w-full mt-4'>Log in</button>
      
      {error && (
        <AlertDanger message={error} type='error' />
      )}
    </form>
  );
}
