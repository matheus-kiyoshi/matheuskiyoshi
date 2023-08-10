import Topic from './Topic'

type TopicProps = {
  name: string
  id: string
}

type TopicsProps = {
  topics: TopicProps[]
}

export default function Topics({ topics }: TopicsProps) {
  return (
    <ul className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-10 text-xl font-semibold">
      {topics.map((topic) => (
        <Topic key={topic.name} name={topic.name} id={topic.id} />
      ))}
    </ul>
  )
}
