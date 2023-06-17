import React from 'react'
import './Main.css'
import Card from './Card'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Main() {
  return (
    <div className='main'>
        <div className='title-container'>
            <span>SHREYA GUPTA</span>
        </div>
        <div className='social-media-container'>
            <a target='_blank' href='https://www.instagram.com/guptashreya30/'><InstagramIcon /></a>
            <a target='_blank' href='https://www.facebook.com/profile.php?id=100063610856586'><FacebookIcon /></a>
            <a target='_blank' href='https://www.linkedin.com/in/sshreyagupta0101/'><LinkedInIcon /></a>
        </div>
        <div className='description-container'>
            <div className='description'>
                <p>Shreya is a music composer, performer and producer, based out of Mumbai. She has studied BA/MA in Economics and Math from Boston University and Music Technology, Jingle Production and Songwriting from the Berklee College of Music, as well as Bachelors and Masters degrees in Indian Classical Music from Allahabad University. She worked at production house JAM8, composing and producing themes for web series and Indian television shows under the guidance of Pritam Chakraborty and then worked as a producer for Sneha Khanwalkar. She has also worked as a Production Assistant at TSAI Performance Center, Boston.</p>
            </div>
        </div>

        <div className='cards-container'>
            <Card title = "“Uss Paar” - Star Wars: Visions Vol. 2 – The Bandits of Golak" film_director = "Ishan Shukla" production = "88 Pictures, Lucasfilm Animation, Lucasfilm" music_director = "Sneha Khanwalkar" language = "English, Japanese" videoId = 'n8Qpo2eKerQ' cardColor = 'black'/>
            <Card title = "“Mari meri” - Aja" film_director = "Ramji Bali" production = "Sledgehammer" music_director = "Shreya Gupta" language = "Hindi, Haryanvi" videoId = '' cardColor = 'white'/>
            <Card title = "“Yeh Duniya agar mil bhi jaye toh kya” - Chup movie" film_director = "R. Balki" production = "Hope Productions" music_director = "Sneha Khanwalkar" language = "Hindi" videoId = '9vvYng841h8' cardColor = 'black'/>
            <Card title = "Tabbar (Sony Liv)" film_director = "Ajitpal Singh" production = "Jar Pictures" music_director = "Sneha Khanwalkar" language = "Hindi, Punjabi" achievements = "Filmfare Award for Best Background Music, Series" videoId = 'wcQCQc9beXw' cardColor = 'white'/>
            <Card title = "London Files (Voot)" film_director = "Sachin Pathak" production = "Jar Pictures" music_director = "Sneha Khanwalkar" language = "Hindi, English" videoId = 'WO5LLgT5YmE' cardColor = 'black'/>
            <Card title = "WhiteHat Jr (Ad)" film_director = "" production = "" music_director = "" language = "" videoId = 'f0xmlJX9E8Y' cardColor = 'white'/>
            <Card title = "Tata motors (Ad)" film_director = "" production = "" music_director = "" language = "" videoId = 'Lul-yt7ksuE' cardColor = 'black'/>
            <Card title = "Hyundai (Ad)" film_director = "" production = "" music_director = "" language = "" videoId = 'bGYrUpvMyQ8' cardColor = 'white'/>
            <Card title = "Showreel 1" film_director = "" production = "" music_director = "" language = "" videoId = 'vLQWhQsfrrs' cardColor = 'black'/>
            <Card title = "Showreel 2" film_director = "" production = "" music_director = "" language = "" videoId = 'Xj_fI_QSRBs' cardColor = 'white'/>
        </div>
    </div>
  )
}

export default Main