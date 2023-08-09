import { Preahvihear } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { TfiEmail } from 'react-icons/tfi'
import { FaGithub } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'
import Link from 'next/link'

const preahvihear = Preahvihear({
  subsets: ['latin'],
  weight: '400',
})

export default function Contacts() {
  return (
    <div className="w-full h-full flex flex-col gap-12 justify-center items-center">
      <h1 className={twMerge(preahvihear.className, 'text-3xl lg:text-5xl')}>
        Contacts
      </h1>
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-8 w-full">
        <div className="flex justify-between items-center gap-2">
          <TfiEmail className="h-8 w-8 lg:w-10 lg:h-10" />
          <p>matheus.kiyoshi.f@gmail.com</p>
        </div>
        <div>
          <Link
            href="https://github.com/matheus-kiyoshi"
            target="_blank"
            className="cursor-pointer hover:text-violet-600 flex justify-between items-center gap-2 transition-all duration-150"
          >
            <FaGithub className="h-8 w-8 lg:w-10 lg:h-10" />
            <p>/matheus-kiyoshi</p>
          </Link>
        </div>
        <div className="flex justify-between items-center gap-2">
          <RiWhatsappFill className="h-8 w-8 lg:w-10 lg:h-10 text-green-600" />
          <p>+55 (11) 97793-6452</p>
        </div>
      </div>
    </div>
  )
}
