import React from 'react'
import './Card.css'
import VideoPlayer from './VideoPlayer'

function Card(props) {
  return (
    <div className='card-container'>
        <div id = "card" className={props.cardColor === "white" ? "card-white" : "card-black"}>
            <div className='video-parent'>
                {props.videoId ? <VideoPlayer videoId = {props.videoId} opts = {{width: '100%', height: '100%'}} /> : <div style={{width: "100%", height: "100%"}} id = {props.production} />}
            </div>
            <div className='movie-info'>
                <span>Title: {props.title}</span>
                 {props.achievements && <span>Achievements: {props.achievements}</span>}
                 {props.film_director && <span>Film Director: {props.film_director}</span>}
                 {props.production && <span>Production House: {props.production}</span>}
                 {props.music_director && <span>Music Director: {props.music_director}</span>}
                 {props.language && <span>Language: {props.language}</span>}
            </div>
        </div>
    </div>
  )
}

export default Card