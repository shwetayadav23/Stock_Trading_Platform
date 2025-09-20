import React from 'react';

function Brokerage() {
    return (
        <div className='container' style={{marginTop: '100px', marginBottom: '100px'}}>
            <div className='row'>
                <div className='col-6'>
                    <a href='/brokerage-calculator' style={{textDecoration: 'none'}}><h4 style={{color: 'blue'}}>Brokerage Calculator</h4></a>
                    <div className='text-muted mt-5' style={{marginLeft: '-180px'}}>
                        <li className='mb-4'>Call & Trade and RMS auto-squaroff: Additional charges of ₹ 50 + GST per order.</li>
                        <li className='mb-4'>Digital contract notes will be sent via e-mail.</li>
                        <li className='mb-4'>Physical copies of contract notes, if required shall be charged ₹ 20 per contract note. Courier charges apply.</li>
                        <li className='mb-4'>For NRI account (non-PIS), 0.5% or ₹ 100 per executed order for equity (whichever is lower).</li>
                        <li className='mb-4'>For NRI account (PIS), 0.5% or ₹ 200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹ 40 per executed order instead of ₹ 20 per executed order.</li>
                    </div>
                </div>
                <div className='col-2'></div>
                <div className='col-4'>
                    <a href='/list-of-charges' style={{textDecoration: 'none'}}><h4 style={{color: 'blue'}}>List of charges</h4></a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;