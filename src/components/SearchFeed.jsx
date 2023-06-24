import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { ThemeContext } from '../ThemeContext';


const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams()
  const { darkMode } = useContext(ThemeContext)

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: darkMode === true ? "#fff" : "#000" }}
      >
        Search Results for: <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
