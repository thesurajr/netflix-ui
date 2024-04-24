// src/components/PaymentForm.js
import React, { useState } from 'react';
import PaymentService from './PaymentService';
import './styles.css';

const PaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);
  const [error, setError] = useState('');

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

  return (
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
  );
};

export default PaymentForm;
