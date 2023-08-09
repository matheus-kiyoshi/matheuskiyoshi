'use client'
import { useState } from 'react'

export const IconRoot = ({
  children,
  name,
}: {
  children: React.ReactNode
  name: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div
      className="w-20 h-20 bg-zinc-800 rounded-sm cursor-pointer flex justify-center items-center hover:-translate-y-2 transition-all duration-300"
      onClick={handleClick}
    >
      {!isOpen && children}
      {isOpen && (
        <p className="text-zinc-100 text-sm text-center cursor-pointer transition-all duration-200">
          {name}
        </p>
      )}
    </div>
  )
}
