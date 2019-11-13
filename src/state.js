import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

// if not using the useContext hook, you can use this approach
export const withAppContext = Component => props => (
  <AppContext.Consumer>
    {store => <Component {...props} store={store} />}
  </AppContext.Consumer>
);

// this non-performant because every state change triggers a re-render of the children
export const AppStore = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        searchResults,
        setSearchResults,
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppStore.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
};
