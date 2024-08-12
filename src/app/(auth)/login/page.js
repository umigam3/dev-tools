'use client'

import { useState } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const baseURL = 'http://192.168.1.48:3001';

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
    <main className='max-w-6xl mx-auto px-9 flex flex-col items-center justify-center'>
      <form onSubmit={handleSubmit} className='max-w-md mx-auto p-6 rounded-md shadow-md '>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700'>Email</label>
          <input
            type='email'
            id='email'
            className='w-full px-4 py-2 border rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='password' className='block text-gray-700'>Password</label>
          <input
            type='password'
            id='password'
            className='w-full px-4 py-2 border rounded-md'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type='submit'
          disabled={isSubmitting}
          className={`w-full py-2 px-4 bg-blue-500 text-white rounded-md ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
          }`}
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </main>
  );
}
