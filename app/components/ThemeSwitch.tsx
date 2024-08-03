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
            document.documentElement.classList.add('dark')
        } else {
            setTheme('light')
            localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
        }
    }

    useEffect(() => {
        const themeStorage = localStorage.getItem('theme') as Theme | null;
        if (themeStorage){
            setTheme(themeStorage)
            if ( themeStorage === 'dark'){
                document.documentElement.classList.add('dark')
            } else{
                document.documentElement.classList.remove('dark')
            }
        }
        else if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])

    return (
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{
            delay: 3,
            duration: 1,
            type: "easeIn"
        }} className={`fixed bottom-10 right-5 rounded-full text-darkGray bg-white p-3 shadow-2xl dark:shadow-lightGray dark:bg-darkGray bg-opacity-80 backdrop-blur-[0.5] transition-all`} onClick={handleTheme}>
            {theme === 'light' ?
                (<Sun strokeWidth={2} className='text-darkGray' />) :
                (<Moon strokeWidth={2} className='text-white' />)}
        </motion.button>
    )
}

export default ThemeSwitch