import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png'alt='hero' className='mb-5'></img>
                <h1 className='mt-5 mb-3'>Invest in everything</h1>
                <p className='mb-5' style={{color: '#424251', fontSize: '30px'}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary p-2 fs-5 mb-5 button' style={{width: '20%', margin: "0 auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;<h1>Hero Section</h1>