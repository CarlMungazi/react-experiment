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
import { Loader, Card } from 'components';

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

const RegionalInfo = ({label, data}) => (
  <span className="white pa1 f4 bg-blue"> { label }: { data } </span>
);

const FuelItem = ({ data }) => (
  <li className="mt3 flex-basis-30 flex flex-column items-center br3 pa2 b--blue b--solid ba bg-light-red">
    <img className="w2 h2 br-100 mb3" src={ICONS[data.fuel]}/>
    <span className="ttc">{`${data.fuel} - ${data.perc}%`}</span>
  </li>
)

const SearchResult = () => {
  const store = useContext(AppContext);

  if (store.error) {
    return (
      <Card tag="section" className="results--show o-100 trans-duration-half trans-delay br3 bg-white pa3 mt3">
        <p className="mt0 mb0">Something went wrong. Please try again.</p>
      </Card>
    );
  }

  // can use optional chaining here in place of the if clause?
  if (store.searchResults.data) {
    const generation = store.searchResults;
    
  // maybe have one div and change classname and only show content when data exists
    return (
      <Card tag="section" className="results--show o-100 trans-duration-half trans-delay br3 bg-white pa3 mt3">
        <div className="flex flex-wrap justify-between mh2">
          <RegionalInfo label="Postcode" data={generation.postcode} />
          <RegionalInfo label="Region" data={generation.shortname} />
        </div>
        <ul className="list pa0 mv0 flex justify-around flex-wrap flex-row">
          { generation.data[0].generationmix.map(item => <FuelItem key={item.fuel} data={item} /> )}
        </ul>
      </Card>
    );
  }

  return (
    <>
    <Card tag="section" className="results--hide o-0 trans-duration-half" />
    { store.isLoading && <Loader variant="bars" /> }
    </>
  );
};

export default SearchResult;
