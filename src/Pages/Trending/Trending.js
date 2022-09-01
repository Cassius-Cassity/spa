import Content from "../../components/Contents/Content";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Trending = () => {
    const [trending, setTrending] = useState([])

    const fetchTrending = () => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_KEY}`)
        .then((res) => {
            setTrending(res.data.results)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchTrending();
    }, []);

  return (
    <div>
        <span className="title">Trending</span>
        <div className="trending">
            {trending && trending.map((content) => (
            <Content 
            key={content.id} 
            id={content.id} 
            poster={content.poster_path} 
            title={content.title || content.name} 
            date={content.first_air_date || content.release_date}
            media_type={content.media_type}
            vote_average={content.vote_average}
            />
            ))}
        </div>
    </div>
  )
}

export default Trending