import React from 'react';

const Header = () => {
    return (
        <header className='h-20 flex items-center justify-center'>
            <nav>
                <ul className='decoration-2 decoration-indigo-400 flex text-lg text-slate-500 underline underline-offset-4'>
                    <li className='mx-4'>Home</li>
                    <li className='mx-4'>Reviews</li>
                    <li className='mx-4'>Dashboard</li>
                    <li className='mx-4'>Blogs</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;