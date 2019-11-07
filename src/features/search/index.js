import React, { useState } from "react";
import "./index.css";

import { Input, Button } from "components";

function SearchInput() {
  const [animationClass, toggleClass] = useState("search");
  return (
    <div className={animationClass}>
      <Input
        type="search"
        className="search-input"
        placeholder="Search"
        id="search"
      />
      <Button
        className="search-button"
        onClick={() => {
          const str = animationClass.search("search-open");
          if (str === -1) return toggleClass("search search-open");

          return toggleClass("search");
        }}
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 5">
          <path d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z" />
        </svg>
      </Button>
    </div>
  );
}

export default SearchInput;
