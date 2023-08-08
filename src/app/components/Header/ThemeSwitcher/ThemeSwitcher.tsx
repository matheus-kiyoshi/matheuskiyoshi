'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'
import styles from './ThemeSwitcher.module.css'
import { twMerge } from 'tailwind-merge'

const ThemeSwitcher = () => {
  const [mount, setMount] = useState(false)
  const { theme, setTheme } = useTheme()
  let change = styles.change

  useEffect(() => {
    setMount(true)
  }, [])

  if (!mount) {
    return null
  }

  function changeTheme() {
    setTimeout(() => {
      change = ''
    }, 300)
    change = styles.change
  }

  return (
    <div>
      <button
        type="button"
        className={twMerge(
          'w-16 h-16 rounded-full flex justify-center align-center hover:opacity-80',
          styles.btn,
          theme === 'dark' && styles.shadow__dark,
          theme === 'system' && styles.shadow__dark,
          theme === 'light' && styles.shadow__light,
        )}
        aria-label="Toggle dark mode"
        onClick={() => {
          if (theme === 'light') {
            setTheme('dark')
          } else {
            setTheme('light')
          }
          changeTheme()
        }}
      >
        <div className="flex justify-center items-center w-full h-full">
          {theme === 'system' && (
            <FaSun className={twMerge('text-white text-4xl', change)} />
          )}
          {theme === 'dark' && (
            <FaSun className={twMerge('text-white text-4xl', change)} />
          )}
          {theme === 'light' && (
            <FaMoon className={twMerge('text-black text-4xl', change)} />
          )}
        </div>
      </button>
    </div>
  )
}

export default ThemeSwitcher
