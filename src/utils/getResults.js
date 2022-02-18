export const getResults = (term, db) => {
  const matches = db.filter((names) => {
    return names.includes(term);
  });
  // We only want the first three of search results.
  return matches.length > 5 ? matches.slice(0, 5) : matches;
};
