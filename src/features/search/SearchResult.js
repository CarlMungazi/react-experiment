/* eslint-disable */
import React, { useContext } from "react";

import "./SearchResult.css";

import gas from 'assets/gas.png';
import hydro from 'assets/hydro.png';
import biomass from 'assets/biomass.png';
import wind from 'assets/wind.png';
import other from 'assets/other.png';
import nuclear from 'assets/nuclear.png';
import solar from 'assets/solar.png';
import imports from 'assets/imports.png';
import coal from 'assets/coal.png';

import { AppContext } from "state";
import { Loader } from 'components';

const ICONS = {
  wind,
  biomass,
  solar,
  gas,
  imports,
  nuclear,
  hydro,
  other,
  coal
}

const RegionalInfo = ({label, data, style}) => (
  <div className={`flex-basis-45 f4 ${style}`}>
    <span> { label }: </span>
    <span> { data } </span>
  </div>
);

const FuelItem = ({ data }) => (
  <li className="flex items-center lh-copy ph0 pv1 bb b--black-10">
    <img className="w2 h2 br-100" src={ICONS[data.fuel]}/>
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
      <section className="results--show o-100 trans-duration-half trans-delay br3 bg-white pa3 mt4">
        <div className="flex flex-wrap justify-between">
          <RegionalInfo label="Postcode" data={generation.postcode} style='mb2' />
          <RegionalInfo label="Region" data={generation.shortname} style='mb2' />
          <RegionalInfo label="Forecast" data={generation.data[0].intensity.forecast} />
          <RegionalInfo label="Index" data={generation.data[0].intensity.index} />
        </div>
        <ul className="list pa0 mb0 mt3">
          { generation.data[0].generationmix.map(item => <FuelItem data={item} /> )}
        </ul>
      </section>
    );
  }

  return (
    <>
    <section className="results--hide o-0 trans-duration-half" />
    {/* turn into component & add logic to show different loaders each time */}
    {/* also need to add logic to artificially delay api response so loader is shown. possible hook use? */}
    { store.isLoading && <Loader variant="bars" /> }
    {/* <Loader variant="bars" /> */}
    </>
  );
};

SearchResult.propTypes = {};

SearchResult.defaultProps = {};

export default SearchResult;
