import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';
import { ThemeContext } from '../ThemeContext';


const VideoCard = ({ video: { id: { videoId }, snippet} }) => {
  
  const { darkMode } = useContext(ThemeContext)
  
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px'}, boxShadow: 'none', borderRadius: "20px"}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
        alt={snippet?.title}
        sx={{ width: {
          xs: "100%",
          sm: '358px',
          md: '320px'
        }, height: 180 }}
        />
      </Link>
      <CardContent sx ={{ backgroundColor: darkMode === true? '#1e1e1e' : "#ebebeb",
      height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color= {darkMode === true? "#fff" : "#000"}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard