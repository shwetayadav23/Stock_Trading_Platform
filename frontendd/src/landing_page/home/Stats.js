import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-6'>
                    <h2 className='mb-5 tshh'>Trust with confidence</h2>
                    <div className='mb-5'>
                        <h3 className='tsh'>Customer-first always</h3>
                        <p className='ts'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>

                    <div className='mb-5'>
                        <h3 className='tsh'>No spam or gimmicks</h3>
                        <p className='ts'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>

                    <div className='mb-5'>
                        <h3 className='tsh'>The Zerodha universe</h3>
                        <p className='ts'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>

                    <div className='mb-5'>
                        <h3 className='tsh'>Do better with money</h3>
                        <p className='ts'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className='col-6'>
                    <img src='media/images/ecosystem.png' alt='Zerodha Ecosystem' style={{height: '86%'}}/>
                    <div className='text-center'>
                        <a href='/' className='mx-5 fs-4' style={{textDecoration: 'none'}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='//' className='fs-4' style={{textDecoration: 'none'}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;