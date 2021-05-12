import './MatchChat.css';
import { useState } from 'react';
import send from '../img/send.png';

function MatchChat() {
  const [messages, setMessages] = useState([]);
  const [userInput, setuserInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setuserInput("");
    setMessages([...messages, userInput]);
  };

  return (
    <>
      <div className='match-chat'>
      <ul className="messages">
        <li className="message-first">
        Hello there !
        </li>
        <li className="message-first">
        How r u ?
        </li>
        {messages.map((message, index) => (
          <li key={index} className="message">
            {message}
          </li>
        ))}
      </ul>
      </div>
      <div className='match-input'>
      <form onSubmit={handleSubmit} className="chat-box">
          <input
            className="input-chat"
            type="text"
            value={userInput}
            onChange={(event) => setuserInput(event.target.value)}
          />
          <button className="send-btn"><img alt="" src={send} className="send-btn-icon"/></button>
        </form>
      </div>
    </>
  );
}

export default MatchChat;
