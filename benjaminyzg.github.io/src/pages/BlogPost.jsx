import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Request the specific JSON file named after our URL slug
    fetch(`/posts/${slug}.json`)
      .then(response => {
        if (!response.ok) throw new Error("Post file not found");
        return response.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div style={{ padding: '20px' }}>Loading post content...</div>;
  if (!post) return <div style={{ padding: '20px' }}>⚠️ Post not found.</div>;

  return (
    <div style={{ padding: '20px', textAlign: 'left' }}>
      <h2>{post.title}</h2>
      <p style={{ color: '#888', fontSize: '0.9rem' }}>Published on: {post.date}</p>
      <p style={{ margin: '20px 0', lineHeight: '1.6', color: '#333' }}>
        {post.content}
      </p>
      <Link to="/blog" style={{ color: '#3b82f6' }}>← Back to Blog List</Link>
    </div>
  );
}