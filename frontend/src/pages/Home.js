import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import './Home.css';

function Home() {
  const [homeBlogs, setHomeBlogs] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/blogs/?type=home')
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched home blogs:", data);
        setHomeBlogs(data);
      })
      .catch((err) => console.error("Failed to load home blogs:", err));
  }, []);

  // Testimonials already working
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/testimonials/')
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched testimonials:", data);
        setTestimonials(data);
      })
      .catch((err) => console.error("Failed to load testimonials:", err));
  }, []);

  return (
    <div className="home">

      {/* Hero Section */}
      <div className="hero">
        <img src="https://via.placeholder.com/1500x500" alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Dhanlakshmi Investments</h1>
          <p>Your trusted partner for a secure financial future.</p>
          <a href="https://wa.me/919451293261?text=I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="hero-button">
            Chat with Us
          </a>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="cards-section">
        {homeBlogs.length === 0 ? (
          <p>Loading blogs...</p>
        ) : (
          homeBlogs.map((blog) => (
            <BlogCard key={blog.id} id={blog.id} title={blog.title} image={blog.image} />
          ))
        )}
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-slider">
          {testimonials.length === 0 ? (
            <p>No testimonials yet.</p>
          ) : (
            testimonials.map((t) => (
              <div key={t.id} className="testimonial">
                <img src={`http://127.0.0.1:8000${t.image}`} alt={t.name} style={{ width: '100%', borderRadius: '10px' }} />
                <p><strong>{t.name}</strong></p>
                <p>{t.message}</p>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}

export default Home;


///////////////////////Version 2
// import React, {useState, useEffect} from 'react';
// import BlogCard from '../components/BlogCard';
// import './Home.css';

// function Home() {
//   // Static placeholder blog data — will come from backend later
//   const homeBlogs = [
//     { id: 1, title: "Top Investment Tips", image: "https://via.placeholder.com/300x200" },
//     { id: 2, title: "Why You Need Insurance", image: "https://via.placeholder.com/300x200" },
//     { id: 3, title: "Use Our EMI Calculator", image: "https://via.placeholder.com/300x200" },
//   ];

//   // Dynamic blog data fetching from backend
//   // const [homeBlogs, setHomeBlogs] = useState([]);
//   // useEffect(() => {
//   //   fetch('http://127.0.0.1:8000/api/blogs/?type=home')
//   //     .then((res) => res.json())
//   //     .then((data) => setHomeBlogs(data))
//   //     .catch((err) => console.error("Failed to load blogs:", err));
//   // }, []);
//   // TEstimonial to fetch from backend

//   const [testimonials, setTestimonials] = useState([]);
//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/api/testimonials/')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Fetched testimonials:", data);
//         setTestimonials(data);
//       })
//       .catch((err) => console.error("Failed to load testimonials:", err));
//   }, []);
//   return (
//     <div className="home">

//       {/* Hero Section */}
//       <div className="hero">
//         <img src="https://via.placeholder.com/1500x500" alt="Hero" className="hero-image" />
//         <div className="hero-text">
//           <h1>Welcome to Dhanlakshmi Investments</h1>
//           <p>Your trusted partner for a secure financial future.</p>
//           <a href="https://wa.me/919451293261?text=I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="hero-button">
//             Chat with Us
//           </a>
//         </div>
//       </div>

//       {/* Blog Cards Section */}
//       <div className="cards-section">
//         {homeBlogs.map((blog) => (
//           <BlogCard key={blog.id} id={blog.id} title={blog.title} image={blog.image} />
//         ))}
//       </div>

//       {/* Testimonials Section */}
//       <div className="testimonials-section">
//         <h2>What Our Clients Say</h2>
//         <div className="testimonial-slider">
//           {testimonials.length === 0 ? (
//             <p>No testimonials yet.</p>
//           ) : (
//             testimonials.map((t) => (
//               <div key={t.id} className="testimonial">
//                 <img src={`http://127.0.0.1:8000${t.image}`} alt={t.name} style={{ width: '100%', borderRadius: '10px' }} />
//                 <p><strong>{t.name}</strong></p>
//                 <p>{t.message}</p>
//               </div>
//             ))
//           )}
//         </div>
//       </div>


//     </div>
//   );
// }

// export default Home;






/////////////////////////////////STATIC CODE FOR HOME PAGE///////////////////////////////////////
// import React from 'react';
// import './Home.css';

// function Home() {
//   return (
//     <div className="home">
      
//       {/* Hero Section */}
//       <div className="hero">
//         <img src="https://via.placeholder.com/1500x500" alt="Hero" className="hero-image" />
//         <div className="hero-text">
//           <h1>Welcome to Dhanlakshmi Investments</h1>
//           <p>Your trusted partner for a secure financial future.</p>
//           <a href="https://wa.me/919999999999?text=I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="hero-button">
//             Chat with Us
//           </a>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="cards-section">
//         <div className="card" onClick={() => window.open("/blog1", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Blog 1" />
//           <p>Read our latest blog</p>
//         </div>
//         <div className="card" onClick={() => window.open("/blog2", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Blog 2" />
//           <p>Discover investment tips</p>
//         </div>
//         <div className="card" onClick={() => window.open("/emi-calculator", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="EMI Calculator" />
//           <p>Use our EMI Calculator</p>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <div className="testimonials-section">
//         <h2>What Our Clients Say</h2>
//         <div className="testimonial-slider">
//           {/* Static for now, dynamic later */}
//           <div className="testimonial">"Great service and expert advice!"</div>
//           <div className="testimonial">"Highly recommend for financial planning."</div>
//           <div className="testimonial">"Professional, reliable, and trustworthy."</div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Home;
