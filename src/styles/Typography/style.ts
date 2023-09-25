import { colorStyleText } from "../ThemeApp/style";

export const styleTypography = (theme: string) => {
  return {
    padding: "15px",
    textAlign: "left",
    color: `${colorStyleText(theme)}`,
  };
};
