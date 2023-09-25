import React from "react";
import { typeThemeContext } from "../interfaces/interface";

export const ThemeContext = React.createContext<typeThemeContext>(
  {} as typeThemeContext
);
