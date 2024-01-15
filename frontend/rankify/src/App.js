import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CedarGrill from './pages/CedarGrill';
import PaymentSimulation from './pages/PaymentSimulation';
import SubmitReviewPage from './pages/SubmitReviewPage';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cedar-grill" element={<CedarGrill />} />
      <Route path="/payment" element={<PaymentSimulation />} />
      <Route path="/submit-review/:qrCodeId" element={<SubmitReviewPage />} />
    </Routes>
  );
};

export default App;
