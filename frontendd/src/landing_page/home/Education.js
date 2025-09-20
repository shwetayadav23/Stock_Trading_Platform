import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg'alt='education' style={{width: '80%'}}></img>
                </div>
                <div className='col-6 mt-5 p-4 ml-5'>
                    <h1 className='mb-5'>Free and open market education</h1>
                    <div>
                        <p style={{fontSize: '25px', color: '#7a667a'}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a className='mb-5' style={{fontSize: '25px', textDecoration: 'none'}} href='/varsity'>Varsity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                     <div>
                        <p className='mt-5'style={{fontSize: '25px', color: '#7a667a'}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a style={{fontSize: '25px', textDecoration: 'none'}}href='/trading'>TradingQ&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;