// src/components/PaymentForm.js
import React, { useState } from 'react';
import PaymentService from './PaymentService';
import './styles.css';

import Navbar from './Navbar';
import styled from 'styled-components';

const PaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);
  const [error, setError] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);


  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await PaymentService.processPayment({
        amount,
        cardNumber,
        expiryDate,
        cvv,
      });
      setPaymentResult(response.data);
    } catch (error) {
      setError('Error processing payment. Please try again.');
    }
    setLoading(false);
    
  };
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>

      <Navbar isScrolled={isScrolled} />
      <div className="payment-form">
      <h2>Payment Form</h2>
      {error && <div className="error">{error}</div>}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Expiry Date"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="CVV"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
      />
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
      {paymentResult && (
        <div className="payment-result">
          <h3>Payment Result</h3>
          <p>Status: {paymentResult.status}</p>
          <p>Message: {paymentResult.message}</p>
        </div>
      )}
    </div>
    </Container>
    
  );
};

export default PaymentForm;
const Container = styled.div`
  .content {
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h1 {
      margin-left: 3rem;
    }
    .grid {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;