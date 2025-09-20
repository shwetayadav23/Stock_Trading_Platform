import React from 'react';

function NotFound() {
    return (  
        <div className='container p-5 mt-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5 mb-5'>404 Not Found</h1>
                <p className='mb-5' style={{color: '#7a667a', fontSize: '25px'}}>Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
    );
}

export default NotFound;