'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

import Input from './form/Input';
import Button from './form/Button';
import Devider from './form/Devider';

const SignIn: React.FC = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') as string || "/";
  
  const [email, setEmail] = useState<string>('');

  return (
    <section className='w-1/3 h-auto p-24 mx-auto shadow-2xl rounded-xl'>
      <h3 className='text-center text-2xl font-bold mb-12'>
        Sign in to your account
      </h3>
      <Input
        type='text'
        label='Sign in with your email'
        placeholder='hello@me.com'
        value={email}
        extraStyles='mb-6'
        onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
      />
      <Button type='button' extraStyles='mb-6' onClick={() => null}>
        Continue with Email
      </Button>
      <Devider deviderText='or' />
      <Button
        type='button'
        varient='contained'
        extraStyles='mt-6'
        onClick={() => signIn('google', { callbackUrl })}
      >
        Continue with Google
      </Button>
    </section>
  );
};

export default SignIn;
