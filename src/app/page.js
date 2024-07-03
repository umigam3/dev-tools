"use client"

import { useEffect, useState } from 'react';
import Header from '../components/header';

export default function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="card-container">
      <Header />
      {data.map((tool, index) => (
        <div className="card" key={index}>
          <h2>{tool.name}</h2>
          <p>{tool.description}</p>
          <p>Tags: {tool.tags.join(', ')}</p>
          <a href={tool.url} target="_blank" rel="noopener noreferrer">Visit {tool.name}</a>
        </div>
      ))}
    </div>
  );
}
