# Rankify Smart Contract

- This smart contract, written in Solidity, forms the backbone of the Rankify project. It facilitates the generation of QR codes, submission of reviews,  and retrieval of review and QR code details. The contract ensures the integrity of the review process by linking each review to a unique QR code, preventing duplicate submissions.

## Tech Stack

- Solidity

# Smart Contract Features

- Struct for QR code handling
- Struct for review submissions

## State Variables

    reviews: A mapping of review IDs to Review structs, storing details of each submitted review.
    qrCodes: A mapping of QR code IDs to QRCode structs, keeping track of each generated QR code.
    reviewCounter: A counter tracking the total number of reviews submitted.
    qrCodeCounter: A counter tracking the total number of generated QR codes.

## Events

    ReviewSubmitted:
        Triggered when a user submits a review, emitting details like review ID, title, description, rating, timestamp, and associated QR code ID.

    QRCodeGenerated:
        Triggered when a new QR code is generated, emitting details like the QR code ID and associated transaction ID.

## Functions

    generateQRCode:
        Generates a new QR code and associates it with a transaction ID.
        Emits the QRCodeGenerated event.

    submitReview:
        Allows users to submit reviews tied to a specific QR code.
        Checks if the QR code is valid and not already used.
        Updates the state variables and emits the ReviewSubmitted event.

    getReviews:
        Retrieves details of a specific review based on its ID.

    getQRCodeDetails:
        Retrieves details of a specific QR code based on its ID.

