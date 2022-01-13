import React from "react";

function VerificationCard() {
  return (
    <div className="verification__card container shadow-lg p-3 mb-5 bg-white rounded">
      <div className="verification__description">
        <div className="verification__number">1</div>
        <div>
          <div className="verification__title">PAN Card Verification</div>
          <div className="verification__detail">
            <span>Enter your PAN card number</span>
            
          </div>
        </div>
      </div>
      <div className="verification__form">
        <div className="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div>
          <button type="button" className="btn btn-success btn-lg">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerificationCard;
