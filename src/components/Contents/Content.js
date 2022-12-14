import React from 'react'
import { img_300 } from '../../config/config'
import "./Content.css"
import Badge from '@mui/material/Badge'

const Content = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
  return (
    <div className='media'>
        <Badge badgeContent={vote_average} color={vote_average > 6 ? 'primary' : 'secondary'}/>
        <img className="poster"
        src={`${img_300}/${poster}`} 
        alt={title}
        />
        <b className='title'>{title}</b>
        <span className="subtitle">{media_type==='tv' ? "TV Series" : "Movie"}</span>
        <span className="subtitle">{date}</span>
    </div>
  )
}

export default Content