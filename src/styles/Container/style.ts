import { colorStyleThemeApp } from "../ThemeApp/style";

export const stylesContainer = (theme: string) => {
  return {
    display: "flex",
    flexDirection: "row",
    background: `${colorStyleThemeApp(theme)}`,
    minHeight: "400px",
    padding: "15px",
    border: "1px solid (0, 0, 0, 0.87)",
    borderRadius: "4px",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  };
};
