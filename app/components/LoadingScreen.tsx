'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function LoadingScreen() {

    const [visible, setVisible] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => { setVisible(false); }, 3000);
        return () => clearTimeout(timer)
    }, [])

    return (
        <motion.main className={`fixed inset-0 grid place-items-center text-center bg-darkGray text-lightGray ${visible ? '' : 'hidden'}`}>            <div className='flex flex-col'>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'easeIn', delay: .5 }} className='text-4xl'>VICTORY</motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'easeIn', delay: 1 }} className='text-4xl'>NDUKWU</motion.p>
        </div>
        </motion.main>
    )
}

export default LoadingScreen