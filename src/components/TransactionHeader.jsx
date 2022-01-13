import { MobileOutlined } from "@ant-design/icons/lib/icons";
import React from 'react'

function TransactionHeader() {
    return (
        <div className="transcation__header container shadow-lg p-3 mb-5 bg-white">
            <div className='mobile__details'><div><MobileOutlined /></div><div>7972274972</div></div>
            <div ><span>Amount: ₹1000</span></div>
        </div>
    )
}

export default TransactionHeader
