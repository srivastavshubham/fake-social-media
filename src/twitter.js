import React, { useState,useRef } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input,Button } from 'reactstrap';
import html2canvas from 'html2canvas';
import { MdVerified } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
import Avatar from './assets/images.png'

const FormPreviewBox = () => {
    
    const divRef = useRef(null);

    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [tweet, setTweet] = useState();
    const [avatar, setAvatar] = useState();
    const [hour, setHour] = useState(12);
    const [minute, setMinute] = useState(10);
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
        <Col md="7" style={{ borderRight: '1px solid #ccc' }}>
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
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tweet">Tweet</Label>
              <Input
                type="textarea"
                name="tweet"
                value={tweet}
                onChange={(e) => setTweet(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tweet">Avatar</Label>
              <Input
                type="file"
                onChange={handleAvatar}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tweet">Time</Label>
              <div  style={{display:'flex'}}>
              <Input
                type="number"
                name="hour"
                placeholder="hour"
                min="1" max="12"
                value={hour}
                onChange={(e) => setHour(e.target.value)}
                style={{marginRight:'20px'}}
              />
               <Input
                type="number"
                name="minute"
                placeholder="minute"
                min="0" max="59"
                value={minute}
                onChange={(e) => setMinute(e.target.value)}
                style={{marginRight:'20px'}}
              />
               <select name="period" value={time_format}  onChange={(e) => setTimeFormat(e.target.value)}>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
                </select> 
              </div>
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
        <Col md="5">
          <h2 className='text-center'>Preview</h2>
          <div className="preview-container" ref={divRef} style={{backgroundColor:theme=='light'?'white':'black',color:theme=='light'?'black':'white'}}>
          <div className='preview-top-container'>
            {(avatar && <img src={avatar} className='avatar-pic' />) || <img src={Avatar} className='avatar-pic' />}
            <div>
            <div className='twitter-name-icon'>
              <div className="twitter-name">{name || 'Name'}</div>
                {isVerified == 'Yes' && <MdVerified width="19" height="19" color='blue'/>}
            </div>
            <div className='twitter-username'>@{username || 'username'}</div>
            </div>
          </div>
          <div className="preview-content">
            <p>
              { tweet && tweetFormat(tweet) || 'Create you own tweet,tweet now'}
            </p>
          </div>
          <div className="preview-dates">
            <span>{`${hour}:${minute} ${time_format}`}</span>
            <span>·</span>
            <span>{date || 'September 07, 1996'}</span>
            <span>·</span>
            <span>
              <b>{view || 0}</b> Views
            </span>
          </div>
          <div className="preview-stats">
            <span>
              <b>{retweet || 0}</b> Retweets
            </span>
            <span>
              <b>{quotes || 0}</b> Quotes
            </span>
            <span>
              <b>{likes || 0}</b> Likes
            </span>
          </div>
          <div className="preview-actions">
            <span>
              {<FaRegComment color="#6e767e" width="20px" height="20px" />}
            </span>
            <span>
              {<FaRetweet color="#6e767e" width="20px" height="20px" />}
            </span>
            <span>
              {<CiHeart color="#6e767e" width="20px" height="20px" />}
            </span>
            <span>
              {<FiShare color="#6e767e" width="20px" height="20px" />}
            </span>
          </div>
          </div>
          <Button onClick={getImage} color='primary'>Download</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FormPreviewBox;
