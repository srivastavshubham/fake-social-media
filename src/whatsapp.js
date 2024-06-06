import React, { useState } from 'react'
import './whatsapp.css'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Avatar from './assets/images.png'
import { GoArrowLeft } from "react-icons/go";
import { FaVideo } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { IoAttachSharp } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { IoMicCircle } from "react-icons/io5";
import Demo from './assets/bg-whatsapp.png'



export default function Whatsapp() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi...', time: '11:20 AM', type: 'sent' },
    { id: 2, text: 'Hello', time: '11:21 AM', type: 'received' },
    { id: 3, text: 'How are you', time: '11:21 AM', type: 'sent' },
    { id: 4, text: "I'm good", time: '11:22 AM', type: 'received' },
  ]);
  const [sender_message, setSenderMessage] = useState('');
  const [sender_message_time, setSenderMessageTime] = useState('');
  const [receiver_message, setReceiverMessage] = useState('');
  const [sender_error_message, setSenderErrorMessage] = useState('');
  const [receiver_error_message, setReceiverErrorMessage] = useState('');
  const [receiver_message_time, setReceiverMessageTime] = useState('');
  const [sender_error_toggle, setSenderErrorToggle] = useState(false);
  const [receiver_error_toggle, setReceiverErrorToggle] = useState(false);
  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [avatar, setAvatar] = useState();
  const [post_image, setPostImage] = useState();
  const [isOnline, setIsonline] = useState('online');
  const [msg_break, setMsgBreak] = useState();
  const [isInitialData, setIsInitialData] = useState(true);
  const [senderImage, setSenderImage] = useState(null);
  const [receiverImage, setReceiverImage] = useState(null);



  const handleStatus = (e) => {
    setIsonline(e.target.value);
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

  const handlePostImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPostImage(reader.result);
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
    if( type === 'sent' && !senderImage &&(sender_message=='' || sender_message_time=="")){
      setSenderErrorMessage('Insert message and time both')
      setSenderErrorToggle(true)
    }else if( type === 'received' && !receiverImage && (receiver_message=='' || receiver_message_time=="")){
      setReceiverErrorMessage('Insert message and time both')
      setReceiverErrorToggle(true)
    }else{
      setSenderErrorToggle(false)
      setReceiverErrorToggle(false)
      const newMessage = {
        id: messages.length + 1,
        text: type === 'sent' ? sender_message : receiver_message,
        time:  type === 'sent' ? sender_message_time : receiver_message_time,
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
        setSenderMessageTime('')
      } else {
        setReceiverMessage('')
        setReceiverMessageTime('')
      }
    }
  }

  return (
    <Container style={{ border: '2px solid #ccc', borderRadius: '10px', padding: '20px', marginTop: '50px', color: '#25D366', marginBottom: '5%' }}>
      <Row>
        <Col md="7" style={{ borderRight: '1px solid #ccc' }}>
          <h2>Customize Your Whatsapp Chat</h2>
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
                <FormGroup>
                  <Label for="tweet">Background Image</Label>
                  <Input
                    type="file"
                    onChange={handlePostImage}
                  />
                </FormGroup>
                <Label className='recepient-name'>Sender Message</Label>
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
                  <Label for="tweet">Time</Label>
                  <Input
                    type="text"
                    name="name"
                    value={sender_message_time}
                    onChange={(e) => setSenderMessageTime(e.target.value)}
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
                <Label className='recepient-name' style={{paddingTop:'10px'}}>Receiver Message</Label>
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
                  <Label for="tweet">Time</Label>
                  <Input
                    type="text"
                    name="name"
                    value={receiver_message_time}
                    onChange={(e) => setReceiverMessageTime(e.target.value)}
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
        <Col md="5">
          <h2 className='text-center'>Preview</h2>
          <div className='whatsapp-main-container'>
            <div className='chat-header'>
              <div className='chat-header-left'>
                <GoArrowLeft size='25px' />&nbsp;
                {(avatar && <img src={avatar} className='avatar' />) || <img src={Avatar} className='avatar' />}
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 'bold' }}>{name || 'Name'}</div>
                  <div style={{ fontSize: '12px' }}>{isOnline == 'online' ? status || 'Online' : ''}</div>
                </div>
              </div>
              <div className='chat-header-right'>
                <FaVideo size="25px" style={{ marginRight: '20px' }} />
                <IoIosCall size="25px" style={{ marginRight: '20px' }} />
                <HiDotsVertical size="25px" />
              </div>
            </div>
            <div className='chat-body' style={{ backgroundImage: post_image ? `url(${post_image})` : `url(${Demo})` }}>
              <div className='message-date-container'>
                <div className='message-date'>{msg_break || "TODAY"}</div>
              </div>
              {messages.map(message => (
                <div className='message-container' style={{ justifyContent: message.type == 'sent' && 'flex-end' }}>
                  <div className='message-bubble' style={{ backgroundColor: message.type == 'sent' ? '#dcf8c6' : 'white' }}>
                    <div>{message.image && <img src={message.image} alt="uploaded" style={{ maxWidth: '200px', maxHeight: '200px' }} />}</div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                      <div className='message-text'>{message.text}</div>
                      <div className='message-time'>{message.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='chat-input' style={{ padding: '10px 15px', backgroundImage: `url(${Demo})` }}>
              <div className="whatsapp-comment-input-section">
                <div className="whatsapp-comment-icons-left">
                  <CgSmileMouthOpen size="23px" style={{ marginRight: '5px', color: 'gray' }} />
                </div>
                <input className="whatsapp-comment-input" type="text" placeholder="Type a message" />
                <div className="whatsapp-comment-icons">
                  <IoAttachSharp size="23px" style={{ marginRight: '5px', color: 'gray' }} />
                  <CiCamera size="23px" style={{ marginRight: '5px', color: 'gray' }} />
                </div>
                <IoMicCircle size="45px" color='#075e54' />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
