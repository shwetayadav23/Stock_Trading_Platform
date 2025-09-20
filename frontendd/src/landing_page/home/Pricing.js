import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-4'>
                    <h2 className='mb-5'>Unbeatable Pricing</h2>
                    <p className='pricing-content' style={{color: '#7a667a', fontSize: '22px'}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='/pricing' style={{textDecoration: 'none'}} className='fs-5'>See pricing<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col p-5 border'>
                            <h1 className='mb-5' style={{textAlign: 'center'}}>₹0</h1>
                            <p style={{textAlign: 'center'}}>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col p-5 border'>
                            <h1 className='mb-5' style={{textAlign: 'center'}}>₹20</h1>
                            <p style={{textAlign: 'center'}}>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;