import  { useState } from 'react'
import type { ProjectCard as ProjectCardType } from '../types/global.js'
import { ProjectCards } from '../constants/constants.ts'
import WorkCard from '../components/WorkCard.tsx'

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
    <span className='text-white/40 text-sm'>{project.simpleSummary}</span>
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
    <div className="border-t  border-accent/20">
      <div className="grid sm:grid-cols-3 items-start relative pt-10">
        <h2 className="text-accent max-sm:pb-5 sm:sticky top-10 uppercase flex flex-col  font-black text-base">Projects <span className='text-xs text-white/40 font-light'>click a project name</span></h2>
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

      {selected && (
        <WorkCard item={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}

export default Projects