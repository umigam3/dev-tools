'use client';

import { useEffect, useState, useMemo } from 'react';
import Card from '@/components/Card';
import axios from 'axios';

export default function HomePage() {
  const [data, setData] = useState(null);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [initialView, setInitialView] = useState(true);
  const [showAllButton, setShowAllButton] = useState(false);

  const baseURL = 'http://192.168.1.48:3001';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await axios.get(`${baseURL}/tools`);
      setData(response.data.tools);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await axios.get(`${baseURL}/tags`);
      setTags(response.data.tags);
    };

    fetchTags();

  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setInitialView(false);
  };

  const showAllItems = () => {
    setInitialView(false);
    setShowAllButton(false);
  };

  const filteredData = useMemo(() => {
    return data
      ? data.filter(
          (tool) =>
            tool.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (selectedTags.length === 0 ||
              selectedTags.every((tag) => tool.tags.includes(tag)))
        )
      : [];
  }, [data, searchQuery, selectedTags]);

  const displayedData = initialView ? filteredData.slice(0, 30) : filteredData;

  useEffect(() => {
    setShowAllButton(initialView && filteredData.length > 30);
  }, [initialView, filteredData]);

  return (
    <>
      <div className='w-full mb-2'>
        <input
          type='text'
          placeholder={`Search among ${filteredData.length} items...`}
          value={searchQuery}
          onChange={handleSearchChange}
          className='w-full px-4 py-2 border border-gray-700 rounded-md'
        />
      </div>
      <div className='w-full mb-2 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <button
              key={tag.tag_id}
              className={`px-4 py-2 rounded-3xl border-gray-700 border text-sm ${
                selectedTags.includes(tag)
                  ? 'bg-white text-black'
                  : 'bg-[#161616] text-white'
              }`}
            >
              {tag.name}
            </button>
          ))}
      </div>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-full mx-auto w-full'>
        {isLoading && <div>Loading...</div>}
        {!isLoading && displayedData.map((tool) => 
          <Card key={tool.tool_id} tool={tool} />)}
        {filteredData.length === 0 && (
          <div className='flex items-center justify-center h-48 w-full text-4xl font-bold opacity-20 text-center'>
            <span className='text-center'>No Tools Found</span>
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
    </>
  );
}
