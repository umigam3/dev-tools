'use client'

import { useState } from 'react';
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import axios from 'axios';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await axios.post(`${baseURL}/auth/signin`, { email, password });
      console.log('Login successful:', response.data);
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className='dark max-w-6xl mx-auto flex items-center justify-center h-[calc(100vh-112px)]'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center mx-auto px-16 py-10 border-white/15 border rounded-xl w-[30rem]'>
        <div className='flex flex-col gap-y-3 items-center mb-10'>
          <div className="font-semibold text-4xl">Welcome to</div>
          <div className="font-bold text-2xl select-none">
            AllTools<span className="ml-1 text-sm bg-gradient-to-r from-pink-600 to-purple-400 rounded py-[1px] px-[3px]">.dev</span>
          </div>
        </div>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <div className='mb-3 w-full'>
          <Input
            color='dark'
            className=''
            variant='flat'
            type='email'
            label='Email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isRequired
            isClearable
          />
        </div>
        <div className='mb-6 w-full'>
          <Input
            variant='flat'
            type='password'
            label='Password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isRequired
          />
        </div>
        <div className='p-7 flex justify-center'>
          <span className='text-center'>Don't have an accout? <a href='/signup' className='text-pink-500 hover:underline'>Sign Up</a></span>
        </div>
        <Button 
          isLoading={isSubmitting}
          type='submit'
          color='primary'
          className='w-2/3 py-7 px-8 bg-gradient-to-r from-pink-600 to-purple-400 text-white rounded-xl'
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </main>
  );
}
