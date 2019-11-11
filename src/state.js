import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

export const withAppContext = Component => props => (
  <AppContext.Consumer>
    {store => <Component {...props} store={store} />}
  </AppContext.Consumer>
);

// this non-performant because every state change triggers a re-render of the children
export const AppStore = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <AppContext.Provider
      value={{
        searchResults,
        setSearchResults
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppStore.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
};
