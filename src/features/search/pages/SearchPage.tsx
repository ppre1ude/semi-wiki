import { useState, useEffect } from "react";
import { SearchInput } from "@/features/search/components/SearchInput";
import { SearchResults } from "@/features/search/components/SearchResults";
import { fetchSearchResults } from "@/features/search/api/SearchApi";
import * as S from "./SearchPage.styles";

export const SearchPage = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      try {
        const res = await fetchSearchResults(input);
        setResults(res);
      } catch (err) {
        console.error("검색 실패:", err);
      }
    };

    if (input) {
      search();
    } else {
      setResults([]);
    }
  }, [input]);

  return (
    <S.Container>
      <S.Title>🔍 세미위키 검색</S.Title>

      <S.SearchBarWrapper>
        <S.Select>
          <option value="all">전체</option>
          <option value="title">제목</option>
          <option value="content">내용</option>
        </S.Select>

        <SearchInput value={input} onChange={(e) => setInput(e.target.value)} />

        <S.Button onClick={() => {}}>검색하기 🔍</S.Button>
      </S.SearchBarWrapper>

      <S.SearchResultsContainer>
        <SearchResults results={results} />
      </S.SearchResultsContainer>
    </S.Container>
  );
};
