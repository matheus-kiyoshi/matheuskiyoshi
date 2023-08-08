import { Preahvihear } from 'next/font/google'
import LetterAnimation from './LetterAnimation'

const preahvihear = Preahvihear({
  subsets: ['latin'],
  weight: '400',
})

export default function Introduction() {
  const firstName = ['M', 'a', 't', 'h', 'e', 'u', 's']
  const secondName = ['K', 'i', 'y', 'o', 's', 'h', 'i']

  return (
    <div className={preahvihear.className}>
      <h1 className="text-3xl md:text-5xl text-center">
        Olá, eu sou <br />
        <strong className="text-violet-600 text-4xl md:text-6xl font-semibold underline underline-offset-8">
          <LetterAnimation text={firstName} />{' '}
          <LetterAnimation text={secondName} />
        </strong>
      </h1>
      <p className="text-lg md:text-xl  text-center mt-8">
        Seja bem-vindo ao meu{' '}
        <strong className="text-violet-800 font-semibold">portfólio</strong>
      </p>
    </div>
  )
}
