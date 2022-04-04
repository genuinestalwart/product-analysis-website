import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='h-20 flex items-center justify-center'>
            <nav className='w-2/5'>
                <ul className='decoration-2 flex justify-evenly text-lg text-slate-500 underline underline-offset-4'>
                    <li className='decoration-indigo-400'><Link to='/'>Home</Link></li>
                    <li className='decoration-indigo-400'><Link to='/reviews'>Reviews</Link></li>
                    <li className='decoration-indigo-400'><Link to='/dashboard'>Dashboard</Link></li>
                    <li className='decoration-indigo-400'><Link to='/blogs'>Blogs</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;