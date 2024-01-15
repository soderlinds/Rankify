# Rankify Smart Contract

- This smart contract, written in Solidity, facilitates the generation of QR codes, submission of reviews,  and retrieval of review and QR code details. The contract ensures the integrity of the review process by linking each review to a unique QR code, preventing duplicate submissions.

## Tech Stack

- Solidity

# Smart Contract Features

## Structs

- Struct for QR code handling
- Struct for review submissions

## State Variables

- reviews: Tracks submitted reviews.
- qrCodes: Manages generated QR codes.
- reviewCounter and qrCodeCounter: Counters for reviews and QR codes.

## Events

- ReviewSubmitted:
        Emits when a user submits a review.

- QRCodeGenerated:
        Emits when a new QR code is generated.

## Key Functions

- generateQRCode:
        Generates a new QR code and associates it with a transaction ID.

- submitReview:
        Allows users to submit reviews tied to a specific QR code.

- getReviews and getQRCodeDetails:
        Retrieve review and QR code details.

