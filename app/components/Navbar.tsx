'use client'
import React, { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NavMenuItems } from '../data/data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { michroma, unbounded } from '@/utils/fonts';


function Navbar() {

    const [menu, showMenu] = useState(false)
    return (
        <nav className={`grid place-items-center py-5 ${unbounded.className}`}>
            <div className='flex items-center justify-between w-[90vw]'>
                <Logo />
                <div className='md:flex text-base hidden '>
                    {
                        NavMenuItems.map((item, idx) => (
                            <Link key={idx} href={item.link} className='hover:cursor-pointer hover:font-semibold mx-10'>{item.name}</Link>
                        ))
                    }
                </div>
                <div className='hover:cursor-pointer p-1 md:hidden'>
                    <p onClick={() => showMenu(!menu)}>MENU</p>
                </div>
            </div>

            {
                menu && (
                    <motion.div initial={{ y: -150, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'easeIn', delay: .1 }} className='absolute h-screen w-screen md:hidden top-0 left-0 flex flex-col px-4 bg-lightGray text-darkGray dark:bg-darkGray dark:text-lightGray'>
                        <div className='flex justify-end py-4'>
                            <X onClick={() => showMenu(!menu)} className='text-darkGray dark:text-lightGray' />
                        </div>
                        <div className='flex flex-col text-2xl justify-center items-center '>
                            {
                                NavMenuItems.map((item, idx) => (
                                    <Link key={idx} href={item.link} onClick={() => showMenu(!menu)} className='hover:cursor-pointer hover:font-semibold my-5'>{item.name}</Link>
                                ))
                            }
                        </div>
                    </motion.div>
                )
            }
        </nav>
    )
}

export default Navbar