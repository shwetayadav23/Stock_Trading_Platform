import React from 'react';

function RightSection({productName, productDesc, learnMore, imageURL}) {
    return ( 
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-4 p-5 mt-5 mr-5'>
                    <h1 className='mb-4'>{productName}</h1>
                    <p style={{fontSize: '1.5rem'}}>{productDesc}</p>
                    <div>
                        <a href='{learnMore}' style={{marginLeft: '50px', fontSize: '1.5rem', textDecoration: 'none'}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col-2 p-5'></div>
                <div className='col-6 pr-5 mt-5'>
                    <img src={imageURL} style={{width: '100%', height: 'auto'}} alt={productName} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;