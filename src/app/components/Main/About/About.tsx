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
        <Designation text="Atualmente, estudante de Desenvolvimento de Sistemas na ETEC" />
      </div>
      <div className="w-3/4 lg:w-[896px]">
        <Description
          text="A self-taught UI/UX designer, functioning in the industry for 3+ years
      now. I make meaningful and delightful digital products that create an
      equilibrium between user needs and business goals."
        />
      </div>
    </div>
  )
}
