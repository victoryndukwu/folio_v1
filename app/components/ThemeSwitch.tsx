'use client'
import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

function ThemeSwitch() {
    type Theme = 'light' | 'dark'
    const [theme, setTheme] = useState<Theme>('light')

    function handleTheme() {
        if (theme === 'light') {
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            setTheme('light')
            localStorage.setItem('theme', 'light')
        }
    }

    useEffect(() => {
        const themeStorage = localStorage.getItem('theme')
        if (themeStorage === 'dark')
            setTheme('dark')
        else {
            setTheme('light')
        }
    }, [])

    return (
        <motion.button initial={{opacity:0}} animate={{opacity:1}}  transition={{
            delay: 3,
            duration: 1,
            type: "easeIn"
        }} className={`fixed bottom-10 right-5 rounded-full bg-darkGray p-4 shadow-lg ${theme === 'dark' && 'bg-lightGray'}`} onClick={handleTheme}>
            {theme === 'light' ?
                (<Sun strokeWidth={1} className='text-lightGray' />) :
                (<Moon strokeWidth={1} className='text-darkGray' />)}
        </motion.button>
    )
}

export default ThemeSwitch