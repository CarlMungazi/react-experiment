import React, { useState, createRef, useEffect, useContext } from "react";

import "./index.css";
import { useDebounce, api } from "utils";
import { AppContext } from "state";
import { Input, Button } from "components";

function SearchInput() {
  const [inputValue, setInputValue] = useState("");
  const debouncedSearchTerm = useDebounce(inputValue, 1000);
  const divRef = createRef();
  const store = useContext(AppContext);

  useEffect(() => {
    const containerEl = divRef.current;
    async function fetchData() {
      // need to properly handle the different loading & error states
      if (debouncedSearchTerm) {
        store.setSearchResults([]);
        store.setError(false);
        store.setIsLoading(true);

        const results = await api(
          `https://api.carbonintensity.org.uk/regional/postcode/${debouncedSearchTerm}`
        ).catch(err => {
          // no need to do anything here, we handle it below
          console.log(err); // eslint-disable-line
        });

        if (!results || !results.data) {
          setTimeout(() => {
            // artificially delay displaying the data
            containerEl.classList.add("search--showResults");
            store.setError(true);
            store.setIsLoading(false);
          }, 2000);

          return;
        }

        setTimeout(() => {
          // artificially delay displaying the data
          store.setSearchResults(results.data[0]); // an error boundary is needed to catch an error if the API response changes
          containerEl.classList.add("search--showResults");
          store.setIsLoading(false);
        }, 2000);
      }
    }

    fetchData();
  }, [debouncedSearchTerm]);

  return (
    <div
      className="w-100 mt3 flex justify-center h3 trans-transform trans-duration-half search"
      ref={divRef}
    >
      <Input
        type="search"
        className="br-tl-2 br-bl-2 bg-light-red white placeholder-white bn outline-0 h-100 ma0 z-10 f-20 trans-o-placeholder trans-duration-placeholder trans-duration search-input"
        placeholder="Please enter your postcode (e.g 'SE11')"
        id="search"
        value={inputValue}
        // add validation to remove spaces
        onChange={e => setInputValue(e.target.value)}
      />
      <Button
        className="trans-br-bl trans-br-tl bg-light-red bn h-100 db pa0 ma0 tc pointer outline-0 minw-60 search-button"
        // eslint-disable-next-line
        onClick={() => {
          if (!divRef.current.classList.contains("search--open")) {
            divRef.current.classList.add("search--open");
            return;
          }

          store.setSearchResults([]);
          store.setError(false);
          divRef.current.classList.remove(
            "search--showResults",
            "search--open"
          );
          setInputValue("");
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
