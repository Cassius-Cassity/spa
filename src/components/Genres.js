import React, { useEffect } from 'react';
import axios from 'axios';
import Chip from '@mui/material/Chip';

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,
}) => {

const handleAdd = (genre) => {
  setSelectedGenres([...selectedGenres, genre]);
  setGenres(genres.filter((g) => g.id !== genre.id))
}
const fetchGenres = () => {
    axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_KEY}&language=en-US`)
    .then((res) => {
        setGenres(res.data.genres)
    })
    .catch((err) => {
        console.log(err)
    })
};


useEffect(() => {
  fetchGenres();

  return () => {
    setGenres({});
  };
}, [])

  return (
    <div
    style={{padding: "6px 0"}}>
      {genres && genres.map((genre) => (
        <Chip 
          label={genre.name}
          style ={{margin: 2}}
          clickable
          size= 'small'
          key={genre.id}
        />
      ))}
    </div>
  )
}

export default Genres