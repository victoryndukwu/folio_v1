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
        if (themeStorage) {
            setTheme(themeStorage)
            if (themeStorage === 'dark') {
                document.documentElement.classList.add('dark')
            } else {
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
        <motion.button 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{
                delay: 1,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
            }} 
            className={`fixed outline-none bottom-10 right-5 md:right-10 rounded-full text-darkGray bg-white/80 dark:bg-white/10 dark:text-white border border-black/10 dark:border-white/10 p-3 shadow-lg hover:shadow-xl dark:shadow-none backdrop-blur-md hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden flex items-center justify-center`} 
            onClick={handleTheme}
            aria-label="Toggle Theme"
        >
            <div className="relative w-6 h-6 flex items-center justify-center">
                <motion.div
                    initial={false}
                    animate={{ 
                        rotate: theme === 'dark' ? 180 : 0,
                        scale: theme === 'dark' ? 0 : 1,
                        opacity: theme === 'dark' ? 0 : 1
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Sun strokeWidth={2.5} size={20} />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{ 
                        rotate: theme === 'light' ? -180 : 0,
                        scale: theme === 'light' ? 0 : 1,
                        opacity: theme === 'light' ? 0 : 1
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Moon strokeWidth={2.5} size={20} />
                </motion.div>
            </div>
        </motion.button>
    )
}

export default ThemeSwitch