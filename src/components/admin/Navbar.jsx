import { UserButton } from '@clerk/clerk-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300'>
            <Link to='/' className="flex flex-row gap-2">
                <img src="https://i.postimg.cc/mDZvzcKn/add5bd76e80a208f85d556937ebe8abe.jpg" alt="logo" className='h-9 invert opacity-80' />
                <h2 className={`font-Outfit mt-1 hidden md:block lg:block text-xl  transition-all `}>TourNest BD</h2>
            </Link>
            <UserButton></UserButton>
        </div>
    );
};

export default Navbar;