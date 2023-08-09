'use client'
import { useState } from 'react'
import HamburguerMenu from './HamburguerMenu/HamburguerMenu'
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher'
import Topics from './Topics'
import '@/app/globals.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className="w-screen h-28 bg__header dark:bg-red text-white fixed top-0 block z-20 overflow-x-hidden">
        <div className="w-full h-full flex items-center justify-evenly z-20">
          <ThemeSwitcher />
          <HamburguerMenu onClick={handleClick} />
          <div className="hidden md:block z-20">
            <Topics
              topics={[
                'Home',
                'Sobre Mim',
                'Tecnologias',
                'Projetos',
                'Contato',
              ]}
            />
          </div>
        </div>
      </header>
      {isOpen && (
        <nav className="w-full h-screen bg__header py-6 fixed z-20 top-28 block md:hidden">
          <Topics
            topics={['Home', 'Sobre Mim', 'Tecnologias', 'Projetos', 'Contato']}
          />
        </nav>
      )}
    </>
  )
}
