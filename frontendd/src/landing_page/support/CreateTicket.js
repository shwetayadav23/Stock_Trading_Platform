import React from 'react';

function CreateTicket() {
    return (
        <div className='container' style={{ textAlign: 'left', marginTop: '100px', marginBottom: '250px' }}>
            <div className='row'>
                <h1 style={{ marginTop: '16px', marginBottom: '85px' }}>To create a ticket, select a relevant topic</h1>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '75px' }}>
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                        <h4 style={{ margin: '0' }}>Account Opening</h4>
                    </div>
                    <div className='ticket-links'>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Online Account Opening</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Offline Account Opening</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Company, Partnership and HUF Account Opening</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>NRI Account Opening</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Charges at Zerodha</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Zerodha IDFC First Bank 3-in-1 Account</a></h6>
                    </div>
                </div>
                <div className='col-4'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '75px' }}>
                        <i className="fa fa-user-o" aria-hidden="true"></i>
                        <h4 style={{ margin: '0' }}>Your Zerodha Account</h4>
                    </div>
                    <div className='ticket-links'>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Login Credentials</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Account Modification and Segment Addition</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>DP ID and bank details</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Your Profile</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Transfer and conversion of shares</a></h6>
                    </div>
                </div>
                <div className='col-4'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '75px' }}>
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        <h4 style={{ margin: '0' }}>Trading & Platforms</h4>
                    </div>
                    <div className='ticket-links'>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Margin/leverage, Product and Order</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Kite Web and Mobile</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Trading FAQs</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Corporate Actions</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Sentinel</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Kite API</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Pi and other platforms</a></h6>
                    </div>
                </div>
            </div>
            <div className='row' style={{ marginTop: '100px' }}>
                <div className='col-4'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '75px' }}>
                        <i class="fa fa-credit-card" aria-hidden="true"></i>
                        <h4 style={{ margin: '0' }}>Funds</h4>
                    </div>
                    <div className='ticket-links'>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Adding Funds</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Fund Withdrawal</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>eMandates</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Adding Bank Accounts</a></h6>
                    </div>
                </div>
                <div className='col-4'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '75px' }}>
                        <i class="fa fa-circle-o-notch" aria-hidden="true"></i>
                        <h4 style={{ margin: '0' }}>Console</h4>
                    </div>
                    <div className='ticket-links'>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Reports</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Ledger</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Portfolio</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>60 Day Challenge</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>IPO</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Referral Program</a></h6>
                    </div>
                </div>
                <div className='col-4'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '75px' }}>
                        <i class="fa fa-circle-thin" aria-hidden="true"></i>
                        <h4 style={{ margin: '0' }}>Coin</h4>
                    </div>
                    <div className='ticket-links'>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Understanding Mutual Funds</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>About Coin</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Buying and Selling through Coin</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Starting an SIP</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Managing your Portfolio</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Coin App</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Moving to Coin</a></h6>
                        <h6><a href='/onlineacc' style={{ textDecoration: 'none' }}>Government Securities</a></h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;