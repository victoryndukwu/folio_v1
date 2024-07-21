'use client'
import React, { useState } from 'react'
import { Sun, Moon, Menu } from 'lucide-react';
import Logo from './Logo';
import { NavMenuItems } from '../data/data';
import Link from 'next/link';
import { motion } from 'framer-motion';


function Navbar() {

    const [darkTheme, setDarkTheme] = useState(false)
    const handleDarkTheme = () => setDarkTheme(!darkTheme)

    return (
        <nav className='grid place-items-center py-5'>
            <div className='flex items-center justify-between w-[90vw]'>
                <Logo />
                <div className='md:flex text-darkGray text-base hidden '>
                    {
                        NavMenuItems.map((item, idx) => (
                            <Link key={idx} href={item.link} className='hover:cursor-pointer mx-10'>{item.name}</Link>
                        ))
                    }
                </div>
                <div className='hover:cursor-pointer p-1 border-black border rounded'>
                    {/* {darkTheme ?
                        (<Sun onClick={handleDarkTheme} strokeWidth={1} />) :
                        (<Moon onClick={handleDarkTheme} strokeWidth={1} />)} */}
                    <Menu strokeWidth={1} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar