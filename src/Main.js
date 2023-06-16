import React from 'react'
import './Main.css'
import Card from './Card'

function Main() {
  return (
    <div className='main'>
        <div className='title-container'>
            <span>SHREYA GUPTA</span>
        </div>
        <div className='description-container'>
            <div className='description'>
                <p>Shreya is a music composer, performer and producer, based out of Mumbai. She has studied BA/MA in Economics and Math from Boston University and Music Technology, Jingle Production and Songwriting from the Berklee College of Music, as well as Bachelors and Masters degrees in Indian Classical Music from Allahabad University. She worked at production house JAM8, composing and producing themes for web series and Indian television shows under the guidance of Pritam Chakraborty and then worked as a producer for Sneha Khanwalkar. She has also worked as a Production Assistant at TSAI Performance Center, Boston.
                Shreya is a music composer, performer and producer, based out of Mumbai. She has studied BA/MA in Economics and Math from Boston University and Music Technology, Jingle Production and Songwriting from the Berklee College of Music, as well as Bachelors and Masters degrees in Indian Classical Music from Allahabad University. She worked at production house JAM8, composing and producing themes for web series and Indian television shows under the guidance of Pritam Chakraborty and then worked as a producer for Sneha Khanwalkar. She has also worked as a Production Assistant at TSAI Performance Center, Boston.</p>
            </div>
        </div>
        <div className='cards-container'>
            <Card title = "Star Wars" videoId = 'n8Qpo2eKerQ' cardColor = 'black'/>
            <Card title = "Yeh Duniya agar mil bhi jaye toh kya" videoId = '9vvYng841h8' cardColor = 'white'/>
            <Card title = "Star Wars" videoId = 'wcQCQc9beXw' cardColor = 'black'/>
            <Card title = "Star Wars" videoId = 'WO5LLgT5YmE' cardColor = 'white'/>
            <Card title = "Star Wars" videoId = 'f0xmlJX9E8Y' cardColor = 'black'/>
            <Card title = "Star Wars" videoId = 'Lul-yt7ksuE' cardColor = 'white'/>
            <Card title = "Star Wars" videoId = 'bGYrUpvMyQ8' cardColor = 'black'/>
            <Card title = "Star Wars" videoId = 'vLQWhQsfrrs' cardColor = 'white'/>
        </div>
    </div>
  )
}

export default Main