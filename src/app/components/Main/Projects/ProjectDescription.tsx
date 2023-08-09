export default function ProjectDescription({
  description,
}: {
  description: string
}) {
  return (
    <div className="bg-gray-400 bg-opacity-30 p-6 rounded-lg">
      <p className="text-justify text-lg">{description}</p>
    </div>
  )
}
