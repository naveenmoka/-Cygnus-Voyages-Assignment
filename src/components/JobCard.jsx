import React from 'react'

const typeColor = (type) => {
  if (type === 'Internship') return 'bg-green-100 text-green-800'
  if (type === 'Full-time') return 'bg-indigo-100 text-indigo-800'
  return 'bg-gray-100 text-gray-800'
}

const JobCard = ({ job, highlightParts }) => {
  return (
    <article className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-150 border border-transparent hover:border-gray-100">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold mb-1 leading-tight text-gray-900">
            {highlightParts}
          </h3>
          <p className="text-sm text-gray-600">{job.company} • <span className="text-gray-500">{job.location}</span></p>
        </div>

        <div className="text-right flex flex-col items-end gap-2">
          <span className={`${typeColor(job.type)} px-2 py-0.5 text-xs rounded-md`}>{job.type}</span>
          <button className="text-xs text-indigo-600 hover:underline">View</button>
        </div>
      </div>
    </article>
  )
}

export default JobCard
