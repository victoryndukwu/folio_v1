'use client'
import React, { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NavMenuItems } from '../data/data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { michroma, unbounded } from '@/utils/fonts';


function Navbar() {

    const [darkTheme, setDarkTheme] = useState(false)
    const [menu, showMenu] = useState(false)
    const handleDarkTheme = () => setDarkTheme(!darkTheme)


    return (
        <nav className={`grid place-items-center py-5 ${unbounded.className}`}>
            <div className='flex items-center justify-between w-[90vw]'>
                <Logo />
                <div className='md:flex text-darkGray text-base hidden '>
                    {
                        NavMenuItems.map((item, idx) => (
                            <Link key={idx} href={item.link} className='hover:cursor-pointer hover:font-semibold mx-10'>{item.name}</Link>
                        ))
                    }
                </div>
                <div className='hover:cursor-pointer p-1 border-black border rounded md:hidden'>
                    {/* {darkTheme ?
                        (<Sun onClick={handleDarkTheme} strokeWidth={1} />) :
                        (<Moon onClick={handleDarkTheme} strokeWidth={1} />)} */}
                    <Menu strokeWidth={1} onClick={() => showMenu(!menu)} />
                </div>
            </div>

            {
                menu && (
                    <div className='absolute bg-darkGray h-screen w-screen md:hidden top-0 left-0 flex px-4 justify-between'>
                        <div className='flex flex-col text-white text-2xl'>
                            {
                                NavMenuItems.map((item, idx) => (
                                    <Link key={idx} href={item.link} onClick={()=>showMenu(!menu)} className='hover:cursor-pointer hover:font-semibold my-5'>{item.name}</Link>
                                ))
                            }
                        </div>

                        <div className='flex justify-between py-4'>
                            <X color='#fff' onClick={() => showMenu(!menu)} />
                        </div>
                    </div>
                )
            }

        </nav>
    )
}

export default Navbar