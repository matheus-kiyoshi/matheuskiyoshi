export default function Description({ text }: { text: string }) {
  return (
    <p className="text-base md:text-xl lg:text-xl text-justify lg:p-8">
      {text}
    </p>
  )
}
