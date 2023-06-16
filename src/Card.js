import React from 'react'
import './Card.css'
import VideoPlayer from './VideoPlayer'

function Card(props) {
  return (
    <div className='card-container'>
        <div id = "card" className={props.cardColor === "white" ? "card-white" : "card-black"}>
            <div className='video-parent'>
                <VideoPlayer videoId = {props.videoId} opts = {{width: '100%', height: '100%'}} />
            </div>
            <div className='movie-info'>
                <h3>{props.title}</h3>
            </div>
        </div>
    </div>
  )
}

export default Card