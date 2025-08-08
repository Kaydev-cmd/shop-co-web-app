import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(query)}`);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="searchBar" ref={wrapperRef} onClick={() => setIsOpen(true)}>
      {isOpen ? (
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="search"
            placeholder="Search for products here..."
            className="w-full"
            style={{ padding: "8px" }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            autoComplete="off"
          />
        </form>
      ) : (
        <div className="cursor-pointer text-gray-500 text-center select-none">
          Click to search...
        </div>
      )}
    </div>
  );
};

export default SearchBar;
