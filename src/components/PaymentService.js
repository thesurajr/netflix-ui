// src/components/PaymentService.js

const PaymentService = {
  processPayment: async (paymentData) => {
    const response = await fetch('https://yourpaymentapi.com/processPayment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to process payment');
    }
    return response.json();
  },
};

export default PaymentService;
