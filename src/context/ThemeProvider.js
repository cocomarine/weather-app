/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeConext = createContext();

export const useTheme = () => useContext(ThemeConext);

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <ThemeConext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeConext.Provider>
  );
};
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
