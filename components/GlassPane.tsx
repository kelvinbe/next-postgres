'use client'
import React from 'react'
import clsx from 'clsx'


const GlassPane = ({children, className}) => {
  return (
    <div className={clsx('glasssss rounded-2xl border-solid border-2 border-gray-200', className)}>
        
        {children}
        
        </div>
  )
}

export default GlassPane