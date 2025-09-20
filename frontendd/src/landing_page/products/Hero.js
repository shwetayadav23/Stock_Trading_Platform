import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center p-5 mb-5 border-bottom'>
            <div className='row mb-5'>
                <h1 className='mt-5 p-4'>Zerodha Products</h1>
                <h3 className='text-muted mb-3'>Sleek, modern, and intuitive trading platforms</h3>
                <p className='fs-4 mb-5 pb-5'>Check out our <a href='/offers' style={{textDecoration: 'none'}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
    );
}

export default Hero;