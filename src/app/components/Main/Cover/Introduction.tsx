import { Preahvihear } from 'next/font/google'
import LetterAnimation from './LetterAnimation'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { CVButton } from './CVButton'

const preahvihear = Preahvihear({
  subsets: ['latin'],
  weight: '400',
})

export default function Introduction() {
  const firstName = ['M', 'a', 't', 'h', 'e', 'u', 's']
  const secondName = ['K', 'i', 'y', 'o', 's', 'h', 'i']

  return (
    <div
      className={twMerge(
        preahvihear.className,
        'flex flex-col gap-12 justify-center items-center',
      )}
    >
      <h1 className="text-3xl md:text-5xl text-center">
        Olá, eu sou <br />
        <strong className="text-violet-600 text-4xl md:text-6xl font-semibold underline underline-offset-8">
          <LetterAnimation text={firstName} />{' '}
          <LetterAnimation text={secondName} />
        </strong>
      </h1>
      <div className="w-full flex justify-evenly items-center">
        <CVButton />
        <Link
          href="https://github.com/matheus-kiyoshi"
          target="_blank"
          className="cursor-pointer text-white bg-violet-600 hover:bg-transparent border-2 border-violet-600 shadow-md hover:text-violet-600 text-sm focus:ring-4 focus:ring-violet-300 font-medium rounded-lg py-2.5 px-5 flex justify-center items-center transition-all duration-150"
        >
          <p>GitHub</p>
        </Link>
      </div>
    </div>
  )
}
