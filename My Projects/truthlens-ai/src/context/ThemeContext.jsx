

import { createContext,
  useContext,
  useEffect,
  useState } from "react";


const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(()=> {
    try {
      const savedTheme =  localStorage.getItem("truthlens-theme");

      return savedTheme == "light" || savedTheme == "dark"
        ? savedTheme : "dark";

    }  catch {
      return "dark";
    }
  });

  useEffect(()=> {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      localStorage.setItem("truthlens-theme", theme);
    } catch {
      //The theme still works if browser if browser storage is unavailable.
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
    currentTheme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={{ theme,setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(){
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}