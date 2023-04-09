import React, {createContext, useState, Dispatch, SetStateAction, useEffect} from "react";

type ThemeContextObj = {
  theme: string;
  setThemeMode: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextObj>({
  theme: 'dark', setThemeMode: () => {
  }
});

const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) setTheme('dark');
  }, [])

  const contextValue: ThemeContextObj = {
    theme: theme,
    setThemeMode: setTheme
  }

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider;
