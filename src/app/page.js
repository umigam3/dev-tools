'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Card from '@/components/Card';

export default function HomePage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const fetchTools = async () => {
      setIsLoading(true);

      const response = await fetch('/api/data');
      const tools = (await response.json());

      setData(tools);
      setIsLoading(false);
    };

    fetchTools();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const filteredData = data
    ? data.filter((tool) =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedTags.length === 0 || selectedTags.every(tag => tool.tags.includes(tag)))
      )
    : [];

  const allTags = data ? [...new Set(data.flatMap(tool => tool.tags))] : [];

  return (
    <main className='max-w-5xl mx-auto px-9'>
      <Hero />
      <section className='flex flex-wrap justify-between min-h-full mx-auto'>
        <div className='w-full mb-5'>
          <input
            type='text'
            placeholder={`Search among ${filteredData.length} items...`}
            value={searchQuery}
            onChange={handleSearchChange}
            className='w-full px-4 py-2 border border-gray-700 rounded-md'
          />
        </div>
        <div className='w-full mb-5 flex flex-wrap gap-2'>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-3xl border-gray-600 border text-sm ${selectedTags.includes(tag) ? 'bg-white text-black' : 'bg-[#161616] text-white'}`}
            >
              {tag}
            </button>
          ))}
        </div>
        {isLoading && <div>Loading...</div>}
        {!isLoading && filteredData.map((tool) => (
          <Card key={tool.name} tool={tool} />
        ))}
        {filteredData.length === 0 && 
          <div className='flex items-center justify-center h-48 w-full text-4xl font-bold opacity-20 text-center'>No Tools Found</div>
        }
      </section>
      <About />
    </main>
  );
}
