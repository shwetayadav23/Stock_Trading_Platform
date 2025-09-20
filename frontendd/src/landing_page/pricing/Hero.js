import React from 'react';

function Hero() {
    return (
        <div className='container mt-5 p-5 mb-5'>
            <div className='row mt-5'>
                <h1 className='text-center mt-5 p-3' style={{ fontSize: '3rem' }}>Charges</h1>
                <p className='text-center text-muted' style={{ fontSize: '1.5rem' }}>List of all charges and taxes</p>
            </div>

            <div className="row justify-content-center text-center" style={{marginTop: '300px'}}>
                <div className="col-md-4 mb-5">
                    <img src="/media/images/pricingEquity.svg" alt="Equity" className="mb-3" style={{ width: "120px" }} />
                    <h3 className="fw-bold">Free equity delivery</h3>
                    <p className="text-muted">
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>

                <div className="col-md-4 mb-5">
                    <img src="/media/images/intradayTrades.svg" alt="Trades" className="mb-3" style={{ width: "120px" }} />
                    <h3 className="fw-bold">Intraday and F&O trades</h3>
                    <p className="text-muted">
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across
                        equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>

                <div className="col-md-4 mb-5">
                    <img src="/media/images/pricingMF.svg" alt="MF" className="mb-3" style={{ width: "120px" }} />
                    <h3 className="fw-bold">Free direct MF</h3>
                    <p className="text-muted">
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Hero;