import About from './components/Main/About/About'
import Contacts from './components/Main/Contacts/Contacts'
import Cover from './components/Main/Cover/Cover'
import Projects from './components/Main/Projects/Projects'
import Technologies from './components/Main/Technologies/Technologies'
import card1 from '@/../public/card1.png'
import card2 from '@/../public/card2.png'

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
            className="w-3/4 h-96 flex flex-col gap-5 justify-evenly items-center z-10"
          >
            <Technologies />
          </article>
          <article
            id="projects"
            className="w-screen flex flex-col justify-center items-center gap-12"
          >
            <Projects
              FirstProject
              imageURL={card1}
              title="Game Room"
              description="Plataforma de minigames e jogos, desenvolvida com ReactJS, Typescript e TailwindCSS, feita para testar conhecimentos em novas tecnologias, site responsivo com tailwind e com uso de iFrames no react e componentes com Styled-Components, além da lógica feita no jogo da velha."
              githubLink="https://github.com/matheus-kiyoshi/game-room"
              siteLink="https://game-room-three.vercel.app"
              reverse
            />
          </article>
          <article className="w-screen flex flex-col justify-center items-center gap-12">
            <Projects
              imageURL={card2}
              title="Conversor de Moedas"
              description="Site criado com ReactJS, Typescript e TailwindCSS, onde o usuário pode realizar a conversão de diversos valores, como o dólar, real, euro, libra e etc. Conta com Dark mode e modal em caso de erro na conversão."
              githubLink="https://github.com/matheus-kiyoshi/game-room"
              siteLink="https://game-room-three.vercel.app"
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
