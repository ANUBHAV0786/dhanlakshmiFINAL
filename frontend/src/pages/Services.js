import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import './Services.css';

function Services() {
  const [serviceBlogs, setServiceBlogs] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/blogs/?type=services')
      .then((res) => res.json())
      .then((data) => setServiceBlogs(data))
      .catch((err) => console.error("Failed to load services blogs:", err));
  }, []);

  return (
    <div className="services">

      {/* Row 1 - Blogs */}
      <div className="row">
        {serviceBlogs.length === 0 ? (
          <p>Loading blogs...</p>
        ) : (
          serviceBlogs.map((blog) => (
            <BlogCard key={blog.id} id={blog.id} title={blog.title} image={blog.image} />
          ))
        )}
      </div>

      {/* Remaining rows (static for now) */}
      <div className="row">
        <div className="card" onClick={() => window.open("/form1", "_blank")}>
          <img src="https://via.placeholder.com/300x200" alt="Form 1" />
          <p>Investment Form</p>
        </div>
        <div className="card" onClick={() => window.open("/form2", "_blank")}>
          <img src="https://via.placeholder.com/300x200" alt="Form 2" />
          <p>Insurance Form</p>
        </div>
        <div className="card" onClick={() => window.open("/form3", "_blank")}>
          <img src="https://via.placeholder.com/300x200" alt="Form 3" />
          <p>Loan Application</p>
        </div>
        <div className="card" onClick={() => window.open("/form4", "_blank")}>
          <img src="https://via.placeholder.com/300x200" alt="Form 4" />
          <p>Retirement Planning Form</p>
        </div>
        <div className="card" onClick={() => window.open("/form5", "_blank")}>
          <img src="https://via.placeholder.com/300x200" alt="Form 5" />
          <p>Financial Health Check Form</p>
        </div>
        <div className="card" onClick={() => window.open("/form6", "_blank")}>
          <img src="https://via.placeholder.com/300x200" alt="Form 6" />
          <p>Tax Planning Form</p>
        </div>
      </div>

    </div>
  );
}

export default Services;



// import React from 'react';
// import BlogCard from '../components/BlogCard';
// import './Services.css';

// function Services() {
//   const serviceBlogs = [
//     { id: 7, title: "Top 10 Investment Options", image: "https://via.placeholder.com/300x200" },
//     { id: 8, title: "Retirement Planning", image: "https://via.placeholder.com/300x200" },
//     { id: 9, title: "Health Insurance Guide", image: "https://via.placeholder.com/300x200" },
//   ];

//   return (
//     <div className="services">

//       {/* Row 1 - Blogs */}
//       <div className="row">
//         {serviceBlogs.map((blog) => (
//           <BlogCard key={blog.id} id={blog.id} title={blog.title} image={blog.image} />
//         ))}
//       </div>

//       {/* Remaining rows (static for now) */}
//       <div className="row">
//         <div className="card" onClick={() => window.open("/form1", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Form 1" />
//           <p>Investment Form</p>
//         </div>
//         <div className="card" onClick={() => window.open("/form2", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Form 2" />
//           <p>Insurance Form</p>
//         </div>
//         <div className="card" onClick={() => window.open("/form3", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Form 3" />
//           <p>Loan Application</p>
//         </div>
//         <div className="card" onClick={() => window.open("/form4", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Form 4" />
//           <p>Retirement Planning Form</p>
//         </div>
//         <div className="card" onClick={() => window.open("/form5", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Form 5" />
//           <p>Financial Health Check Form</p>
//         </div>
//         <div className="card" onClick={() => window.open("/form6", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Form 6" />
//           <p>Tax Planning Form</p>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Services;



//////////////////////////STATIC CODE FOR SERVICES PAGE///////////////////////////////////////
// import React from 'react';
// import './Services.css';

// function Services() {
//   return (
//     <div className="services">
      
//       {/* Row 1 - Blogs */}
//       <div className="row">
//         <div className="card" onClick={() => window.open("/blog4", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Blog 4" />
//           <p>Top 10 Investment Options</p>
//         </div>
//         <div className="card" onClick={() => window.open("/blog5", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Blog 5" />
//           <p>Retirement Planning Basics</p>
//         </div>
//         <div className="card" onClick={() => window.open("/blog6", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Blog 6" />
//           <p>Wealth Management Tips</p>
//         </div>
//       </div>

//       {/* Row 2 - Blogs */}
//       <div className="row">
//         <div className="card" onClick={() => window.open("/blog7", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Blog 7" />
//           <p>Child Education Planning</p>
//         </div>
//         <div className="card" onClick={() => window.open("/blog8", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Blog 8" />
//           <p>Health Insurance Guide</p>
//         </div>
//         <div className="card" onClick={() => window.open("/blog9", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Blog 9" />
//           <p>Life Insurance Benefits</p>
//         </div>
//       </div>

//       {/* Row 3 - Questionnaires */}
//       <div className="row">
//         <div className="card" onClick={() => window.open("/form1", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Form 1" />
//           <p>Investment Form</p>
//         </div>
//         <div className="card" onClick={() => window.open("/form2", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Form 2" />
//           <p>Insurance Enquiry Form</p>
//         </div>
//         <div className="card" onClick={() => window.open("/form3", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Form 3" />
//           <p>Loan Application Form</p>
//         </div>
//       </div>

//       {/* Row 4 - Questionnaires */}
//       <div className="row">
//         <div className="card" onClick={() => window.open("/form4", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Form 4" />
//           <p>Retirement Planning Form</p>
//         </div>
//         <div className="card" onClick={() => window.open("/form5", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Form 5" />
//           <p>Financial Health Check Form</p>
//         </div>
//         <div className="card" onClick={() => window.open("/form6", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Form 6" />
//           <p>Tax Planning Form</p>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Services;
