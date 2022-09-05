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
  setGenres(genres.filter((g) => g.id !== genre.id));
  setPage(1)
};

const handleRemove = (genre) => {
  setSelectedGenres(
    selectedGenres.filter((selected) => selected.id !== genre.id)
  );
  setGenres([...genres, genre]);
  setPage(1)
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
  //eslint-disable-next-line
}, [])

  return (
    <div
    style={{padding: "6px 0"}}>
      {selectedGenres && selectedGenres.map((genre) => (
        <Chip 
          label={genre.name}
          style ={{margin: 2}}
          size= 'small'
          key={genre.id}
          clickable
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres && genres.map((genre) => (
        <Chip 
          label={genre.name}
          style ={{margin: 2}}
          size= 'small'
          key={genre.id}
          clickable
          onClick={() => handleAdd(genre)}
        />
      ))}

    </div>
  )
}

export default Genres