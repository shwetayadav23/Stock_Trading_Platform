import React from 'react';

function Universe() {
    return ( 
        <div className='container'>
            <div className='row'>
                <h1 className='text-center mt-5'>The Zerodha Universe</h1>
                <p className='text-center mt-4' style={{fontSize: '1.5rem'}}>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 mt-5'>
                    <div className='mb-5'>
                        <img className='text-center mt-5 mb-4'src='media/images/zerodhaFundhouse.png' alt='Fundhouse' style={{width: '65%'}}></img>
                        <p style={{fontSize: '1.1rem'}}>Our asset management venture <br/>that is creating simple and transparent index <br/>funds to help you save for your goals.</p>
                    </div>
                    <div className='mt-5'>
                        <img className='text-center mt-5 mb-3'src='media/images/streakLogo.png' alt='Streak' style={{width: '65%'}}></img>
                        <p style={{fontSize: '1.1rem'}}>Systematic trading platform <br/>that allows you to create and backtest <br/>strategies without coding.</p>
                    </div>
                </div>
                <div className='col-4 mt-5'>
                    <div className='mb-5'>
                        <img className='text-center mt-5 mb-5'src='media/images/sensibullLogo.svg' alt='Sensibull' style={{width: '65%', marginLeft: '50px'}}></img>
                        <p style={{fontSize: '1.1rem', marginLeft: '50px'}}>Options trading platform that lets you<br/> create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    </div>
                    <div className='mt-5'>
                        <img className='text-center mt-5 mb-4'src='media\images\smallcaseLogo.png' alt='Smallcase' style={{width: '65%', marginLeft: '50px'}}></img>
                        <p style={{fontSize: '1.1rem', marginLeft: '50px'}}>Thematic investing platform <br/>that helps you invest in diversified <br/>baskets of stocks on ETFs.</p>
                    </div>
                </div>
                <div className='col-4 mt-5 mb-5'>
                    <div className='mb-5'>
                        <img className='text-center mt-5' src='media\images\tijori.svg' alt='Tijori' style={{width: '65%', marginLeft: '100px'}}></img>
                        <p style={{fontSize: '1.1rem', marginLeft: '100px'}}>Investment research platform <br/>that offers detailed insights on stocks, <br/>sectors, supply chains, and more.</p>
                    </div>
                    <div className='mt-5'>
                        <img className='text-center mt-4 mb-3'src='media/images/dittoLogo.png' alt='Ditto' style={{width: '65%', marginLeft: '100px'}}></img>
                        <p style={{fontSize: '1.1rem', marginLeft: '100px', marginTop: '25px'}}>Personalized advice on life <br/>and health insurance. No spam<br/> and no mis-selling.</p>
                    </div>
                </div>
                <div className='text-center' style={{marginBottom: '100px'}}>
                    <button className='btn btn-primary p-3 fs-5 mt-5 mb-5 button' style={{width: '20%', margin: "0 auto"}}>Sign up for free</button>
                </div>
            </div>
        </div>
    );
}

export default Universe;