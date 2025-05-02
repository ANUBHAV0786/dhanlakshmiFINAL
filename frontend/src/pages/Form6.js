import React from 'react';

function Form6() {
  return (
    <div style={{ marginTop: "80px", marginBottom: "80px", padding: "20px", maxWidth: "500px" }}>
      <h1>Tax Planning Form</h1>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <input type="text" placeholder="Full Name" required style={{ marginBottom: "10px", padding: "10px" }} />
        <input type="email" placeholder="Email Address" required style={{ marginBottom: "10px", padding: "10px" }} />
        <input type="number" placeholder="Investment Amount" required style={{ marginBottom: "10px", padding: "10px" }} />
        <textarea placeholder="Additional Notes" rows="4" style={{ marginBottom: "10px", padding: "10px" }}></textarea>
        <button type="submit" style={{ padding: "10px", backgroundColor: "#25D366", color: "white", border: "none", borderRadius: "5px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form6;
