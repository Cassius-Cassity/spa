import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    if(value===0) navigate("/");
    else if(value===1) navigate("/movies");
    else if(value===2) navigate("/series");
    else if(value===3) navigate("/search");
  }, [value, navigate]);
  

  return (
    <Box sx={{ 
        width: "100%",
        position: "fixed",
        bottom: 0,
     }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction label="Register" icon={<AppRegistrationIcon />} />
        <BottomNavigationAction label="Login" icon={<LoginIcon />} />
      </BottomNavigation>
    </Box>
  );
}