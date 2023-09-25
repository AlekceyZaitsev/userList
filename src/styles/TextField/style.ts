import { colorStyleInput, colorStyleText } from "../ThemeApp/style";
import { GREEN, LIGHT } from "../PaletteColor/style";
export const styleTextField = (theme: string) => {
  return {
    minWidth: "250px",
    paddingBottom: "15px",
    "& .MuiInputBase-root": {
      color: colorStyleText(theme),
      borderColor: LIGHT,
    },
    "& .MuiFormLabel-root": { color: colorStyleText(theme) },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: colorStyleInput(theme),
      },
      "&:hover fieldset": {
        borderColor: GREEN,
      },
    },
  };
};
