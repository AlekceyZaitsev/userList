import { colorStyleInput } from "../ThemeApp/style";
import { GREEN } from "../PaletteColor/style";

export const styleFormControl = (theme: string) => {
  return {
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
