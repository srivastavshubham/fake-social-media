import React,{useState} from 'react'
import { Link} from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TwitterImage from './assets/twiter-logo.png'
import InstaImage from './assets/Instagram_icon.png.webp'
import FB from './assets/Facebook_icon.svg.webp'
import whatsapp from './assets/whatsapp.png'
import Linkedin from './assets/linkedin.webp'




export default function Home() {

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
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
    <div style={{display:'flex',justifyContent:'center',paddingTop:'30px'}}>
        <Link to="/instadm" className='insta-button'>
            <img src={InstaImage} alt="Button Image" style={{ width: '20px', height: '20px'}} />
            <span style={{fontSize:'16px',textAlign:'center',color: '#ee2a7b',paddingLeft:'5px'}}>Instagram DM Generator</span>
        </Link>
        <Link to="/whatsapp" className='whatsapp-button'>
            <img src={whatsapp} alt="Button Image" style={{ width: '20px', height: '20px'}} />
            <span style={{fontSize:'16px',textAlign:'center',color: '#25D366',paddingLeft:'5px'}}>Whatsapp Message Generator</span>
        </Link>
    </div>
    <div style={{display:'flex',justifyContent:'center',paddingTop:'30px'}}>
        <Link to="/linkedin" className='linkedin-button'>
            <img src={Linkedin} alt="Button Image" style={{ width: '20px', height: '20px'}} />
            <span style={{fontSize:'16px',textAlign:'center',color: ' #0077b5',paddingLeft:'5px'}}>Fake LinkedIn Post</span>
        </Link>
    </div>
    <Modal isOpen={modal} toggle={toggle} centered>
        <ModalBody>
          This tool is intended for entertainment purposes only. Creating fake posts or messages for malicious intent, harassment, or spreading misinformation is strictly prohibited. Users are responsible for their own content <br/>
          <strong>I here by agree that I will use this tool for learning purpose only</strong>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
