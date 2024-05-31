import React, { useState,useRef } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input,Button } from 'reactstrap';
import html2canvas from 'html2canvas';
import { MdVerified } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";


import Avatar from './images.png'
import Demo from './logo.webp'

const Instagram = () => {
    
    const divRef = useRef(null);

    const [name, setName] = useState();
    const [location, setLocation] = useState();
    const [post, setPost] = useState();
    const [avatar, setAvatar] = useState();
    const [post_image, setPostImage] = useState();
    const [post_date, setPostDate] = useState();
    const [time_format, setTimeFormat] = useState('PM');
    const [date, setDate] = useState();
    const [view, setView] = useState();
    const [retweet, setRetweet] = useState();
    const [quotes, setQuotes] = useState();
    const [likes, setLikes] = useState();
    const [isVerified, setIsVerified] = useState('No');
    const [theme, setTheme] = useState('light');

    

    const handleRadioChange = (event) => {
        setIsVerified(event.target.value); 
      };
    const handleThemeRadio = (event) => {
      setTheme(event.target.value); 
      };

      const tweetFormat = (tweet) => {
        const mentionRegex = /@([\w]+)/g;
        const hashtagRegex = /#([\wşçöğüıİ]+)/gi;
        const linkRegex = /(https?:\/\/[\w\.\/]+)/;
        const withMentions = tweet.replace(mentionRegex, '<span>@$1</span>');
        const withHashtags = withMentions.replace(hashtagRegex, '<span>#$1</span>');
        const withLinks = withHashtags.replace(linkRegex, '<a href="$1" target="_blank">$1</a>');
        return <div dangerouslySetInnerHTML={{ __html: withLinks }} />;
      };
      
      const handleAvatar=(e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          setAvatar(reader.result);
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      }
      
      const handlePostImage=(e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setPostImage(reader.result);
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      }
      

      const handleDate = (e) => {
        const selectedDate = e.target.value;
        const dateObj = new Date(selectedDate);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const day = dateObj.getDate();
        const month = months[dateObj.getMonth()];
        const year = dateObj.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;
        setDate(formattedDate);
      };

  const getImage = () =>{
    if (!divRef.current) return;
    html2canvas(divRef.current)
      .then((canvas) => {
        const screenshot = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = screenshot;
        link.download = 'screenshot.png';
        link.click();
      })
      .catch((error) => {
        console.error('Error capturing screenshot:', error);
      });
  }
      
  return (
    <Container style={{ border: '2px solid #ccc', borderRadius: '10px', padding: '20px' ,marginTop:'50px',color:'#5e5ee7',marginBottom:'5%'}}>
      <Row>
        <Col md="8" style={{ borderRight: '1px solid #ccc' }}>
          <h2>Customize Your Tweet</h2>
          <Form>
          <Row>
            <Col md="6" style={{ borderRight: '1px solid #ccc' }}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="location">Location</Label>
              <Input
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tweet">Post text</Label>
              <Input
                type="textarea"
                name="tweet"
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tweet">Profile Image</Label>
              <Input
                type="file"
                onChange={handleAvatar}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tweet">Post Image</Label>
              <Input
                type="file"
                onChange={handlePostImage}
              />
            </FormGroup>
            <FormGroup>
              <Label for="location">Post Date</Label>
              <Input
                type="text"
                name="post_date"
                value={post_date}
                onChange={(e) => setPostDate(e.target.value)}
              />
            </FormGroup>
            </Col>

            <Col md="6">
            <FormGroup>
              <Label for="name">Date</Label>
              <Input
                type="date"
                onChange={handleDate}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Views</Label>
              <Input
                type="number"
                value={view}
                 onChange={(e) => setView(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="username">Retweet</Label>
              <Input
                type="number"
                value={retweet}
                 onChange={(e) => setRetweet(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tweet">Quotes</Label>
              <Input
                type="number"
                name="tweet"
                value={quotes}
                 onChange={(e) => setQuotes(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tweet">Likes</Label>
              <Input
                type="number"
                name="avatar"
                value={likes}
                onChange={(e) => setLikes(e.target.value)}
              />
            </FormGroup>
            <div style={{display:'flex'}}>
            <FormGroup tag="fieldset">
            <Label for="tweet">Verified</Label>
            <div style={{ display: 'flex' }}>
                <FormGroup check>
                <Label check>
                    <Input 
                    type="radio" 
                    name="radio1" 
                    value="Yes" 
                    checked={isVerified === "Yes"} 
                    onChange={handleRadioChange}
                    />
                    Yes
                </Label>
                </FormGroup>&emsp;
                <FormGroup check>
                <Label check>
                <Input 
                type="radio" 
                name="radio1" 
                value="No" 
                checked={isVerified === "No"} 
                onChange={handleRadioChange}
                />
                No
            </Label>
            </FormGroup>
            </div>
            </FormGroup>
            <FormGroup tag="fieldset" style={{paddingLeft:'20px'}}>
            <Label for="tweet">Theme</Label>
            <div style={{ display: 'flex' }}>
                <FormGroup check>
                <Label check>
                    <Input 
                    type="radio" 
                    value="light" 
                    checked={theme === "light"} 
                    onChange={handleThemeRadio}
                    />
                    Light
                </Label>
                </FormGroup>&emsp;
                <FormGroup check>
                <Label check>
                <Input 
                type="radio" 
                value="dark" 
                checked={theme === "dark"} 
                onChange={handleThemeRadio}
                />
                Dark
            </Label>
            </FormGroup>
            </div>
            </FormGroup>
            </div>
            </Col>

            </Row>
          </Form>
        </Col>
        <Col md="4">
          <h2 className='text-center'>Preview</h2>
          <div className="instagram-container" ref={divRef} style={{backgroundColor:theme=='light'?'white':'black',color:theme=='light'?'black':'white'}}>
          <div className='insta-top-container'>
           <div style={{display:'flex'}}>
           {(avatar && <img src={avatar} className='avatar-pic' style={{border:'2px solid #ee2a7b'}}/>) || <img src={Avatar} className='avatar-pic' style={{border:'2px solid #ee2a7b'}}/>}
           <div>
           <div className='twitter-name-icon'>
              <div className="twitter-name">{name || 'Name'}</div>
                {isVerified == 'Yes' && <MdVerified width="19" height="19" color='blue'/>}
            </div>
            <div className='insta-username'>{location || 'location'}</div>
           </div>
           </div>
           <HiOutlineDotsVertical size="25px" style={{marginRight:'10px'}}/>
          </div>
          <div className="insta-content">
            {(post_image && <img src={post_image} className='upload-pic'/>) || <img src={Demo} className='upload-pic'/>}            
          </div>
          <div style={{padding:'10px'}}>
          <Row>
            <Col md="8">
            <FaRegHeart size="25px" style={{marginRight:'15px'}}/>
            <FaRegComment size="25px" style={{marginRight:'15px'}}/>
            <FiSend size="25px" />
            </Col>
            <Col md="4">
            <FaRegBookmark size="25px" style={{float:'right'}}/>
            </Col>
          </Row>
          </div>
          <div style={{padding:'0px 15px'}}>
            <div>{0} likes</div>
          </div>
          <div style={{padding:'5px 15px',display:'flex'}}>
            <div>
                <span className="twitter-name">{name || 'Name'}</span>
                <span className="clamp-text">This is simple text . Add #hastag and your desired text</span>
            </div>
          </div>
          <div style={{padding:'0px 15px',color:'gray'}}>
            <div>View all {0} comments</div>
          </div>
          <div style={{padding:'10px 0px 0px 15px'}}>
            <div>
            {(avatar && <img src={avatar} className='avatar-pic-below'/>) || <img src={Avatar} className='avatar-pic-below'/>}
            <span style={{color:'gray'}}>Add a comment...</span>
            </div>
          </div>
          <div style={{padding:'0px 15px',color:'gray'}}>
            <div>{post_date || 'a day ago'}</div>
          </div>
          </div>
          <Button onClick={getImage} color='primary'>Download</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Instagram;
