import React from "react";

import { Card } from "components";
import "./index.css";

function Explainer() {
  return (
    <Card className="br3 pa3 pa4-ns mv3 ba b--black-10 bg-white">
      <p className="ma0">
        This is where the text for the API explanation will live.
      </p>
      <span>
        All icons by
        <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">
          Icons8
        </a>
      </span>
    </Card>
  );
}

export default Explainer;
