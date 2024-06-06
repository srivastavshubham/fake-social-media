import React, { useState,useRef } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input,Button } from 'reactstrap';
import html2canvas from 'html2canvas';
import Avatar from './assets/images.png'
import Demo from './assets/logo.webp'
import haha from './assets/facebook-haha.png'
import like from './assets/facebook-like.png'
import love from './assets/facebook-love.png'
import sad from './assets/facebook-sad.png'
import angry from './assets/facebook-angry.png'
import wow from './assets/facebook-wao.png'
import { LuThumbsUp } from "react-icons/lu";
import { FaThumbsUp } from "react-icons/fa6";
import { VscComment } from "react-icons/vsc";
import { GrEmoji } from "react-icons/gr";
import { MdPublic } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { AiOutlineRetweet } from "react-icons/ai";
import { BsCardImage } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";



export default function Linkedin() {
    
    const divRef = useRef(null);
    const [name, setName] = useState();
    const [title, setTitle] = useState();
    const [tags, setTags] = useState();
    const [location, setLocation] = useState();
    const [post, setPost] = useState();
    const [timing, setTiming] = useState();
    const [avatar, setAvatar] = useState();
    const [post_image, setPostImage] = useState();
    const [share, setShare] = useState();
    const [likes, setLikes] = useState();
    const [toggle_title, setToggleTitle] = useState('show');
    const [toggle_tags, setToggleTags] = useState('show');
    const [comment, setComment] = useState();
    const [visibility, setVisibility] = useState('public');
    const [toggle_reaction, setReaction] = useState('not liked');
    const [theme, setTheme] = useState('light');
    const [checkedItems, setCheckedItems] = useState({
        haha: true,
        like: true,
        love: true,
        wow: false,
        sad: false,
        angry: false,
      });
    
    const handleThemeRadio = (event) => {
      setTheme(event.target.value); 
      };
    const handleToggleTitle = (event) => {
        setToggleTitle(event.target.value); 
    };
    const handleToggleTag = (event) => {
        setToggleTags(event.target.value); 
    };  
    const handleVisiblity=(e)=>{
        setVisibility(e.target.value); 
      }
    const handleReaction=(e)=>{
        setReaction(e.target.value); 
      }
    const handleCheckBox = (event) => {
        const { name, checked } = event.target;
        setCheckedItems((prevState) => ({
          ...prevState,
          [name]: checked,
        }));
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
    <Container style={{ border: '2px solid #ccc', borderRadius: '10px', padding: '20px' ,marginTop:'50px',color:'#0077b5',marginBottom:'5%'}}>
      <Row>
        <Col md="7" style={{ borderRight: '1px solid #ccc'}}>
          <h2>Customize Your LinkedIn Post</h2>
          <Form style={{ paddingTop:"50px" }}>
          <Row>
            <Col md="6" style={{ borderRight: '1px solid #ccc'}}>
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
              <Label for="name">Title</Label>
              <Input
                type="text"
                name="tags"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Tag and details</Label>
              <Input
                type="text"
                name="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="location">Designation and Company Name</Label>
              <Input
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="location">Post timing</Label>
              <Input
                type="text"
                name="location"
                value={timing}
                onChange={(e) => setTiming(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tweet">Post Caption</Label>
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
              <Label for="tweet">No. of Likes</Label>
              <Input
                type="text"
                name="avatar"
                value={likes}
                onChange={(e) => setLikes(e.target.value)}
              />
            </FormGroup>
            </Col>

            <Col md="6">          
            <FormGroup>
              <Label for="tweet">No. of Comment</Label>
              <Input
                type="text"
                name="tweet"
                value={comment}
                 onChange={(e) => setComment(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="location">Repost</Label>
              <Input
                type="text"
                name="share"
                value={share}
                onChange={(e) => setShare(e.target.value)}
              />
            </FormGroup>
            <FormGroup tag="fieldset">
            <Label for="tweet">Toggle Title</Label>
            <div style={{ display: 'flex' }}>
                <FormGroup check>
                <Label check>
                    <Input 
                    type="radio" 
                    name="radio7" 
                    value="show" 
                    checked={toggle_title === "show"} 
                    onChange={handleToggleTitle}
                    />
                    Show
                </Label>
                </FormGroup>&emsp;
                <FormGroup check>
                <Label check>
                <Input 
                type="radio" 
                name="radio7" 
                value="hide" 
                checked={toggle_title === "hide"} 
                onChange={handleToggleTitle}
                />
                Hide
            </Label>
            </FormGroup>
            </div>
            </FormGroup>
            <FormGroup tag="fieldset">
            <Label for="tweet">Toggle Tags and Details</Label>
            <div style={{ display: 'flex' }}>
                <FormGroup check>
                <Label check>
                    <Input 
                    type="radio" 
                    name="radio6" 
                    value="show" 
                    checked={toggle_tags === "show"} 
                    onChange={handleToggleTag}
                    />
                    Show
                </Label>
                </FormGroup>&emsp;
                <FormGroup check>
                <Label check>
                <Input 
                type="radio" 
                name="radio6" 
                value="hide" 
                checked={toggle_tags === "hide"} 
                onChange={handleToggleTag}
                />
                Hide
            </Label>
            </FormGroup>
            </div>
            </FormGroup>
            <FormGroup tag="fieldset">
            <Label for="tweet">Visibility</Label>
            <div style={{ display: 'flex' }}>
                <FormGroup check>
                <Label check>
                    <Input 
                    type="radio" 
                    name="radio3" 
                    value="public" 
                    checked={visibility === "public"} 
                    onChange={handleVisiblity}
                    />
                    Public
                </Label>
                </FormGroup>&emsp;
                <FormGroup check>
                <Label check>
                <Input 
                type="radio" 
                name="radio3" 
                value="friends" 
                checked={visibility === "friends"} 
                onChange={handleVisiblity}
                />
                Friends
            </Label>
            </FormGroup>&emsp;
            <FormGroup check>
                <Label check>
                    <Input 
                    type="radio" 
                    name="radio3" 
                    value="onlyme" 
                    checked={visibility === "onlyme"} 
                    onChange={handleVisiblity}
                    />
                    Only Me
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
            <Label for="tweet">Reaction Emoji</Label> <span style={{fontSize:'12px'}}>(for better experience select only 3 item)</span>
            <div style={{ display: 'flex' }}>
                <FormGroup check>
                <Label check>
                    <Input type="checkbox" name='haha' checked={checkedItems.haha} onChange={handleCheckBox} />
                    Haha
                </Label>
                </FormGroup>&emsp;
                 <FormGroup check>
                <Label check>
                    <Input type="checkbox" name='like' checked={checkedItems.like} onChange={handleCheckBox} />
                    Like
                </Label>
                </FormGroup>&emsp;
                 <FormGroup check>
                <Label check>
                    <Input type="checkbox" name='love' checked={checkedItems.love} onChange={handleCheckBox} />
                     Love
                </Label>
                </FormGroup>&emsp;
                 <FormGroup check>
                <Label check>
                    <Input type="checkbox" name='wow' checked={checkedItems.wow} onChange={handleCheckBox} />
                    Wow
                </Label>
                </FormGroup>
            </div>
            <div style={{ display: 'flex' }}>
                 <FormGroup check>
                <Label check>
                    <Input type="checkbox" name='sad' checked={checkedItems.sad} onChange={handleCheckBox} />
                    Sad
                </Label>
                </FormGroup>&emsp;
                 <FormGroup check>
                <Label check>
                    <Input type="checkbox" name='angry' checked={checkedItems.angry} onChange={handleCheckBox} />
                    Angry
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
        <Col md="5">
          <h2 className='text-center'>Preview</h2>
          <div className="fb-container" ref={divRef} style={{backgroundColor:theme=='light'?'white':'black',color:theme=='light'?'black':'white'}}>
          <div className="fb-post-container">
            <div className="fb-post-header">
                <div className="fb-profile-container">
                {(avatar && <img src={avatar} className='avatar-pic' />) || <img src={Avatar} className='avatar-pic' />}
                </div>
                <div className="fb-post-info">
                <div className="fb-post-user">
                    <strong>{name || "Username" }</strong> {toggle_title=='show' ? title || 'He/Him' :''} • {toggle_tags=='show' ? tags || '1st' :''}
                    <div className="fb-post-options"><HiOutlineDotsHorizontal size="25px"/>&emsp;<RxCross2 size="22px"/></div>
                    
                </div>
                <div className="fb-post-location">{location || 'Sr.Software Engineer at TCS'}</div>
                <div className="fb-post-time">
                    {timing || "Yesterday at 4:45am"} • <span className="post-icon">&nbsp;
                    {visibility=='public'? <MdPublic size="15px"/> :visibility=='friends'? <FaUserFriends size="15px"/> :<FaLock size="15px"/>}
                    </span>
                </div>
                </div>
            </div>
            <div className="fb-post-content">
                {post || "Just write your caption for post.This is system generated text."}
            </div>
          </div>
          <div className="fb-content">
            {(post_image && <img src={post_image} className='upload-pic'/>) || <img src={Demo} className='upload-pic'/>}            
          </div>
          <div style={{padding:'10px'}}>
           <div className="interactions-container">
            <div className="reactions">
                 {checkedItems.haha && <img className="reaction-icon" src={haha} alt="Laugh" />}
                 {checkedItems.like && <img className="reaction-icon" src={like} alt="Laugh" />}
                 {checkedItems.love && <img className="reaction-icon" src={love} alt="Laugh" />}
                 {checkedItems.wow && <img className="reaction-icon" src={wow} alt="Laugh" />}
                 {checkedItems.sad && <img className="reaction-icon" src={sad} alt="Laugh" />}
                 {checkedItems.angry && <img className="reaction-icon" src={angry} alt="Laugh" />}
                <span className="reaction-count">{likes || "100k"}</span>
            </div>
            <div className="comments-shares">
                <span className="comments-count">{comment || "21"} comments</span>
                <span className="shares-count">{share || "10"} repost</span>
            </div>
            </div>
          </div>
            <div className="actions-container">
            <div className="action-buttons">
                <div className="action-button">
                {toggle_reaction=='liked'?
                <span style={{color:'#0077b5'}}>
                <FaThumbsUp size="23px" style={{marginRight:'5px'}}/> Like</span>:
                <span><LuThumbsUp size="23px" style={{marginRight:'5px'}}/> Like</span>}
                </div>
                <div className="action-button">
                <VscComment size="23px" style={{marginRight:'5px'}}/> Comment
                </div>
                <div className="action-button">
                <AiOutlineRetweet size="23px" style={{marginRight:'5px'}}/> Repost
                </div>
                <div className="action-button">
                <IoIosSend size="23px" style={{marginRight:'5px'}}/> Send
                </div>
            </div>
            <div className="linkedin-comments-section">
                <div className="comment-input-section">
                {(avatar && <img src={avatar} className='avatar-pic-below' />) || <img src={Avatar} className='avatar-pic-below' />}
                <input className="linkedin-comment-input" type="text" placeholder="Write a comment..." />
                <div className="linkedin-comment-icons">
                    <GrEmoji size="23px" style={{marginRight:'5px',color:'gray'}}/>
                    <BsCardImage size="23px" style={{marginRight:'5px',color:'gray'}}/>
                </div>
                </div>
            </div>
            </div>
          </div>
          <Button onClick={getImage} color='primary'>Download</Button>
        </Col>
      </Row>
    </Container>
  );
};

