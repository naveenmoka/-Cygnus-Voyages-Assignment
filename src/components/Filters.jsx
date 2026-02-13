import React from 'react'

const Filters = ({ searchTerm, setSearchTerm, locationFilter, setLocationFilter, typeFilter, setTypeFilter, sortAlpha, setSortAlpha }) => {
  return (
    <div className="space-y-4 card-shadow p-4">
      <label className="block text-sm font-medium text-gray-700">Search</label>
      <input
        aria-label="Search jobs"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-200"
        placeholder="Search by job title..."
      />

      <div className="flex gap-2 flex-wrap">
        <div className="flex-1">
          <label className="block text-xs text-gray-600 mb-1">Location</label>
          <select value={locationFilter} onChange={e => setLocationFilter(e.target.value)} className="w-full p-2 border border-gray-200 rounded-lg">
            <option value="All">All locations</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
          </select>
        </div>

        <div className="w-36">
          <label className="block text-xs text-gray-600 mb-1">Type</label>
          <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} className="w-full p-2 border border-gray-200 rounded-lg">
            <option value="All">All types</option>
            <option value="Internship">Internship</option>
            <option value="Full-time">Full-time</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" checked={sortAlpha} onChange={e => setSortAlpha(e.target.checked)} className="h-4 w-4" />
          <span>Sort A-Z</span>
        </label>
        <button onClick={() => { setSearchTerm(''); setLocationFilter('All'); setTypeFilter('All'); setSortAlpha(false); }} className="text-sm text-red-600">Clear</button>
      </div>
    </div>
  )
}

export default Filters
