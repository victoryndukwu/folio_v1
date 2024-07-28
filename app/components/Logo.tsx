import Link from 'next/link'
import React from 'react'
import { michroma } from '../../utils/fonts'


function Logo() {
  return (
    <Link href='/' className={`hover:cursor-pointer ${michroma.className}`}>
      <div className='flex flex-col gap-[1px]'>
        <p className={`hover:cursor-pointer font-bold ${michroma} text-[10px]`}>VICTORY NDUKWU</p>
        <p className='text-[10px]'>FRONTEND ENGINEER</p>
      </div>
    </Link>
  )
}

export default Logo