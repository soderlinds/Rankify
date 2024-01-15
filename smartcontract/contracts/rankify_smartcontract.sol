// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Rankify {
    struct Review {
        uint256 id;
        string title;
        string description;
        uint256 rating;
        uint256 timestamp;
        uint256 qrCodeId;
    }

    struct QRCode {
        uint256 transactionId;
        bool used;
    }

    mapping(uint256 => Review) public reviews;
    mapping(uint256 => QRCode) public qrCodes;

    uint256 public reviewCounter;
    uint256 public qrCodeCounter;

    event ReviewSubmitted(uint256 id, string title, string description, uint256 rating, uint256 timestamp, uint256 qrCodeId);
    event QRCodeGenerated(uint256 qrCode, uint256 transactionId);

    function generateQRCode(uint256 _transactionId) public returns (uint256) {
        uint256 newQRCode = qrCodeCounter;
        qrCodes[newQRCode] = QRCode(_transactionId, false);
        qrCodeCounter++;
        emit QRCodeGenerated(newQRCode, _transactionId);
        return newQRCode;
    }

    function submitReview(string memory _title, string memory _description, uint256 _rating, uint256 _qrCodeId) public {
        require(!qrCodes[_qrCodeId].used, "QR code has already been used");
        require(_qrCodeId < qrCodeCounter, "Invalid QR code");

        reviews[reviewCounter] = Review(reviewCounter, _title, _description, _rating, block.timestamp, _qrCodeId);
        qrCodes[_qrCodeId].used = true;

        emit ReviewSubmitted(reviewCounter, _title, _description, _rating, block.timestamp, _qrCodeId);

        reviewCounter++;
    }

    function getReviews(uint256 _id) public view returns (string memory, string memory, uint256, uint256, uint256) {
        Review memory review = reviews[_id];
        return (review.title, review.description, review.rating, review.timestamp, review.qrCodeId);
    }

    function getQRCodeDetails(uint256 _id) public view returns (uint256, bool) {
        QRCode memory qrCode = qrCodes[_id];
        return (qrCode.transactionId, qrCode.used);
    }
}
