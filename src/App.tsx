import { FC, useState } from "react";
import UserList from "./pages/UserList";
import { ThemeContext } from "./context/context";
import { Theme, ThemeApp } from "./interfaces/interface";

const App: FC = () => {
  const [theme, setTheme] = useState<Theme>(ThemeApp.DARK_THEME);
  const toggleTheme = () => {
    setTheme(
      theme === ThemeApp.DARK_THEME ? ThemeApp.LIGHT_THEME : ThemeApp.DARK_THEME
    );
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <UserList />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
