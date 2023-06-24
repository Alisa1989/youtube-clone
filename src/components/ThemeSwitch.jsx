import { useContext } from "react";

import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

import { ThemeContext } from "../ThemeContext";

const ThemeSwitch = ()=> {

    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
    const handleClick = () => {
        toggleDarkMode();
    }

    return (
      <div onClick={handleClick}>
        {darkMode === true ? (
          <ToggleOnIcon sx={{ color: darkMode === true ? "white" : "black" }} />
        ) : (
          <ToggleOffIcon />
        )}
      </div>
    );
}

export default ThemeSwitch;