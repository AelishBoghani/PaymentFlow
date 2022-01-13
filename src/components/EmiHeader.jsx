import { LeftOutlined } from "@ant-design/icons/lib/icons";
import React from "react";

function EmiHeader() {
  return (
    <div className="emi__header container shadow-lg p-3 mb-5 bg-white">
      <div>
      <LeftOutlined />
        <img
          src="https://iccdn.in/lenders/icici-main-logo-v3.svg"
          alt="bank-logo"
        />
      </div>
      <div className="bank__details">
          ICICI Bank
      </div>
    </div>
  );
}

export default EmiHeader;
