import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogCard.css';

function BlogCard({ id, title, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="blog-card" onClick={handleClick}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default BlogCard;
