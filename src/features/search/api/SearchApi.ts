export const fetchSearchResults = async (query: string) => {
  if (!query) return [];

  const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error("검색 실패");

  const data = await res.json();
  return data.results;
};
