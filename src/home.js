import React from 'react'
import { Link} from "react-router-dom";
import TwitterImage from './assets/twiter-logo.png'
import InstaImage from './assets/Instagram_icon.png.webp'
import FB from './assets/Facebook_icon.svg.webp'


export default function Home() {
  return (
    <div style={{display:'flex',justifyContent:'center',paddingTop:'50px'}}>
         <Link to="/twitter" className='twitter-button'>
            <img src={TwitterImage} alt="Button Image" style={{ width: '20px', height: '20px' }} />
            <span style={{fontSize:'16px',textAlign:'center',paddingLeft:'5px'}}>Fake Tweet Generator</span>
        </Link>

        <Link to="/insta" className='insta-button'>
            <img src={InstaImage} alt="Button Image" style={{ width: '20px', height: '20px'}} />
            <span style={{fontSize:'16px',textAlign:'center',color: '#ee2a7b',paddingLeft:'5px'}}>Fake Instagram Post</span>
        </Link>

        <Link to="/fb" className='fb-button'>
            <img src={FB} alt="Button Image" style={{ width: '20px', height: '20px'}} />
            <span style={{fontSize:'16px',textAlign:'center',color: '#1877F2',paddingLeft:'5px'}}>Fake Facebook Post</span>
        </Link>
    </div>
  )
}
