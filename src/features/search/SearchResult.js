/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./SearchResult.css";

import { AppContext } from "state";

const RegionalInfo = ({label, data}) => (
  <div className="flex-basis-50">
    <span> { label }: </span>
    <span> { data } </span>
  </div>
);

const FuelItem = ({ data }) => (
  <li className="flex items-center lh-copy ph0 pv1 bb b--black-10">
    <img className="w2 h2 br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg"/>
    <span className="flex-auto ttc">{ data.fuel}</span>
    <span className="">{ data.perc}</span>
  </li>
)

const SearchResult = () => {
  const store = useContext(AppContext);

  // can use optional chaining here
  if (store.searchResults.data) {
    const generation = store.searchResults.data[0];
    
  // maybe have one div and change classname and only show content when data exists

    return (
      <section className="results--show o-100 trans-duration-half trans-delay">
        <div className="flex flex-wrap">
          <RegionalInfo label="Postcode" data={generation.postcode} />
          <RegionalInfo label="Region" data={generation.shortname} />
          <RegionalInfo label="Forecast" data={generation.data[0].intensity.forecast} />
          <RegionalInfo label="Index" data={generation.data[0].intensity.index} />
        </div>
        <ul className="list pa0 mb0">
          { generation.data[0].generationmix.map(item => <FuelItem data={item} /> )}
        </ul>
      </section>
    );
  }

  return <section className="results--hide o-0 trans-duration-half" />;
};

SearchResult.propTypes = {};

SearchResult.defaultProps = {};

export default SearchResult;
