'use client'
import { TypeAnimation } from 'react-type-animation'

export default function Title() {
  return (
    <p className="text-3xl md:text-5xl text-start lg:text-start lg:pl-8">
      <TypeAnimation
        sequence={['Sou um Desenvolvedor Front-End.', 1500, 'Sou um ', 1500]}
        repeat={Infinity}
        speed={30}
      />
    </p>
  )
}
