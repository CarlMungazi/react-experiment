import React, { useState } from "react";
import "./index.css";

import { Input, Button } from "components";

function SearchInput() {
  const [animationClass, toggleClass] = useState("search");
  const [inputValue, setInputValue] = useState('')
  return (
    <div className={animationClass}>
      <Input
        type="search"
        className="bg-light-red white placeholder-white bn search-input"
        placeholder="What are you searching for today?"
        id="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        className="bg-light-red bn search-button"
        onClick={() => {
          const str = animationClass.search("search-open ");
          if (str === -1) return toggleClass("search search-open ");
          setInputValue('');
          
          return toggleClass("search");
        }}
        type="button"
      >
        <svg className="fill-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 5">
          <path d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z" />
        </svg>
      </Button>
    </div>
  );
}

export default SearchInput;
