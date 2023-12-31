import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpring,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { twMerge } from 'tailwind-merge'
import { IconRoot } from './IconRoot'
import { FaJava } from 'react-icons/fa'
import { IoPrism } from 'react-icons/io5'

export default function Technologies() {
  const iconPatternStyle =
    'w-16 h-16 cursor-pointer text-zinc-500 transition-all duration-300'

  return (
    <>
      <h2 className="text-5xl text-violet-500 font-bold">Tecnologias</h2>
      <div className="flex flex-wrap justify-center items-center gap-10">
        <IconRoot name="Javascript">
          <SiJavascript
            className={twMerge(iconPatternStyle, 'hover:text-yellow-500')}
          />
        </IconRoot>
        <IconRoot name="React">
          <SiReact
            className={twMerge(iconPatternStyle, 'hover:text-blue-400')}
          />
        </IconRoot>
        <IconRoot name="Typescript">
          <SiTypescript
            className={twMerge(iconPatternStyle, 'hover:text-blue-600')}
          />
        </IconRoot>
        <IconRoot name="Next.js">
          <SiNextdotjs
            className={twMerge(iconPatternStyle, 'hover:text-zinc-300')}
          />
        </IconRoot>
        <IconRoot name="HTML5">
          <SiHtml5
            className={twMerge(iconPatternStyle, 'hover:text-orange-500')}
          />
        </IconRoot>
        <IconRoot name="CSS3">
          <SiCss3
            className={twMerge(iconPatternStyle, 'hover:text-blue-500')}
          />
        </IconRoot>
        <IconRoot name="TailwindCSS">
          <SiTailwindcss
            className={twMerge(iconPatternStyle, 'hover:text-blue-500')}
          />
        </IconRoot>
        <IconRoot name="Styled Components">
          <SiStyledcomponents
            className={twMerge(iconPatternStyle, 'hover:text-zinc-300')}
          />
        </IconRoot>
        <IconRoot name="Node.js">
          <SiNodedotjs
            className={twMerge(iconPatternStyle, 'hover:text-green-400')}
          />
        </IconRoot>
        <IconRoot name="NestJS">
          <SiNestjs
            className={twMerge(iconPatternStyle, 'hover:text-red-500')}
          />
        </IconRoot>
        <IconRoot name="Java">
          <FaJava
            className={twMerge(iconPatternStyle, 'hover:text-blue-400')}
          />
        </IconRoot>
        <IconRoot name="Java Spring">
          <SiSpring
            className={twMerge(iconPatternStyle, 'hover:text-green-500')}
          />
        </IconRoot>
        <IconRoot name="PostgreSQL">
          <SiPostgresql
            className={twMerge(iconPatternStyle, 'hover:text-blue-600')}
          />
        </IconRoot>
        <IconRoot name="MongoDB">
          <SiMongodb
            className={twMerge(iconPatternStyle, 'hover:text-green-500')}
          />
        </IconRoot>
        <IconRoot name="Prisma ORM">
          <IoPrism
            className={twMerge(iconPatternStyle, 'hover:text-green-500')}
          />
        </IconRoot>
      </div>
    </>
  )
}
