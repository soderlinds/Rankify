const express = require('express');
const router = express.Router();

module.exports = function (contractInstance) {
  router.post('/generate-qr-code', async (req, res) => {
    try {
      const { transactionId } = req.body;
      const newQRCode = await contractInstance.methods
        .generateQRCode(transactionId)
        .send({ from: '0x64094b6d129FCE9312582A7306BA8b328Df40719', gas: 500000 }); 
      res.json({ message: 'QR code generated successfully', qrCode: newQRCode });
    } catch (error) {
      console.error('Error generating QR code:', error);
      res.status(500).json({ error: 'Error generating QR code' });
    }
  });

  router.post('/submit-review', async (req, res) => {
    try {
      const { title, description, rating, qrCodeId } = req.body;
      await contractInstance.methods
        .submitReview(title, description, rating, qrCodeId)
        .send({ from: '0x64094b6d129FCE9312582A7306BA8b328Df40719', gas: 500000 }); 
      res.json({ message: 'Review submitted successfully' });
    } catch (error) {
      console.error('Error submitting review:', error);
      res.status(500).json({ error: 'Error submitting review' });
    }
  });

  router.get('/reviews', async (req, res) => {
    try {
      const allReviews = [];
      const totalReviews = await contractInstance.methods.reviewCounter().call();
      for (let i = 0; i < totalReviews; i++) {
        const review = await contractInstance.methods.getReviews(i).call();
        const qrCodeDetails = await contractInstance.methods.getQRCodeDetails(review[4]).call(); 
        const timestamp = new Date(review[3] * 1000).toDateString();
        
        allReviews.push({
          id: i,
          title: review[0],
          description: review[1],
          rating: review[2],
          timestamp: timestamp,
          qrCodeId: review[4],
          qrCodeDetails: {
            transactionId: qrCodeDetails[0],
            isUsed: qrCodeDetails[1],
          },
        });
      }
      
      console.log('Fetched reviews:', allReviews);
      res.json({ reviews: allReviews });
    } catch (error) {
      console.error('Error fetching all reviews:', error);
      res.status(500).json({ error: 'Error fetching all reviews' });
    }
  });

  return router;
};
