import React, { useState, createRef, useEffect } from "react";
import "./index.css";

import { useDebounce, api } from "utils";
import { Input, Button } from "components";

function SearchInput() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]); // eslint-disable-line
  const [isSearching, setIsSearching] = useState(false);  // eslint-disable-line
  const debouncedSearchTerm = useDebounce(inputValue, 1000);
  const divRef = createRef();

  useEffect(() => {
    async function fetchData() {
      if (debouncedSearchTerm) {
        setIsSearching(true);

        const results = await api(
          `https://api.agify.io/?name=${debouncedSearchTerm}`
        ).catch(err => {
          console.log(err); // eslint-disable-line
        });
        setSearchResults(results);
        setIsSearching(false);
      } else {
        setSearchResults([]);
      }
    }

    fetchData();
  }, [debouncedSearchTerm]);

  return (
    <div className="w-100 mt3 flex justify-center h3 search" ref={divRef}>
      <Input
        type="search"
        className="bg-light-red white placeholder-white bn outline-0 h-100 ma0 z-10 f-20 trans-o-placeholder trans-duration-placeholder trans-duration search-input"
        placeholder="What are you searching for today?"
        id="search"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <Button
        className="bg-light-red bn h-100 db pa0 ma0 tc pointer outline-0 minw-60 search-button"
        // eslint-disable-next-line
        onClick={() => {
          setInputValue("");

          if (divRef.current.classList.contains("search")) {
            return divRef.current.classList.toggle("search--open");
          }

          divRef.current.classList.toggle("search");
        }}
        type="button"
      >
        <svg
          className="fill-blue trans-transform trans-duration"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 5 5"
        >
          <path d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z" />
        </svg>
      </Button>
    </div>
  );
}

export default SearchInput;
