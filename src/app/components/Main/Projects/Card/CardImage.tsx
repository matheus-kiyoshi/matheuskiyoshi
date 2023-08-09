import Image, { StaticImageData } from 'next/image'

export default function CardImage({ imageURL }: { imageURL: StaticImageData }) {
  return (
    <div className="w-full h-full">
      <Image src={imageURL} alt="Card Image" />
    </div>
  )
}
