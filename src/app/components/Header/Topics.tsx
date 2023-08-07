import Topic from './Topic'

export default function Topics({ topics }: { topics: string[] }) {
  return (
    <ul className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-10 text-xl font-semibold">
      {topics.map((topic) => (
        <Topic key={topic} text={topic} />
      ))}
    </ul>
  )
}
