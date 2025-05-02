import React, { useState } from 'react';

function WriteTestimonial() {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('message', message);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/testimonials/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errData = await response.json();
        setError('Submission failed: ' + JSON.stringify(errData));
      }
    } catch (err) {
      setError('Error: ' + err.message);
    }
  };

  return (
    <div style={{ marginTop: "80px", marginBottom: "80px", padding: "20px", maxWidth: "500px" }}>
      <h1>Write a Testimonial</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "10px" }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
            style={{ marginBottom: "10px", padding: "10px" }}
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            required
            style={{ marginBottom: "10px", padding: "10px" }}
          />
          <button type="submit" style={{ padding: "10px", backgroundColor: "#25D366", color: "white", border: "none", borderRadius: "5px" }}>
            Submit Testimonial
          </button>
        </form>
      ) : (
        <p style={{ fontSize: "18px", color: "green", marginTop: "20px" }}>
          Thank you for your testimonial!
        </p>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default WriteTestimonial;
