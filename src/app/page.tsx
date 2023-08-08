import About from './components/Main/About/About'
import Cover from './components/Main/Cover/Cover'

export default function Home() {
  return (
    <main className="w-screen top-32 md:top-20 xl:top-12 2xl:top-10 relative flex flex-col justify-center items-center">
      <article className="w-screen h-screen flex justify-center items-center">
        <Cover />
      </article>
      <article className="w-screen flex justify-center items-center">
        <About />
      </article>
      <article className="w-screen h-screen flex justify-center items-center">
        <Cover />
      </article>
      <article className="w-screen h-screen flex justify-center items-center">
        <Cover />
      </article>
      <article className="w-screen h-screen flex justify-center items-center">
        <Cover />
      </article>
      <article className="w-screen h-screen flex justify-center items-center">
        <Cover />
      </article>
    </main>
  )
}
