import type { ChangeEvent, KeyboardEvent } from "react";

interface SearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({
  value,
  onChange,
  onKeyDown,
}: SearchInputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="검색어를 입력하세요"
      className="border p-2 w-full rounded"
    />
  );
};
