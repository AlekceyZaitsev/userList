import { DARK, LIGHT, LIGHT_GREY, SPACE_GREY } from "../PaletteColor/style";
import { ThemeApp } from "../../interfaces/interface";

export const colorStyleThemeApp = (theme: string): string => {
  return theme === ThemeApp.LIGHT_THEME ? LIGHT : DARK;
};

export const colorStyleText = (theme: string): string => {
  return theme === ThemeApp.DARK_THEME ? LIGHT : DARK;
};

export const colorStyleInput = (theme: string): string => {
  return theme === ThemeApp.DARK_THEME ? LIGHT : LIGHT_GREY;
};

export const colorChoiceTableItems = (themeApp: string, theme: boolean) => {
  if (themeApp === ThemeApp.DARK_THEME || themeApp === ThemeApp.LIGHT_THEME) {
    if (theme) {
      return SPACE_GREY;
    }
  }
};
