import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Download the master index file from the public folder
    fetch('/posts/posts-index.json')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Error fetching blog index:", err));
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'left' }}>
      <h2 style={{ borderBottom: '2px solid #3b82f6', paddingBottom: '8px' }}>Dynamic Blog Feed</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        {posts.map(post => (
          <div key={post.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '6px' }}>
            <h3>{post.title}</h3>
            <p style={{ color: '#666' }}>{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} style={{ color: '#3b82f6', fontWeight: 'bold' }}>Read Post →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}