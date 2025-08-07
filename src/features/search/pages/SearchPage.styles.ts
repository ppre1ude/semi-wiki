/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Select = styled.select`
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 6px 16px;
  background-color: #3182f6;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;

export const SearchResultsContainer = styled.div`
  margin-top: 24px;
`;
