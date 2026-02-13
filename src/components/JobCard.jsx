import React from 'react'

const JobCard = ({ job, highlightParts }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-1">
        {highlightParts}
      </h3>
      <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
      <span className="mt-3 inline-block px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-md">{job.type}</span>
    </div>
  )
}

export default JobCard
