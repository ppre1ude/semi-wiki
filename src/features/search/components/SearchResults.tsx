interface Result {
  id: number;
  title: string;
  snippet: string;
}

interface Props {
  results: Result[];
}

export const SearchResults = ({ results }: Props) => {
  if (results.length === 0) return <p>결과가 없습니다.</p>;

  return (
    <ul>
      {results.map((result) => (
        <li key={result.id} className="border-b py-2">
          <h3 className="font-bold">{result.title}</h3>
          <p>{result.snippet}</p>
        </li>
      ))}
    </ul>
  );
};
