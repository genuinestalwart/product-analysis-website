import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <header className='h-16 flex items-center justify-center'>
            <nav className='w-2/5'>
                <ul className='flex justify-evenly text-lg text-slate-500'>
                    <li><CustomLink to='/'>Home</CustomLink></li>
                    <li><CustomLink to='/reviews'>Reviews</CustomLink></li>
                    <li><CustomLink to='/dashboard'>Dashboard</CustomLink></li>
                    <li><CustomLink to='/blogs'>Blogs</CustomLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;