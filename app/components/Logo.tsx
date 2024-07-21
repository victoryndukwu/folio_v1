import Link from 'next/link'
import React from 'react'


function Logo() {
  return (
    <Link href='/' className='hover:cursor-pointer'>
      <div className='text-sm flex flex-col gap-[1px]'>
        <p className='font-bold'>VICTORY NDUKWU</p>
        <p className='text-xs'>SOFTWAREf ENGINEER</p>
      </div>
    </Link>
  )
}

export default Logo