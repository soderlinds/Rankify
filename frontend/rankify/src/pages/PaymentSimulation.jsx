import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';
import "../styles/_paymentsimulation.sass";

const PaymentSimulation = () => {
  const [amount, setAmount] = useState('');
  const [qrCodeId, setQRCodeId] = useState(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handlePayment = async () => {
    if (!amount) {
      alert('Please enter the amount to proceed with the payment.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/generate-qr-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transactionId: Math.floor(Math.random() * 1000) + 1 }), 
      });

      if (response.ok) {
        const data = await response.json();
        const qrCodeDetails = data.qrCode; 
        const newGeneratedQRCodeId = qrCodeDetails.events.QRCodeGenerated.returnValues.qrCode;  
        setQRCodeId(newGeneratedQRCodeId);

        console.log('Transaction ID:', qrCodeDetails.events.QRCodeGenerated.returnValues.transactionId);
        
        setPaymentCompleted(true);
      } else {
        throw new Error('Failed to generate QR code');
      }
    } catch (error) {
      console.error('Error generating QR code:', error);
      alert('Failed to generate QR code. Please try again.');
    }
  };

  return (
    <div className="payment-container">
      {!paymentCompleted ? (
        <div className="payment-form">
          <div className="payment-header">Make a payment</div>
          <div>Amount in SEK:</div>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
          <button className="payment-button" onClick={handlePayment}>Pay now</button>
        </div>
      ) : (
        <div className="qr-code-container">
          <div className="payment-header">Payment successful!</div>
          <div>Your QR Code:</div>
          <Link to={`/submit-review/${qrCodeId}`}>
            <QRCode value={`QR ID: ${qrCodeId}`} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default PaymentSimulation;

