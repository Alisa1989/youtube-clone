import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";

import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from "./components";
import { ThemeContext } from "./ThemeContext";

export const App = () => {

  const { darkMode } = useContext(ThemeContext)
  
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: darkMode === true ? "#000" : "#fff" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );};

export default App;
