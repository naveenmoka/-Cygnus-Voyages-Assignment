import React from 'react'

const Filters = ({ searchTerm, setSearchTerm, locationFilter, setLocationFilter, typeFilter, setTypeFilter, sortAlpha, setSortAlpha }) => {
  return (
    <div className="space-y-3">
      <input
        aria-label="Search jobs"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded-md"
        placeholder="Search by job title..."
      />

      <div className="flex gap-2 flex-wrap">
        <select value={locationFilter} onChange={e => setLocationFilter(e.target.value)} className="p-2 border rounded-md">
          <option value="All">All locations</option>
          <option value="Remote">Remote</option>
          <option value="On-site">On-site</option>
        </select>

        <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} className="p-2 border rounded-md">
          <option value="All">All types</option>
          <option value="Internship">Internship</option>
          <option value="Full-time">Full-time</option>
        </select>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={sortAlpha} onChange={e => setSortAlpha(e.target.checked)} />
          <span className="text-sm">Sort A-Z</span>
        </label>
      </div>
    </div>
  )
}

export default Filters
