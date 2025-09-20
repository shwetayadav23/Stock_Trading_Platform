import React from 'react';

function Hero() {
    return (
        <div className='blue-box'>
            <div className='container' style={{ marginTop: '100px', marginBottom: '250px' }}>
                <div className='row' style={{ marginTop: '100px' }}>
                    <div className='col-6'>
                        <h5 style={{fontSize: '30px', textAlign: 'left',color: '#fff'}}>Support Portal</h5>
                    </div>
                    <div className='col-6'>
                        <h5 style={{fontSize: '30px', textAlign: 'right', color: '#fff'}}><u>Track Tickets</u></h5>
                    </div>
                </div>
                <div className='row' style={{ marginTop: '150px' }}>
                    <div className='col-6'>
                        <h4 style={{ marginBottom: '45px', fontSize: '30px', color: '#fff', textAlign: 'left'}}>Search for an answer or browse help topics <br /> to create a ticket</h4>
                        <input className='btn btn-primary' type='search' style={{ backgroundColor: 'white', color: 'black', fontSize: '22px', height: '75px', width: '100%' }} placeholder='Eg: how do I activate F&O, why is my order getting rejected' />
                        <div style={{ marginTop: '45px' }}>
                            <a href='/support' style={{ marginRight: '45px', fontSize: '24px', color: '#fff' }}>Track account opening</a>
                            <a href='/support' style={{ marginRight: '45px', fontSize: '24px', color: '#fff' }}>Track segment activation</a>
                            <a href='/support' style={{ marginRight: '45px', fontSize: '24px', color: '#fff' }}>Intraday margins</a>
                            <a href='/support' style={{ marginRight: '45px', fontSize: '24px', color: '#fff' }}>Kite user manual</a>
                        </div>
                    </div>
                    <div className='col-6'>
                        <h4 style={{ marginBottom: '75px', fontSize: '30px', color: '#fff', textAlign: 'right'}}>Featured</h4>
                        <ul className='list-unstyled'>
                            <li style={{ marginBottom: '20px', textAlign: 'right'}}><a href='/support' style={{ fontSize: '24px', color: '#fff'}}>Current Takeovers and Delisting - January 2024</a></li>
                            <li style={{ marginBottom: '20px', textAlign: 'right'}}><a href='/support' style={{ fontSize: '24px', color: '#fff'}}>Latest intraday leverages - MIS & CO</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;