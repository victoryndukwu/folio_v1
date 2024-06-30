import React, {ReactNode} from 'react'
import { twMerge } from 'tailwind-merge'

type ContainerProps = {
    children: ReactNode
    className?: string
}

function Container({children, className}: ContainerProps) {
  return (
    <div className={twMerge('flex justify-center md:w-[80vw]', className)}>{children}</div>
  )
}

export default Container