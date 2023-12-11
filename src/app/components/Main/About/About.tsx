import { Preahvihear } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import Title from './Title'
import Designation from './Designation'
import Description from './Description'

const preahvihear = Preahvihear({
  subsets: ['latin'],
  weight: '400',
})

export default function About() {
  return (
    <div
      className={twMerge(
        preahvihear.className,
        'flex flex-col gap-20 justify-center items-center',
      )}
    >
      <div className="w-3/4 lg:w-[896px]">
        <Title />
        <Designation text="Atualmente, estudando Análise e Desenvolvimento de Sistemas" />
      </div>
      <div className="w-3/4 lg:w-[896px]">
        <Description text="Um desenvolvedor buscando aprimorar suas habilidades e aprender novas tecnologias. Meu objetivo com a programação é criar experiências digitais envolventes e memoráveis. Busco constantemente aprender e evoluir, atualmente sou autodidata na programação, se não sei, aprendo. Tenho experiência em desenvolvimento web com a stack MERN." />
      </div>
    </div>
  )
}
