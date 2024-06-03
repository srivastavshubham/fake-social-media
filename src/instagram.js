import React, { useState,useRef } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input,Button } from 'reactstrap';
import html2canvas from 'html2canvas';
import { MdVerified } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Avatar from './assets/images.png'
import Demo from './assets/logo.webp'

const Instagram = () => {
    
    const divRef = useRef(null);

    const [name, setName] = useState();
    const [location, setLocation] = useState();
    const [post, setPost] = useState();
    const [avatar, setAvatar] = useState();
    const [post_image, setPostImage] = useState();
    const [post_date, setPostDate] = useState();
    const [likes, setLikes] = useState();
    const [caption, setCaption] = useState();
    const [comment, setComment] = useState();
    const [more, setMore] = useState('show');
    const [story_circle, setStoryCircle] = useState('show');
    const [toggle_location, setToggleLocation] = useState('show');
    const [toggle_reaction, setReaction] = useState('not liked');
    const [toggle_follow, setFollow] = useState('follow');
    const [isVerified, setIsVerified] = useState('No');
    const [theme, setTheme] = useState('light');

    

    const handleRadioChange = (event) => {
        setIsVerified(event.target.value); 
      };
    const handleThemeRadio = (event) => {
      setTheme(event.target.value); 
      };
    const handleShowHideMore=(e)=>{
        setMore(e.target.value); 
      }
    const handleLocationVisible=(e)=>{
        setToggleLocation(e.target.value); 
        }
      
      const handleStoryCircle=(e)=>{
        setStoryCircle(e.target.value); 
      }
      const handleReaction=(e)=>{
        setReaction(e.target.value); 
      }
      const handleFollow=(e)=>{
        setFollow(e.target.value); 
      }

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
    <Container style={{ border: '2px solid #ccc', borderRadius: '10px', padding: '20px' ,marginTop:'50px',color:'#ee2a7b',marginBottom:'5%'}}>
      <Row>
        <Col md="8" style={{ borderRight: '1px solid #ccc' }}>
          <h2>Customize Your Instagram Post</h2>
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
            <FormGroup>
              <Label for="tweet">Likes</Label>
              <Input
                type="number"
                name="avatar"
                value={likes}
                onChange={(e) => setLikes(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tweet">No. of Comment</Label>
              <Input
                type="text"
                name="tweet"
                value={comment}
                 onChange={(e) => setComment(e.target.value)}
              />
            </FormGroup>
            </Col>

            <Col md="6">
            <FormGroup>
              <Label for="tweet">Caption</Label>
              <Input
                type="text"
                name="tweet"
                value={caption}
                 onChange={(e) => setCaption(e.target.value)}
              />
            </FormGroup>
            <FormGroup tag="fieldset">
            <Label for="tweet">Show or Hide more in caption</Label>
            <div style={{ display: 'flex' }}>
                <FormGroup check>
                <Label check>
                    <Input 
                    type="radio" 
                    name="radio2" 
                    value="show" 
                    checked={more === "show"} 
                    onChange={handleShowHideMore}
                    />
                    Show
                </Label>
                </FormGroup>&emsp;
                <FormGroup check>
                <Label check>
                <Input 
                type="radio" 
                name="radio2" 
                value="hide" 
                checked={more === "hide"} 
                onChange={handleShowHideMore}
                />
                Hide
            </Label>
            </FormGroup>
            </div>
            </FormGroup>

            <FormGroup tag="fieldset">
            <Label for="tweet">Story Circle</Label>
            <div style={{ display: 'flex' }}>
                <FormGroup check>
                <Label check>
                    <Input 
                    type="radio" 
                    name="radio3" 
                    value="show" 
                    checked={story_circle === "show"} 
                    onChange={handleStoryCircle}
                    />
                    Show
                </Label>
                </FormGroup>&emsp;
                <FormGroup check>
                <Label check>
                <Input 
                type="radio" 
                name="radio3" 
                value="hide" 
                checked={story_circle === "hide"} 
                onChange={handleStoryCircle}
                />
                Hide
            </Label>
            </FormGroup>
            </div>
            </FormGroup>
            <FormGroup tag="fieldset">
            <Label for="tweet">Location Visible</Label>
            <div style={{ display: 'flex' }}>
                <FormGroup check>
                <Label check>
                    <Input 
                    type="radio" 
                    name="radio4" 
                    value="show" 
                    checked={toggle_location === "show"} 
                    onChange={handleLocationVisible}
                    />
                    Show
                </Label>
                </FormGroup>&emsp;
                <FormGroup check>
                <Label check>
                <Input 
                type="radio" 
                name="radio4" 
                value="hide" 
                checked={toggle_location === "hide"} 
                onChange={handleLocationVisible}
                />
                Hide
            </Label>
            </FormGroup>
            </div>
            </FormGroup>
            <FormGroup tag="fieldset">
            <Label for="tweet">Reaction on Post</Label>
            <div style={{ display: 'flex' }}>
                <FormGroup check>
                <Label check>
                    <Input 
                    type="radio" 
                    name="radio5" 
                    value="liked" 
                    checked={toggle_reaction === "liked"} 
                    onChange={handleReaction}
                    />
                    Liked
                </Label>
                </FormGroup>&emsp;
                <FormGroup check>
                <Label check>
                <Input 
                type="radio" 
                name="radio5" 
                value="not liked" 
                checked={toggle_reaction === "not liked"} 
                onChange={handleReaction}
                />
                Not Liked
            </Label>
            </FormGroup>
            </div>
            </FormGroup>
            <FormGroup tag="fieldset">
            <Label for="tweet">Follow or Following</Label>
            <div style={{ display: 'flex' }}>
                <FormGroup check>
                <Label check>
                    <Input 
                    type="radio" 
                    name="radio6" 
                    value="follow" 
                    checked={toggle_follow === "follow"} 
                    onChange={handleFollow}
                    />
                    Follow
                </Label>
                </FormGroup>&emsp;
                <FormGroup check>
                <Label check>
                <Input 
                type="radio" 
                name="radio6" 
                value="following" 
                checked={toggle_follow === "following"} 
                onChange={handleFollow}
                />
                Following
            </Label>
            </FormGroup>
            </div>
            </FormGroup>
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
            <FormGroup tag="fieldset">
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
            </Col>

            </Row>
          </Form>
        </Col>
        <Col md="4">
          <h2 className='text-center'>Preview</h2>
          <div className="instagram-container" ref={divRef} style={{backgroundColor:theme=='light'?'white':'black',color:theme=='light'?'black':'white'}}>
          <div className='insta-top-container'>
           <div style={{display:'flex'}}>
           {(avatar && <img src={avatar} className='avatar-pic' style={{border:story_circle=='show'?'2px solid #ee2a7b':'none'}}/>) || <img src={Avatar} className='avatar-pic' style={{border:story_circle=='show'?'2px solid #ee2a7b':'none'}}/>}
           <div>
           <div className='twitter-name-icon'>
              <div className="twitter-name" style={{paddingTop:toggle_location=='hide'?'10px':''}}>{name || 'Name'}</div>
                {isVerified == 'Yes' && <MdVerified width="19" height="19" color='blue'/>}
            </div>
            {toggle_location=='show'? <div className='insta-username'>{location || 'location'}</div>:''}
           </div>
           </div>
           <div>
            <button className='follow-button'>{toggle_follow == 'follow'? "Follow":"Following"}</button>
           <HiOutlineDotsVertical size="25px" style={{marginRight:'10px'}}/>
           </div>
          </div>
          <div className="insta-content">
            {(post_image && <img src={post_image} className='upload-pic'/>) || <img src={Demo} className='upload-pic'/>}            
          </div>
          <div style={{padding:'10px'}}>
          <Row>
            <Col md="8">
            {toggle_reaction=='not liked'?
            <FaRegHeart size="25px" style={{marginRight:'15px'}}/>:
            <FaHeart size="25px" color='red' style={{marginRight:'15px'}}/>
            }
            <FaRegComment size="25px" style={{marginRight:'15px'}}/>
            <FiSend size="25px" />
            </Col>
            <Col md="4">
            <FaRegBookmark size="25px" style={{float:'right'}}/>
            </Col>
          </Row>
          </div>
          <div style={{padding:'0px 15px'}}>
            <div>{likes || 0} likes</div>
          </div>
          <div style={{padding:'5px 15px'}}>
            <div>
                <span className="twitter-name">{name || 'Name'}</span>
                <span className="caption-text">{caption || 'This is auto generated caption . Add  your desired caption'} {more == 'show' && <span style={{color:'gray'}}>...more</span>}</span>
            </div>
          </div>
          <div style={{padding:'0px 15px',color:'gray'}}>
            <div>View all {comment || 0} comments</div>
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
          <Button onClick={getImage} color='danger'>Download</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Instagram;
