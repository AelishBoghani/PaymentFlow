import React, { useEffect, useRef, useState } from "react";



function EmiOptionsCard() {

    const [menuActive, setMenuActive] = useState(false);

    console.log(menuActive)

   
   
  return (
    <label htmlFor="radioNoLabel1" >
      <div className={`container shadow-lg p-3 mb-5 bg-white rounded emi__panel cursurPointer ${menuActive && 'active__panel'}`} onClick={()=>setMenuActive(!menuActive)}>
        <div className="emi__grid1">
          <div className="radio__button">
            <input
              className="form-check-input"
              type="radio"
              name="radioNoLabel"
              id="radioNoLabel1"
              value=""
              aria-label="..."
            />
          </div>

          <div>
            <div className="amount__details">3</div>
            <div className="text__details">Months</div>
          </div>
        </div>
        <div className="emi__grid2">
          <div className="amount__details">₹3423</div>
          <div className="text__details">/months</div>
        </div>
        <div className="emi__grid3">
          <div className="amount__details"> ₹10276</div>
          <div className="text__details"> Total @16% p.a.</div>
        </div>
      </div>
    </label>
  );
}

export default EmiOptionsCard;
