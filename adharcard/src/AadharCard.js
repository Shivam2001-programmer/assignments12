import React from "react";

function AadharCard({ userData }) {
  return (
    <div className="aadharcad-container">
      <h2>Aadhar Card</h2>
      <div className="aadharcad">
        <p>
          <strong>Name:</strong> {userData.fullName}
        </p>
        <p>
          <strong>Date of Birth:</strong> {userData.dob}
        </p>
        <p>
          <strong>Address:</strong> {userData.address}
        </p>
        <p>
          <strong>Contact:</strong> {userData.contact}
        </p>
        <p>
          <strong>UID:</strong> {userData.uid}
        </p>
      </div>
    </div>
  );
}

export default AadharCard;
