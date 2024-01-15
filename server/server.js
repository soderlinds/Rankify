const express = require('express');
const app = express();
const cors = require('cors');
const Web3 = require('web3');
const config = require('./config');
const reviewRoutes = require('./routes/reviewRoutes');
app.use(cors());
app.use(express.json());


const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

const contractAddress = config.contractAddress;
const contractABI = config.contractABI;

const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

app.use('/api', reviewRoutes(contractInstance));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
