import React, { useMemo, useState } from 'react'
import { jobs as jobsData } from './data/jobs'
import JobCard from './components/JobCard'
import Filters from './components/Filters'
import filterJobs from './utils/filterJobs'

function highlightParts(text, query) {
  if (!query) return text
  const parts = text.split(new RegExp(`(${query})`, 'ig'))
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? <mark key={i} className="bg-yellow-200">{part}</mark> : part
  )
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [locationFilter, setLocationFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('All')
  const [sortAlpha, setSortAlpha] = useState(false)

  const displayedJobs = useMemo(() => {
    return filterJobs(jobsData, searchTerm, locationFilter, typeFilter, sortAlpha)
  }, [searchTerm, locationFilter, typeFilter, sortAlpha])

  return (
    <div className="min-h-screen p-6 max-w-6xl mx-auto">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Job Board</h1>
        <p className="text-sm text-gray-600">Search and filter open roles</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1">
          <Filters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            locationFilter={locationFilter}
            setLocationFilter={setLocationFilter}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
            sortAlpha={sortAlpha}
            setSortAlpha={setSortAlpha}
          />
        </aside>

        <main className="md:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-600">Showing <span className="font-medium text-gray-800">{displayedJobs.length}</span> job(s)</div>
            <div className="text-sm text-gray-500">Tip: use the search box to highlight matches</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedJobs.length === 0 ? (
              <div className="col-span-full text-center text-gray-500">No jobs found</div>
            ) : (
              displayedJobs.map(job => (
                <JobCard key={job.id} job={job} highlightParts={highlightParts(job.title, searchTerm)} />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
