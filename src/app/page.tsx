import About from './components/Main/About/About'
import Contacts from './components/Main/Contacts/Contacts'
import Cover from './components/Main/Cover/Cover'
import Projects from './components/Main/Projects/Projects'
import Technologies from './components/Main/Technologies/Technologies'
import card1 from '@/../public/card1.png'
import card3 from '@/../public/card3.png'

export default function Home() {
  return (
    <main className="w-screen top-20 md:top-20 xl:top-12 2xl:top-10 relative flex flex-col justify-center items-center overflow-x-hidden">
      <article
        id="home"
        className="w-screen h-screen flex justify-center items-center overflow-x-hidden"
      >
        <Cover />
      </article>
      <div className="flex flex-col justify-center items-center gap-56 sm:gap-40 xl:gap-32">
        <article
          id="about"
          className="w-screen flex justify-center items-center"
        >
          <About />
        </article>
        <div className="flex flex-col justify-center items-center gap-56 sm:gap-28 lg:gap-32">
          <article
            id="technologies"
            className="w-3/4 sm:h-96 flex flex-col gap-5 justify-evenly items-center z-10"
          >
            <Technologies />
          </article>
          <article
            id="projects"
            className="w-screen flex flex-col justify-center items-center gap-12"
          >
            <Projects
              FirstProject
              imageURL={card3}
              title="Incognito Social"
              description="Rede social anônima para compartilhar suas experiências, posts, anúncios e muito mais. Projeto fullstack feito usando Node.js, React e MongoDB."
              githubLink="https://github.com/matheus-kiyoshi/incognito-social"
              siteLink="https://incognito-social-media.vercel.app"
              reverse
            />
          </article>
          <article className="w-screen flex flex-col justify-center items-center gap-12">
            <Projects
              imageURL={card1}
              title="Budgets"
              description="Site de gerenciamento de custos e planejamentos, você pode realizar orçamentos, adicionar, editar e deletar projetos e serviços."
              githubLink="https://github.com/matheus-kiyoshi/budgets"
              siteLink="https://budgetsmk.vercel.app"
            />
          </article>
          <article
            id="contacts"
            className="w-screen flex justify-center items-center mb-20"
          >
            <Contacts />
          </article>
        </div>
      </div>
    </main>
  )
}
