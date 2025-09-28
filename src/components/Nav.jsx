import React from 'react'
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa6";

const Nav = () => {
    return (
        <nav className='w-full flex h-[10vh] items-center justify-between bg-transparent py-9'>
            <div className="w-[90%] mx-auto flex items-center justify-between">
            <h1 className="text-md sm:text-lg md:text-2xl lg:text-3xl font-bold text-white font-serif capitalize">vowel counter</h1>
            <Button className='bg-gradient-to-r from-[#9363ff] via-[#c1a6ff] to-[#f5f0ff] rounded-3xl py-7 capitalize sm:text-sm md:text-md lg:text-lg hover:scale-[1.1] transition ease-in duration-400 font-bold'>
                explore more <span className="hidden lg:block">projects</span>
                <FaArrowRight />
            </Button>
            </div>
        </nav>
    )
}

export default Nav
