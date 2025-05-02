import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://127.0.0.1:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const errData = await res.json();
        setError('Error: ' + JSON.stringify(errData));
      }
    } catch (err) {
      setError('Error: ' + err.message);
    }
  };

  return (
    <div className="contact">
      <div className="description">
        <p>
          Welcome to Dhanlakshmi Investments! <br />
          We are excited to connect with you... <br />
          
          Whether you have questions about investments, insurance, loans, or financial planning, <br />
          our team is here to assist you at every step. <br />
          Please feel free to fill the form below and we will get back to you shortly. <br />
          Our commitment is to provide the best service with complete transparency. <br />
          Your financial success is our priority. <br />
          Let's grow together and achieve your financial dreams. <br />
          Reach out now and let's begin your investment journey! <br />
          Thank you for trusting Dhanlakshmi Investments.
        </p>
      </div>

      <div className="contact-form">
        <h2>Contact Us</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        ) : (
          <p style={{ color: 'green', fontSize: '18px' }}>Thank you! We’ve received your message.</p>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>

      {/* Keep Join Us On section here if already present */}
    </div>
  );
}

export default ContactUs;



////////////////////////////////////////////////////////////STATIC CODE FOR CONTACT US PAGE///////////////////////////////////////////////////////
// import React from 'react';
// import './ContactUs.css';

// function ContactUs() {
//   return (
//     <div className="contact">
      
//       {/* Static Description */}
//       <div className="description">
//         <p>
//           Welcome to Dhanlakshmi Investments! <br />
//           We are excited to connect with you. <br />
//           Whether you have questions about investments, insurance, loans, or financial planning, <br />
//           our team is here to assist you at every step. <br />
//           Please feel free to fill the form below and we will get back to you shortly. <br />
//           Our commitment is to provide the best service with complete transparency. <br />
//           Your financial success is our priority. <br />
//           Let's grow together and achieve your financial dreams. <br />
//           Reach out now and let's begin your investment journey! <br />
//           Thank you for trusting Dhanlakshmi Investments.
//         </p>
//       </div>

//       {/* Contact Form */}
//       <div className="contact-form">
//         <h2>Contact Us</h2>
//         <form>
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Your Email" required />
//           <input type="text" placeholder="Subject" required />
//           <textarea placeholder="Your Message" rows="5" required></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </div>

//       {/* Join Us On Section */}
//       <div className="join-us">
//         <h2>Join Us On</h2>
//         <div className="join-cards">
//           <div className="card" onClick={() => window.open("https://facebook.com", "_blank")}>
//             <p>Facebook</p>
//           </div>
//           <div className="card" onClick={() => window.open("https://instagram.com", "_blank")}>
//             <p>Instagram</p>
//           </div>
//           <div className="card" onClick={() => window.open("https://linkedin.com", "_blank")}>
//             <p>LinkedIn</p>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default ContactUs;
