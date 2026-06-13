import React from 'react';
import { Link } from 'react-router-dom'; // Crucial import!

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '15px', background: '#fafafa' }}>
      {/* Existing navigation options */}
      <Link to="/">Overview</Link>
      
      {/* ADD THIS EXACT LINE HERE: This renders the physical Blog link */}
      <Link to="/blog" style={{ fontWeight: 'bold', color: '#0070f3' }}>Blog</Link>
    </nav>
  );
}