import React from 'react';
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='flex w-full h-[5vh] items-center gap-2 capitalize justify-center font-roboto text-white'>
            made with <FaHeart className='text-red-600' /> by Hritik Sharma
        </div>
    )
}

export default Footer
