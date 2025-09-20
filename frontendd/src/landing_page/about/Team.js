import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row'>
                <h1 className='text-center'>People
                </h1>
            </div>

            <div className='row p-5'>
                <div className='col-6 p-5 text-center'>
                    <img src='media/images/nithinKamath.jpg' alt='Nithin Kamath' style={{borderRadius: '100%', width: '70%'}} />
                    <h4 className='mt-5 mb-3'>Nithin Kamath</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className='col-6 mt-5 p-5'>
                    <p className='fs-4' style={{lineHeight: '1.8'}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p  className='fs-4' style={{lineHeight: '1.8'}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p className='fs-4' style={{lineHeight: '1.8'}}>Playing basketball is his zen.</p>
                    <p className='fs-4' style={{lineHeight: '1.8'}}>Connect on <a href='' style={{textDecoration: 'none'}}>Homepage</a> / <a href='' style={{textDecoration: 'none'}}>TradingQnA</a> / <a href='' style={{textDecoration: 'none'}}>Twitter</a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;