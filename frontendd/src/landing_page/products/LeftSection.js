import React from 'react';

function LeftSection({imageURL, productName, productDesc, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6 pr-5 mt-5'>
                    <img src={imageURL} style={{width: '100%', height: 'auto'}} alt={productName} />
                </div>
                <div className='col-2 p-5'></div>
                <div className='col-4 p-5 mt-5 mr-5'>
                    <h1 className='mb-4'>{productName}</h1>
                    <p style={{fontSize: '1.5rem'}}>{productDesc}</p>
                    <div>
                        <a href='{tryDemo}' style={{fontSize: '1.5rem', textDecoration: 'none'}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='{learnMore}' style={{marginLeft: '50px', fontSize: '1.5rem', textDecoration: 'none'}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div>
                        <a href='{googlePlay}'><img className='mt-5' style={{width: '130px'}} src='media/images/googlePlayBadge.svg' alt='Google Play'/></a>
                        <a href='{appStore}'><img className='mt-5' style={{marginLeft: '50px', width: '130px'}} src='media/images/appStoreBadge.svg' alt='App Store'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;