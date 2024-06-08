import React, { useState,useRef } from 'react'
import './whatsapp.css'
import html2canvas from 'html2canvas';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Avatar from './assets/images.png'
import { GoArrowLeft } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { PiVideoCameraBold } from "react-icons/pi";
import { IoVideocamOutline } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";

import { FaCamera } from "react-icons/fa";
import { IoMicOutline } from "react-icons/io5";
import { GrImage } from "react-icons/gr";

import { LuSticker } from "react-icons/lu";




export default function Instagramdm() {
  const divRef = useRef(null);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi...', type: 'sent' },
    { id: 2, text: 'Hello', type: 'received' },
    { id: 3, text: 'How are you', type: 'sent' },
    { id: 4, text: "I'm good", type: 'received' },
  ]);
  const [sender_message, setSenderMessage] = useState('');
  const [receiver_message, setReceiverMessage] = useState('');
  const [sender_error_message, setSenderErrorMessage] = useState('');
  const [receiver_error_message, setReceiverErrorMessage] = useState('');
  const [sender_error_toggle, setSenderErrorToggle] = useState(false);
  const [receiver_error_toggle, setReceiverErrorToggle] = useState(false);
  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [avatar, setAvatar] = useState();
  const [isOnline, setIsonline] = useState('online');
  const [icon_toggle, setIconToggle] = useState('show');
  const [msg_break, setMsgBreak] = useState();
  const [isInitialData, setIsInitialData] = useState(true);
  const [senderImage, setSenderImage] = useState(null);
  const [receiverImage, setReceiverImage] = useState(null);



  const handleStatus = (e) => {
    setIsonline(e.target.value);
  }
  const handleHeaderIcon = (e) => {
    setIconToggle(e.target.value);
  }
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (type === 'sent') {
      setSenderImage(URL.createObjectURL(file));
    } else {
      setReceiverImage(URL.createObjectURL(file));
    }
  }

  const handleSendMessage = (type) => {
    if( type === 'sent' && !senderImage &&(sender_message=='')){
      setSenderErrorMessage('Insert message')
      setSenderErrorToggle(true)
    }else if( type === 'received' && !receiverImage && (receiver_message=='')){
      setReceiverErrorMessage('Insert message')
      setReceiverErrorToggle(true)
    }else{
      setSenderErrorToggle(false)
      setReceiverErrorToggle(false)
      const newMessage = {
        id: messages.length + 1,
        text: type === 'sent' ? sender_message : receiver_message,
        type: type,
        image: type === 'sent' ? senderImage : receiverImage,
      };
      if (isInitialData) {
        setMessages([newMessage]);
        setIsInitialData(false);
      } else {
        setMessages([...messages, newMessage]);
      }
      if (type === 'sent') {
        setSenderMessage('')
      } else {
        setReceiverMessage('')
      }
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
    <Container style={{ border: '2px solid #ccc', borderRadius: '10px', padding: '20px', marginTop: '50px', color: '#ee2a7b', marginBottom: '5%' }}>
      <Row>
        <Col md="8" style={{ borderRight: '1px solid #ccc' }}>
          <h2>Customize Your Instagram Chat</h2>
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
                  <Label for="tweet">Profile Image</Label>
                  <Input
                    type="file"
                    onChange={handleAvatar}
                  />
                </FormGroup>
                <FormGroup tag="fieldset">
                  <Label for="tweet">Show / Hide Header Icon</Label>
                  <div style={{ display: 'flex' }}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="show"
                          checked={icon_toggle === "show"}
                          onChange={handleHeaderIcon}
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
                          checked={icon_toggle === "hide"}
                          onChange={handleHeaderIcon}
                        />
                        Hide
                      </Label>
                    </FormGroup>
                  </div>
                </FormGroup>
                <Label className='whatsapp-recepient-name'>Sender Message</Label>
                <span style={{color:"red",display:'flex',justifyContent:'center'}}>{sender_error_toggle && sender_error_message}</span>
                <FormGroup>
                  <Label for="tweet">Message</Label>
                  <Input
                    type="text"
                    name="name"
                    value={sender_message}
                    onChange={(e) => setSenderMessage(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Image Message</Label>
                  <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, 'sent')}
                />
                </FormGroup>
                <Button color='success' onClick={() => handleSendMessage('sent')}>Send</Button>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="tweet">Online Status</Label>
                  <Input
                    type="text"
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="tweet">Message Break</Label>
                  <Input
                    type="text"
                    name="break"
                    value={msg_break}
                    onChange={(e) => setMsgBreak(e.target.value)}
                  />
                </FormGroup>
                <FormGroup tag="fieldset">
                  <Label for="tweet">User Status</Label>
                  <div style={{ display: 'flex' }}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="radio2"
                          value="online"
                          checked={isOnline === "online"}
                          onChange={handleStatus}
                        />
                        Online
                      </Label>
                    </FormGroup>&emsp;
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="radio2"
                          value="offline"
                          checked={isOnline === "offline"}
                          onChange={handleStatus}
                        />
                        Offline
                      </Label>
                    </FormGroup>
                  </div>
                </FormGroup>
                <Label className='whatsapp-recepient-name'>Receiver Message</Label>
                <span style={{color:"red",display:'flex',justifyContent:'center'}}>{receiver_error_toggle && receiver_error_message}</span>
                <FormGroup>
                  <Label for="tweet">Message</Label>
                  <Input
                    type="text"
                    name="name"
                    value={receiver_message}
                    onChange={(e) => setReceiverMessage(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Image Message</Label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'received')}
                  />
                </FormGroup>
                <Button color='success' onClick={() => handleSendMessage('received')}>Send</Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col md="4">
          <h2 className='whatsapp-text-center'>Preview</h2>
          <div className='whatsapp-main-container'  ref={divRef} style={{border:'1px solid gray'}}>
            <div className='whatsapp-chat-header' style={{backgroundColor:'#FAFAFA',color:'black',borderBottom:'1px solid gray'}}>
              <div className='whatsapp-chat-header-left'>
                <GoArrowLeft size='25px' />&nbsp;
                <div className="fb-profile-container">
                {(avatar && <img src={avatar} className='whatsapp-avatar' />) || <img src={Avatar} className='whatsapp-avatar' />}
                {isOnline=='online' && <span className="status-indicator online"></span>}
                </div>
                <div style={{marginLeft:'10px'}}>
                  <div style={{ fontSize: '15px', fontWeight: 'bold' }}>{name || 'Name'}</div>
                  <div style={{ fontSize: '12px',color:'gray' }}>{isOnline == 'online' ? status || 'Active Now' : ''}</div>
                </div>
              </div>
              {icon_toggle=='show' && 
              <div className='whatsapp-chat-header-right'>
                <FiPhone size="25px" style={{ marginRight: '20px' }} />
                <IoVideocamOutline size="30px" style={{ marginRight: '10px' }} />
              </div>
              }
            </div>
            <div className='whatsapp-chat-body' style={{ backgroundColor:'white' }}>
                <div className='instadm-message-date'>{msg_break || "Todat 10:12 AM"}</div>
              {messages.map(message => (
                <div className='whatsapp-message-container' style={{ justifyContent: message.type == 'sent' && 'flex-end' }}>
                  { message.type != 'sent' && ((avatar && <img src={avatar} className='instadm-msg-avatar' />) || <img src={Avatar} className='instadm-msg-avatar' />)}
                  <div className='whatsapp-message-bubble' style={{padding: "5px 8px", backgroundColor: message.type == 'sent' ? '#f5f5f5' : 'white',border:message.type == 'sent' ? 'none':'1px solid gray' }}>
                    <div>{message.image && <img src={message.image} alt="uploaded" style={{ maxWidth: '200px', maxHeight: '200px' }} />}</div>
                      <div className='whatsapp-message-text'>{message.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className='whatsapp-chat-input' style={{ padding: '10px 15px', backgroundColor:'white' }}>
              <div className="whatsapp-comment-input-section">
                <div className="whatsapp-comment-icons-left" style={{padding:'5px'}}>
                  <div style={{backgroundColor:'#31a0f1',padding:'6px',borderRadius:'50%'}}>
                  <FaCamera size="22px" style={{ color: 'white' }} />
                  </div>
                </div>
                <input className="whatsapp-comment-input" type="text" placeholder="Message..." style={{padding:'13px'}}/>
                <div className="whatsapp-comment-icons" style={{padding:'12px'}}>
                  <IoMicOutline size="23px" style={{ marginRight: '10px', color: 'gray' }} />
                  <GrImage size="23px" style={{ marginRight: '10px', color: 'gray' }} />
                  <FaCirclePlus size="23px" style={{ marginRight: '5px', color: 'gray' }} />
                </div>
              </div>
            </div>
          </div>
          <br/>
          <Button onClick={getImage} color='success'>Download</Button>
        </Col>
      </Row>
    </Container>
  )
}
