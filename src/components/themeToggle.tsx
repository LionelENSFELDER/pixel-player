import { useState } from "react";
import useToggleTheme from "../hooks/useToggleTheme";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [colorTheme, setTheme] = useToggleTheme();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  const [currentTheme, setCurrentTheme] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setCurrentTheme();
    setDarkSide(checked);
  };

  const ThemeIcon = () => {
    return colorTheme === "dark" ? <FaSun size={25} /> : <FaMoon size={25} />;
  };

  return (
    <button
      className="border-0 bg-transparent font-large text-lg px-5 py-2.5 text-center inline-flex items-center me-2 mb-0.5 text-black dark:text-white"
      onClick={() => toggleDarkMode()}
    >
      <ThemeIcon />
    </button>
  );
};
export default ThemeToggle;
