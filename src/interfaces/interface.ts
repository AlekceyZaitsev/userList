import { Dispatch, SetStateAction } from "react";

export type dispatchFunction<T> = Dispatch<SetStateAction<T>>;

export enum ThemeApp {
  LIGHT_THEME = "light",
  DARK_THEME = "dark",
}

export type Theme = ThemeApp.LIGHT_THEME | ThemeApp.DARK_THEME;
export type typeThemeContext = { theme: Theme; toggleTheme: () => void };

export type usersType = {
  id: number;
  name: string;
  choices: boolean;
  age: string;
  subscription: string;
  employment: string;
};
