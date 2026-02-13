import { describe, it, expect } from 'vitest'
import filterJobs from '../utils/filterJobs'
import { jobs } from '../data/jobs'

describe('filterJobs', () => {
  it('filters by search term', () => {
    const res = filterJobs(jobs, 'frontend', 'All', 'All', false)
    expect(res.length).toBeGreaterThan(0)
    expect(res[0].title.toLowerCase()).toContain('frontend')
  })

  it('filters by location', () => {
    const res = filterJobs(jobs, '', 'Remote', 'All', false)
    expect(res.every(j => j.location === 'Remote')).toBe(true)
  })

  it('filters by type', () => {
    const res = filterJobs(jobs, '', 'All', 'Internship', false)
    expect(res.every(j => j.type === 'Internship')).toBe(true)
  })

  it('sorts alphabetically when requested', () => {
    const res = filterJobs(jobs, '', 'All', 'All', true)
    const titles = res.map(r => r.title)
    const sorted = [...titles].sort((a,b) => a.localeCompare(b))
    expect(titles).toEqual(sorted)
  })
})
