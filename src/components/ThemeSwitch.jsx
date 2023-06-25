import { useContext } from "react";

import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

import { ThemeContext } from "../ThemeContext";
import { Typography, Box } from "@mui/material";

const ThemeSwitch = ()=> {

    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
    const handleClick = () => {
        toggleDarkMode();
    }

    return (
      <div onClick={handleClick}>
        {darkMode === true ? (
          <Box sx={{ display: "flex", justifyContent: "center", height: 25 }}>
            <ToggleOnIcon sx={{ color: "white", display: "inline" }} />
            <Typography
              sx={{
                display: { xs: "none", md: "inline" },
                color: "white",
                mb: 20,
                fontWeight: "bold"
              }}
            >
              Dark Mode
            </Typography>
          </Box>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center", height: 25 }}>
            <ToggleOffIcon />
            <Typography
              sx={{
                display: { xs: "none", md: "inline" },
                mb: 20,
                fontWeight: "bold"
              }}
            >
              Light Mode
            </Typography>
          </Box>
        )}
      </div>
    );
}

export default ThemeSwitch;