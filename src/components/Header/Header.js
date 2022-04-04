import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='h-20 flex items-center justify-center'>
            <nav>
                <ul className='decoration-2 decoration-indigo-400 flex text-lg text-slate-500 underline underline-offset-4'>
                    <li className='mx-4'><Link to='/'>Home</Link></li>
                    <li className='mx-4'><Link to='/reviews'>Reviews</Link></li>
                    <li className='mx-4'><Link to='/dashboard'>Dashboard</Link></li>
                    <li className='mx-4'><Link to='/blogs'>Blogs</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;