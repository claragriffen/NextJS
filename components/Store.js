'use client';
import { useState, useEffect } from 'react';

export default function Store() {
  // State: what the component needs to remember
  const [products, setProducts] = useState([]); // products from the API
  const [query, setQuery] = useState('');       // text typed in the search bar

  // Fetch the products once, when the component first loads
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []); // empty [] = run only once

  // Keep only the products whose title contains the search text
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '0.5rem', width: '300px', border: '1px solid #ccc', marginBottom: '1rem' }}
      />

      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '0.5rem' }}>Title</th>
            <th style={{ textAlign: 'left', padding: '0.5rem' }}>Image</th>
            <th style={{ textAlign: 'left', padding: '0.5rem' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((p) => (
            <tr key={p.id} style={{ borderTop: '1px solid #ddd' }}>
              <td style={{ padding: '0.5rem' }}>{p.title}</td>
              <td style={{ padding: '0.5rem' }}>
                <img src={p.image} alt={p.title} width={50} />
              </td>
              <td style={{ padding: '0.5rem' }}>${p.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}