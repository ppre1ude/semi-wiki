import { useEffect, useState } from "react";
import type { KeyboardEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchInput } from "@/features/search/components/SearchInput";
import { SearchResults } from "@/features/search/components/SearchResults";
import { fetchSearchResults } from "@/features/search/api/SearchApi";
import * as S from "./SearchPage.styles";

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [input, setInput] = useState(initialQuery);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      fetchSearchResults(query)
        .then(setResults)
        .catch((err) => console.error("검색 실패:", err));
    } else {
      setResults([]);
    }
  }, [searchParams]);

  const handleSearch = () => {
    const trimmed = input.trim();
    if (trimmed) {
      setSearchParams({ q: trimmed });
    } else {
      setSearchParams({});
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <S.Container>
      <S.Title>세미위키 검색하기 테스트!</S.Title>

      <S.SearchBarWrapper>
        <S.Select disabled>
          <option value="all">전체</option>
        </S.Select>

        <SearchInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <S.Button onClick={handleSearch}>검색하기 🔍</S.Button>
      </S.SearchBarWrapper>

      <S.SearchResultsContainer>
        <SearchResults results={results} />
      </S.SearchResultsContainer>
    </S.Container>
  );
};
