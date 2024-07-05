'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/hero';
import About from '@/components/about';
import Card from '@/components/card';

export default function HomePage() {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    const fetchTools = async () => {
      setIsLoading(true);

      const response = await fetch('/api/data');
      const tools = (await response.json());

      setData(tools);
      setIsLoading(false);
    }

    fetchTools();
  }, [])

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data
  ? data.filter((tool) =>
      tool.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : [];

  return (
    <main className='max-w-5xl mx-auto px-9'>
      <Hero />
      <section className='flex flex-wrap justify-between min-h-full mx-auto'>
        <div className='w-full mb-5'>
            <input
              type='text'
              placeholder='Search by tool name...'
              value={searchQuery}
              onChange={handleSearchChange}
              className='w-full px-4 py-2 border border-gray-700 rounded-md'
            />
        </div>
        {isLoading && <div>Loading...</div>}
        {!isLoading && filteredData.map((tool) => (
          <Card tool={tool} />
        ))}
        {filteredData.length === 0 && 
          <div className='flex items-center justify-center h-48 w-full text-4xl font-bold opacity-20 text-center'>No Tools Founded</div>
        }
      </section>
      <About />
    </main>
  );
}
