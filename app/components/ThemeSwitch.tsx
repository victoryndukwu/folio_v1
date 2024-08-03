'use client'
import React, { useState } from 'react'
import { Sun, Moon } from 'lucide-react';

function ThemeSwitch() {
    type Theme = 'light' | 'dark'
    const [theme, setTheme] = useState<Theme>('light')

    function handleTheme() {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <button className='fixed md:bottom-5 md:right-5 bottom-2 right-2 rounded-full p-4 shadow-lg animate-bounce'>
            {theme === 'light' ?
                (<Sun onClick={handleTheme} strokeWidth={1} />) :
                (<Moon onClick={handleTheme} strokeWidth={1} />)}
        </button>
    )
}

export default ThemeSwitch