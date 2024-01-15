# Rankify Backend

## Tech Stack

- Node.js

## API Endpoints and Blockchain Integration

- Generate QR Code

    Endpoint: POST /generate-qr-code
    Description: Generates a unique QR code associated with a specific transaction on the Blockchain. Requires the transactionId in the request body.

- Submit Review

    Endpoint: POST /submit-review
    Description: Allows users to submit reviews associated with a QR code. Requires title, description, rating, and qrCodeId in the request body.

- Get All Reviews

    Endpoint: GET /reviews
    Description: Retrieves all submitted reviews along with associated details such as timestamp and QR code information.

- Notes

    In this prototype a hardcoded address is used for QR code generation and review submission.

# Installation

## Install dependencies
npm install

## Run the server
node server.js
