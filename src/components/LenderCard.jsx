import { RightOutlined } from "@ant-design/icons/lib/icons";
import React from "react";

function LenderCard() {
  return (
    <div className="container lender__card shadow-lg p-3 mb-5 bg-white rounded">
      <div>
        <img src="https://iccdn.in/lenders/icici-icon-logo-v4.svg" alt="" />
      </div>
      <div>
        <h3>ICICI Bank</h3>
        <h6>
          EMI Starting <span>@ ₹908 x 12 months</span>
        </h6>
      </div>    
      <div>
        <RightOutlined />
      </div>
    </div>
  );
}

export default LenderCard;
