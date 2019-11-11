import React from "react";
import { SearchInput, Explainer, SearchResult } from "./features";
import "./App.css";

function App() {
  return (
    <div className="flex-ns vh-100 items-center">
      <section className="ma-auto mw6">
        <Explainer />
        <SearchInput />
        <SearchResult />
      </section>
    </div>
  );
}

export default App;
