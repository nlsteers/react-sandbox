import React, { useContext } from "react";
import ThemeContext from "./themeContext";

const ThemeSelect = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <div className="details">
      <label htmlFor="theme">
        Theme: &nbsp;
        <select
          value={theme}
          onChange={e => setTheme(e.target.value)}
          onBlur={e => setTheme(e.target.value)}
        >
          <option value="peru">Peru</option>
          <option value="darkblue">Dark Blue</option>
          <option value="mediumorchid">Medium Orchid</option>
          <option value="chartreuse">Chartreuse</option>
        </select>
      </label>
    </div>
  );
};

export default ThemeSelect;
