/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./SearchResult.css";

import { AppContext } from "state";

const SearchResult = () => {
  const store = useContext(AppContext);

  // can use optional chaining here
  if (store.searchResults.data) {
    const generation = store.searchResults.data[0];
    
    return (
      <div className="">
        <p>
          {" "}
          Postcode:
          {generation.postcode}
        </p>
        <p>
          {" "}
          Region:
          {generation.shortname}
        </p>
        {/* can use optional chaining here */}
        <p>
          {" "}
          Forecast:
          {generation.data[0].intensity.forecast}{" "}
        </p>
        <p>
          {" "}
          Index:
          {generation.data[0].intensity.index}{" "}
        </p>
      </div>
    );
  }

  return <div />;
};

SearchResult.propTypes = {};

SearchResult.defaultProps = {};

export default SearchResult;
