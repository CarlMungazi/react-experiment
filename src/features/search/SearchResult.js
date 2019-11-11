/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import "./SearchResult.css";

import { withAppContext } from "state";

const SearchResult = ({ store }) => {
  // can use optional chaining here
  if (store.searchResults.data) {
    const generation = store.searchResults.data[0];
    console.log(generation);
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

export default withAppContext(SearchResult);
