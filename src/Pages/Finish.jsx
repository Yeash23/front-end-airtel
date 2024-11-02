import React from 'react';
import { Link } from 'react-router-dom';

const Finish = () => {
    return (
        <div className='text-center mt-9'>
            <h1 className='text-blue-500 font-bold text-8xl'> Thank You For Login </h1>
            <Link to="/">
            <button className='bg-black text-white p-5 text-5xl mt-8'> 
                Go Back 
            </button>
            </Link>
        </div>
    );
};

export default Finish;