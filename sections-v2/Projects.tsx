import { useState } from 'react'
import type { ProjectCard as ProjectCardType } from '../types/global.js'
import { ProjectCards } from '../constants/constants.ts'
import { lazy, Suspense } from 'react'
const WorkCard = lazy(() => import('../components/WorkCard.tsx'))
import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion"
import { makeTextJitter } from '../components/TextJitter.tsx'
function ProjectCard({
  project,
  onOpen,
}: {
  project: ProjectCardType
  onOpen: () => void
}) {
  return <div className='flex flex-col w-full justify-between gap-2 mb-6'>
    <button
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      className='font-bold link justify-start text-base'
    >
      {project.name}
    </button>
    <span className='text-background/40 text-sm'>{project.simpleSummary}</span>
    <div className="flex flex-wrap items-center gap-1 ">
      {project.code.slice(0, 3).map((tag) => (
        <span
          key={tag}
          className="flex relative justify-start items-start font-bold  bg-white text-black gap-2 p-1 text-xs"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
}

const Projects = () => {
  const [selected, setSelected] = useState<ProjectCardType | null>(null)

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="border-t  border-accent/20">
        <div className="grid sm:grid-cols-3 items-start relative pt-10">
          <h2 className="text-accent max-sm:pb-5 sm:sticky top-10 uppercase flex flex-col  font-black text-base"><span className='flex'>{makeTextJitter("Projects", -10)}</span> <span className='text-xs text-background/40 font-light'>click a project name</span></h2>
          <div className="col-span-2 gap-4 grid sm:grid-cols-2">
            {ProjectCards.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
                onOpen={() => setSelected(project)}
              />
            ))}
          </div>
        </div>

        <Suspense fallback={null}>
          <AnimatePresence>
            {selected && <WorkCard key={selected.name} item={selected} onClose={() => setSelected(null)} />}
          </AnimatePresence>
        </Suspense>
      </div>
    </LazyMotion>
  )
}

export default Projects