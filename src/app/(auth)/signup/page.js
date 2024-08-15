'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    // Validación de la coincidencia de contraseñas
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(`${baseURL}/users`, {
        username,
        email,
        password,
      });

      // Redirigir al usuario a otra página después de un registro exitoso
      router.push('/login');
    } catch (err) {
      setError('Sign up failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex justify-center items-center h-[calc(100vh-112px)]'>
      <form onSubmit={handleSubmit} className='p-8 rounded-md shadow-md'>
        <h2 className='text-2xl font-bold mb-6'>Sign Up</h2>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <div className='mb-4'>
          <label htmlFor='username' className='block text-gray-700'>Username</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block text-gray-700'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='confirmPassword' className='block text-gray-700'>Confirm Password</label>
          <input
            type='password'
            id='confirmPassword'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
            required
          />
        </div>
        <button
          type='submit'
          disabled={isSubmitting}
          className={`w-full py-2 px-4 bg-green-500 text-white rounded-md ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
          }`}
        >
          {isSubmitting ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}
