import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import type { Job } from '../types/global.js'
import { jobs } from '../constants/constants.ts'
import WorkCard from '../components/WorkCard.tsx'

function JobCard({ job, onOpen }: { job: Job; onOpen: () => void }) {
  return <div className='flex w-full justify-between gap-4 mb-6'>
    <div className="w-1/2">
      <div className=' text-sm'>{job.dateRange}</div>
      <div className="text-sm text-white/40">{job.location}</div>
    </div>
    <div className="flex font-bold w-full items-end flex-col gap-1">
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        className='link text-end justify-end flex w-full'
      >
        {job.role} @ {job.company}
      </button>
      <span className="text-sm text-white/40 font-normal lowercase text-end">{job.simpleSummary}</span>
      <div className="flex flex-wrap items-center gap-2 justify-end">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="flex relative justify-start items-start font-bold bg-white text-black gap-2 p-1 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
}

const WorkExperience = () => {
  const [selected, setSelected] = useState<Job | null>(null)

  return (
    <div className="border-t  border-accent/20">
      <div className="grid sm:grid-cols-3 items-start relative pt-10">
        <h2 className="text-accent max-sm:pb-5 sm:sticky top-10 uppercase flex flex-col  font-black text-base">Work Experience <span className='text-xs text-white/40 font-light'>click any experience</span></h2>
        <div className="col-span-2">
          {jobs.map((job) => (
            <JobCard
              key={`${job.company}-${job.dateRange}`}
              job={job}
              onOpen={() => setSelected(job)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <WorkCard
            key={selected.company}
            item={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default WorkExperience