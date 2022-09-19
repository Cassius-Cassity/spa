import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CustomPagination from '../../components/Pagination/Pagination';
import Content from '../../components/Contents/Content';
import Genres from '../../components/Genres';
import useGenres from '../../hooks/useGenre';

const Series = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL= useGenres(selectedGenres)

  const fetchMovies = () => {
      axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
      .then((res) => {
          setContent(res.data.results);
          setNumOfPages(res.data.total_pages);
      })
      .catch((err) => {
          console.log(err)
      })
  };

  useEffect(() => {
    fetchMovies();
  }, [page, genreforURL]);
  
  return (
    <div>
        <span className="series">series</span>
        <Genres type="tv" 
            selectedGenres={selectedGenres} 
            setSelectedGenres={setSelectedGenres} 
            genres={genres} 
            setGenres={setGenres}
            setPage={setPage}
        />
        <div className="trending">
            {content && content.map((content) => (
            <Content 
                key={content.id} 
                id={content.id} 
                poster={content.poster_path} 
                title={content.title || content.name} 
                date={content.first_air_date || content.release_date}
                media_type="tv"
                vote_average={content.vote_average}
            />
            ))}
        </div>
        {numOfPages > 1 && 
            <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
        }
    </div>
  )
}

export default Series