import React from "react";

import { Card } from "components";
import "./index.css";

function Explainer() {
  return (
    <Card className="br3 pa2 pa3-ns mt3 ba b--black-10 bg-white">
      <p className="ma0">
        Find out the carbon intensity for your local area by entering the first
        part of your postcode in the search box below. You can read more about
        carbon intensity
        <a
          className="ml1 blue"
          target="_blank"
          rel="noopener noreferrer"
          href="https://carbonintensity.org.uk"
        >
          here
        </a>
        .
      </p>
      <p className="mb0 f6">
        All icons are taken from
        <a
          className="ml1 blue"
          target="_blank"
          rel="noopener noreferrer"
          href="https://icons8.com"
        >
          Icons8
        </a>
        .
      </p>
    </Card>
  );
}

export default Explainer;
