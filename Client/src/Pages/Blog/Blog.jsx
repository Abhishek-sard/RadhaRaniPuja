import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: '5 Tips for Better Online Shopping',
    description: 'Learn how to get the best deals and shop smartly on any e-commerce platform.',
    image: 'https://via.placeholder.com/400x200',
    author: 'Abhishek Sardar',
    date: 'July 30, 2025',
  },
  {
    id: 2,
    title: 'Why Product Reviews Matter',
    description: 'Discover how customer reviews can help you make informed buying decisions.',
    image: 'https://via.placeholder.com/400x200',
    author: 'Team Hamro Shop',
    date: 'July 28, 2025',
  },
  {
    id: 3,
    title: 'Upcoming E-Commerce Trends in 2025',
    description: 'Stay ahead with these upcoming trends in the world of online shopping.',
    image: 'https://via.placeholder.com/400x200',
    author: 'TechNepal',
    date: 'July 25, 2025',
  },
];

const Blog = () => {
  return (
    <div className="px-6 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12">Our Latest Blog Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <div className="text-gray-400 text-xs">
                By <span className="text-gray-600">{post.author}</span> • {post.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
