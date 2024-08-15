'use client'

import { useState } from 'react';
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import axios from 'axios';
import { EyeSlashFilledIcon } from '@/components/ui/EyeSlashFilledIcon';
import { EyeFilledIcon } from '@/components/ui/EyeFilledIcon';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <main className='max-w-6xl mx-auto flex flex-col items-center min-h-[calc(100vh-112px)] py-20'>
      <img src='/logo.svg' width="75" className='mb-2'/>
      <span className="font-bold text-2xl mb-8">
        AllTools
      </span>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center px-16 py-10 bg-[#161616] border-white/5 border rounded-2xl w-[30rem] mx-10'>
        <div className='flex flex-col gap-y-3 items-center mb-10'>
          <h1 className='text-3xl font-bold'>Login</h1>
        </div>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <div className='mb-3 w-full'>
          <Input
            color='dark'
            className=''
            variant='flat'
            type='email'
            label='Email'
            placeholder="Enter your email"
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
            label="Password"
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
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
          className='text-lg w-2/3 py-7 px-8 bg-gradient-to-r from-pink-600 to-purple-400 text-white rounded-xl'
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </main>
    
  );
}
