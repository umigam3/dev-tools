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
  const [initialView, setInitialView] = useState(true);
  const [showAllButton, setShowAllButton] = useState(false); // Estado para controlar la visibilidad del botón

  useEffect(() => {
    const fetchTools = async () => {
      setIsLoading(true);

      const response = await fetch('/api/data');
      const tools = await response.json();

      setData(tools);
      setIsLoading(false);
    };

    fetchTools();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setInitialView(false); // Desactivar la vista inicial cuando se realiza una búsqueda
  };

  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
    setInitialView(false); // Desactivar la vista inicial cuando se selecciona un tag
  };

  const showAllItems = () => {
    setInitialView(false); // Desactivar la vista inicial al hacer clic en el botón
    setShowAllButton(false); // Ocultar el botón después de hacer clic
  };

  const filteredData = data
    ? data.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (selectedTags.length === 0 ||
            selectedTags.every((tag) => tool.tags.includes(tag)))
      )
    : [];

  const displayedData = initialView ? filteredData.slice(0, 6) : filteredData;

  const allTags = data ? [...new Set(data.flatMap((tool) => tool.tags))] : [];

  useEffect(() => {
    // Mostrar el botón solo si estamos en la vista inicial y hay más de 5 elementos filtrados
    setShowAllButton(initialView && filteredData.length > 5);
  }, [initialView, filteredData]);

  return (
    <main className='max-w-6xl mx-auto px-9'>
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
              className={`px-3 py-1 rounded-3xl border-gray-700 border text-sm ${
                selectedTags.includes(tag)
                  ? 'bg-white text-black'
                  : 'bg-[#161616] text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        {isLoading && <div>Loading...</div>}
        {!isLoading && displayedData.map((tool) => 
          <Card key={tool.name} tool={tool} 
        />)}
        {filteredData.length === 0 && (
          <div className='flex items-center justify-center h-48 w-full text-4xl font-bold opacity-20 text-center'>
            No Tools Found
          </div>
        )}
      </section>
      {initialView && showAllButton && (
          <button
            onClick={showAllItems}
            className='bg-[#161616] text-white px-4 py-2 rounded-md mt-4 mx-auto block'
          >
            Show All Items
          </button>
        )}
      <About />
    </main>
  );
}
