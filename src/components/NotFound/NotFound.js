import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='py-16 text-center'>
            <h1 className='font-medium my-16 text-5xl text-slate-600'><span className='text-red-400'>Error 404</span> - Page Not Found!</h1>
            <h2 className='font-medium my-12 text-4xl text-slate-500'>Back to <Link className='decoration-indigo-400 decoration-2 text-indigo-500 underline underline-offset-8' to='/'>main page</Link></h2>
        </div>
    );
};

export default NotFound;