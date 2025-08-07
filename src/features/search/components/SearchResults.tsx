import { useNavigate } from "react-router-dom";
import type { SearchResult } from "@/features/search/types/searchTypes";

interface Props {
  results: SearchResult[];
}

export const SearchResults = ({ results }: Props) => {
  const navigate = useNavigate();

  if (results.length === 0) return <p>결과가 없습니다.</p>;

  return (
    <ul>
      {results.map((result) => (
        <li
          key={result.id}
          className="border-b py-2 cursor-pointer hover:bg-gray-50"
          onClick={() => navigate(`/article/${result.id}`)}
        >
          <h3 className="font-bold">{result.title}</h3>
          <p>{result.snippet}</p>
        </li>
      ))}
    </ul>
  );
};
