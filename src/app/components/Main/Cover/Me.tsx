'use client'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import { Elipse, Gradient } from './Gradient'
import memoji from '@/../public/memoji.png'

export default function Me() {
  return (
    <div className="flex justify-center items-center">
      <Gradient />
      <Tilt className="flex justify-center items-center">
        <Elipse />
        <Tilt tiltReverse>
          <figure className="z-10">
            <Image src={memoji} alt="Memoji" width={165} height={223} />
          </figure>
        </Tilt>
      </Tilt>
    </div>
  )
}
