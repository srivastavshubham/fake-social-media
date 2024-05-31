import React from 'react'
import { Button } from 'reactstrap';
import { Route, Routes,BrowserRouter ,Link} from "react-router-dom";
import TwitterImage from './twiter-logo.png'
import InstaImage from './Instagram_icon.png.webp'


export default function Home() {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
         <Link to="/twitter" className='twitter-button'>
            <img src={TwitterImage} alt="Button Image" style={{ width: '20px', height: '20px' }} />
            <span style={{fontSize:'16px',textAlign:'center'}}>Fake Tweet Generator</span>
        </Link>

        <Link to="/insta" className='insta-button'>
            <img src={InstaImage} alt="Button Image" style={{ width: '20px', height: '20px'}} />
            <span style={{fontSize:'16px',textAlign:'center',color: '#ee2a7b'}}>Fake Instagram DM</span>
        </Link>
    </div>
  )
}
