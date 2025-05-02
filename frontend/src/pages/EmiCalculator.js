import React, { useState } from 'react';

function EmiCalculator() {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = (e) => {
    e.preventDefault();
    const P = parseFloat(amount);
    const R = parseFloat(interest) / 12 / 100;
    const N = parseFloat(tenure);

    if (!P || !R || !N) {
      setEmi("Please fill all fields with valid numbers.");
      return;
    }

    const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(`Your monthly EMI is ₹${emiValue.toFixed(2)}`);
  };

  return (
    <div style={{ marginTop: "80px", marginBottom: "80px", padding: "20px" }}>
      <h1>EMI Calculator</h1>
      <form onSubmit={calculateEMI} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <input
          type="number"
          placeholder="Loan Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Annual Interest Rate (%)"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Loan Tenure (Months)"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          required
        />
        <button type="submit" style={{ marginTop: "10px", padding: "10px", backgroundColor: "#25D366", color: "white", border: "none", borderRadius: "5px" }}>
          Calculate
        </button>
      </form>
      {emi && <p style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>{emi}</p>}
    </div>
  );
}

export default EmiCalculator;
