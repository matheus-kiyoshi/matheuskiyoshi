export default function Designation({ text }: { text: string }) {
  return (
    <p className="text-sm md:text-base lg:text-lg text-start opacity-90 lg:pl-8">
      {text}
    </p>
  )
}
