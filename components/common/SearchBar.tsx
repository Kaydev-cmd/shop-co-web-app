import { useRouter } from "next/router";
import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="" style={{ width: "50%" }}>
      <input
        type="text"
        placeholder="Search for products here..."
        className="w-full"
        style={{ padding: "8px" }}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
