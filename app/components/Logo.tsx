import Link from 'next/link'
import React from 'react'
import { michroma } from '../../utils/fonts'


function Logo() {
  return (
    <Link href='/' className={`hover:cursor-pointer ${michroma.className}`}>
      <div className='text-sm flex flex-col gap-[1px]'>
        <p className={`hover:cursor-pointer font-bold ${michroma}`}>VICTORY NDUKWU</p>
        <p className='text-xs'>FRONTEND ENGINEER</p>
      </div>
    </Link>
  )
}

export default Logo