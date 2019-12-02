import React from "react";

import "./loader.css";

function Loader({ variant }) {
  switch (variant) {
    case "bars": {
      return (
        <div className={`loader--${variant} white relative f7 bg-white`} />
      );
    }
    default: {
      return <div> Hello </div>;
    }
  }
}
export default Loader;
