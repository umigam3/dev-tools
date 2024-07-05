'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/hero';
import About from '@/components/about';

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
      <section className='flex flex-wrap min-h-full gap-x-4 mx-auto'>
        <div className='w-full mb-10'>
            <input
              type='text'
              placeholder='Search by tool name...'
              value={searchQuery}
              onChange={handleSearchChange}
              className='w-full px-4 py-2 border border-gray-300 rounded-md'
            />
        </div>
        {isLoading && <div>Loading...</div>}
        {!isLoading && filteredData.map((tool, index) => (
          <div key={index} className="p-4 w-full sm:w-[48%] lg:w-[32%] rounded-xl border-[1px] mb-4">
            <h2 className='mb-2 font-bold'>{tool.name}</h2>
            <p className='text-sm text-slate-400 mb-2'>{tool.description}</p>
            <a type='button' href={tool.url} target="_blank" rel="noopener noreferrer">Link</a>
          </div>
        ))}
        {filteredData.length === 0 && 
          <div className='flex items-center justify-center h-48 w-full text-4xl font-bold opacity-20 text-center'>No Tools Founded</div>
        }
      </section>
      <About />
    </main>
  );
}
