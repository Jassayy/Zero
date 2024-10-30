import React, { useEffect, useState } from "react";
import Button from "../components/Button";

function Docs() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "The Future of Development",
      content: "Exploring upcoming trends in software development and how Zero is positioned to embrace these changes.",
      date: "June 15, 2023"
    },
    {
      id: 2, 
      title: "Building Scalable Systems",
      content: "Best practices and insights on creating robust, scalable applications in today's cloud environment.",
      date: "June 10, 2023"
    },
    {
      id: 3,
      title: "DevOps Evolution",
      content: "How DevOps practices have evolved and what it means for modern development teams.",
      date: "June 5, 2023"
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    const cards = document.querySelectorAll('.glow-card');
    
    // Mouse move effect
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });

    // Scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.add('opacity-100');
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      card.classList.add('opacity-0');
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleAddBlog = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    setBlogs([...blogs, {
      id: blogs.length + 1,
      title: newBlog.title,
      content: newBlog.content,
      date: date
    }]);

    setNewBlog({ title: '', content: '' });
    setShowAddForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-900/20">
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              Blog Posts
            </h1>
            <Button 
              variant="primary"
              onClick={() => setShowAddForm(true)}
            >
              Add Blog
            </Button>
          </div>

          {showAddForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Add New Blog</h2>
                <form onSubmit={handleAddBlog}>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Title</label>
                    <input
                      type="text"
                      value={newBlog.title}
                      onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Content</label>
                    <textarea
                      value={newBlog.content}
                      onChange={(e) => setNewBlog({...newBlog, content: e.target.value})}
                      className="w-full p-2 border rounded h-32 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-4">
                    <Button
                      variant="secondary"
                      onClick={() => setShowAddForm(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      type="submit"
                    >
                      Add Blog
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="glow-card relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg before:absolute before:w-[200px] before:h-[200px] before:bg-blue-500/20 before:rounded-full before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0 before:pointer-events-none transform transition-all duration-700" style={{"--mouse-x": "0px", "--mouse-y": "0px", "--before-left": "var(--mouse-x)", "--before-top": "var(--mouse-y)"}}>
                <div className="relative z-10">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{blog.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {blog.content}
                  </p>
                  <div className="flex justify-between items-center">
                    <button className="text-blue-600 hover:text-blue-700 font-medium">Read more →</button>
                    <span className="text-sm text-gray-500">{blog.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 glow-card relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg before:absolute before:w-[200px] before:h-[200px] before:bg-blue-500/20 before:rounded-full before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0 before:pointer-events-none transform transition-all duration-700" style={{"--mouse-x": "0px", "--mouse-y": "0px", "--before-left": "var(--mouse-x)", "--before-top": "var(--mouse-y)"}}>
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Featured Posts</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border-b dark:border-gray-700 pb-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                      {item === 1 && "Cloud Native Architecture Patterns"}
                      {item === 2 && "Microservices vs Monoliths"}
                      {item === 3 && "The Rise of Serverless"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      In-depth analysis and practical insights from our engineering team.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-500/10 dark:bg-blue-400/5 rounded-full -top-12 -left-12 animate-blob"></div>
          <div className="absolute w-96 h-96 bg-purple-500/10 dark:bg-purple-400/5 rounded-full top-48 -right-12 animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 bg-indigo-500/10 dark:bg-indigo-400/5 rounded-full -bottom-12 left-1/3 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
}

export default Docs;
