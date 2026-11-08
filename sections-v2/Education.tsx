import React from 'react'

type Course = { code: string; name: string }
type CourseGroup = { category: string; courses: Course[] }

const courseworkGroups: CourseGroup[] = [
  {
    category: 'Computer Science',
    courses: [
      { code: 'CSC 225/226', name: 'Data Structures & Algorithms' },
      { code: 'CSC 360', name: 'Operating Systems' },
      { code: 'SENG 365', name: 'Software Systems Development' },
      { code: 'SENG 265', name: 'Software Development Methods' },
      { code: 'CSC 321', name: 'Introduction to Artificial Intelligence' },
      { code: 'CSC 230', name: 'Computer Architecture' },
    ],
  },
  {
    category: 'Math & Stats',
    courses: [
      { code: 'MATH 122', name: 'Discrete Math' },
      { code: 'STAT 260', name: 'Probability & Statistics I' },
    ],
  },
]

function CourseGroupRow({ group }: { group: CourseGroup }) {
  return (
    <div className='flex w-full justify-between gap-4 mb-6'>
      <div className="w-1/2">
        <div className='text-sm font-black'>{group.category}</div>
      </div>
      <ul className="flex font-bold w-full items-end flex-col gap-2">
        {group.courses.map((course) => (
          <li key={course.code} className="flex flex-col items-end">
            <span className="text-base">{course.code}</span>
            <span className="text-sm text-white/40 font-normal lowercase text-end">
              {course.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Education = () => {
  return (
    <div id="education" className="border-t border-accent/20">
      <div className="grid sm:grid-cols-3 items-start relative pt-10">
        <h2 className="text-accent max-sm:pb-5 sm:sticky top-10 uppercase font-black text-base">Education</h2>
        <div className="col-span-2">
          {courseworkGroups.map((group) => (
            <CourseGroupRow key={group.category} group={group} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education