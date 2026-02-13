export function filterJobs(
  jobs,
  searchTerm,
  locationFilter,
  typeFilter,
  sortAlpha,
) {
  const term = (searchTerm || "").toLowerCase();

  let list = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(term) &&
      (locationFilter === "All" || job.location === locationFilter) &&
      (typeFilter === "All" || job.type === typeFilter),
  );

  if (sortAlpha) {
    list = [...list].sort((a, b) => a.title.localeCompare(b.title));
  }

  return list;
}

export default filterJobs;
