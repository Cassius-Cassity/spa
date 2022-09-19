import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Search.css';
import Content from '../../components/Contents/Content';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [content, setAllContent] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(searchTerm){
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`)
    .then((res) => {
      console.log(res.data.results)
      setAllContent(res.data.results);
    })
    .catch((err) => {
        console.log(err)
    })
  }
};

const handleChange = (event) => {
  setSearchTerm(event.target.value);
}
  
  return (
    <div className="home-container">
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input
              className="search"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
          />
        </form>
        <div className='trending'>
        {content && content.map((content) => (
            <Content 
                key={content.id} 
                id={content.id} 
                poster={content.poster_path} 
                title={content.title || content.name} 
                date={content.first_air_date || content.release_date}
                media_type="movie"
                vote_average={content.vote_average}
            />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Search