import { StaticImageData } from 'next/image'
import CardImage from './CardImage'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

export default function Card({
  imageURL,
  reverse,
  siteLink,
}: {
  imageURL: StaticImageData
  reverse: boolean
  siteLink: string
}) {
  return (
    <div
      className={twMerge(
        'xl:w-[580px] w-5/6 flex justify-center items-center border-t-8 hover:border-0 hover:border-b-8 border-violet-950 cursor-pointer transition-all duration-200 z-10',
        reverse
          ? 'border-l-8 hover:border-r-8 rounded-tl-lg'
          : 'border-r-8 hover:border-l-8 rounded-tr-lg',
      )}
    >
      <Link href={siteLink} target="_blank">
        <CardImage imageURL={imageURL} />
      </Link>
    </div>
  )
}
