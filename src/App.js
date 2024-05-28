import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [tweet, setTweet] = useState();
  const [avatar, setAvatar] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const [view, setView] = useState();
  const [retweet, setRetweet] = useState();
  const [quotes, setQuotes] = useState();
  const [likes, setLikes] = useState();
  const [isVerified, setIsVerified] = useState(1);

  const avatarHandle = (e) => {
    const file = e.target.files[0];
    console.log(file)
  };

  return (
    <div>
      
      <div className="tweet-settings">
        <h3>Tweet Settings</h3>
        {/* Input Name and Changing Name  */}
        <label className="labelInput">Name</label>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* Input username and Changing Username  */}
        <label className="labelInput">Username</label>
        <input
          className="input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* Input Tweet and Changing Tweet  */}
        <label className="labelInput">Tweet</label>
        <input
          className="input"
          type="textarea"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        />
        {/* Input Avatar and Changing Avatar  */}
        <label className="labelInput">Avatar</label>
        <input className="input" type="file" onChange={avatarHandle} />
        {/* Input Time and Changing Time  */}
        <label className="labelInput">Time</label>
        <input
          className="input"
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        {/* Input Date and Changing Date  */}
        <label className="labelInput">Date</label>
        <input
          className="input"
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {/* Input View and Changing View  */}
        <label className="labelInput">View</label>
        <input
          className="input"
          type="text"
          value={view}
          onChange={(e) => setView(e.target.value)}
        />
        {/* Input Retweet and Changing Retweet  */}
        <label className="labelInput">Retweet</label>
        <input
          className="input"
          type="number"
          value={retweet}
          onChange={(e) => setRetweet(e.target.value)}
        />
        {/* Input Quotes and Changing Quotes  */}
        <label className="labelInput">Quotes</label>
        <input
          className="input"
          type="number"
          value={quotes}
          onChange={(e) => setQuotes(e.target.value)}
        />
        {/* Input Likes and Changing Likes  */}
        <label className="labelInput">Likes</label>
        <input
          className="input"
          type="number"
          value={likes}
          onChange={(e) => setLikes(e.target.value)}
        />
        {/* Input Likes and Changing Likes  */}
        <label>Doğrulanmış Hesap</label>
        <select
          onChange={(e) => setIsVerified(e.target.value)}
          defaultValue={isVerified}
        >
          <option value="1">Evet</option>
          <option value="0">Hayır</option>
        </select>
        <button className="btn">
          Generate
        </button>
        <div className="download-url">
          {/* {image && (
            <a ref={downloadRef} href={image} download="tweet.png">
              Download Screenshot
            </a>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default App;
