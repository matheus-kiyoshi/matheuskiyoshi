import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { BigGradient } from './BigGradient'
import Card from './Card/Card'
import { StaticImageData } from 'next/image'
import ProjectTitle from './ProjectTitle'
import ProjectDescription from './ProjectDescription'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type ProjectProps = {
  FirstProject?: boolean
  imageURL: StaticImageData
  title: string
  description: string
  githubLink: string
  siteLink: string
  reverse?: boolean
}

export default function Projects({
  FirstProject,
  imageURL,
  title,
  description,
  githubLink,
  siteLink,
  reverse = false,
}: ProjectProps) {
  return (
    <>
      {FirstProject && <h2 className="text-5xl font-bold z-10">Projetos</h2>}
      <div
        className={twMerge(
          'flex flex-col gap-5 lg:gap-0 justify-evenly lg:justify-center items-center',
          reverse
            ? 'lg:flex-row-reverse lg:ml-28 lg:mr-8'
            : 'lg:flex-row lg:mr-28 lg:ml-8',
        )}
      >
        <div className="flex justify-center items-center lg:h-full lg:w-6/12">
          <BigGradient />
          <Card imageURL={imageURL} reverse={reverse} siteLink={siteLink} />
        </div>
        <div className="flex flex-col gap-8 w-5/6 lg:w-6/12 z-10">
          <div>
            <p className="text-start text-sm lg:text-base font-semibold text-violet-600">
              Projeto em Destaque
            </p>
            <ProjectTitle title={title} />
          </div>
          <ProjectDescription description={description} />
          <div
            className={twMerge(
              'flex items-center gap-8 pl-4',
              reverse ? 'lg:justify-start' : 'lg:justify-end',
            )}
          >
            <Link href={githubLink} target="_blank">
              <FaGithub className="w-8 h-8 cursor-pointer hover:text-violet-600 hover:w-10 hover:h-10 transition-all duration-200" />
            </Link>
            <Link href={siteLink} target="_blank">
              <FiExternalLink className="w-8 h-8 cursor-pointer hover:text-violet-600 hover:w-10 hover:h-10 transition-all duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
