import { Navbar } from './Navbar';
import {Footer} from './Footer'
import React, { useState } from 'react';
import '../Components/Style.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSend = (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value;
    if (message.trim() !== '') {
      // Add user message to the chat
      setMessages((prevMessages) => [...prevMessages, { text: message, isAutoReply: false }]);

      // Check if the user message triggers an auto-reply
      if (message.toLowerCase().includes('')) {
        const autoReply = 'Thank you for contacting Nanandkar Shoe Mart! How can we assist you today?';
        // Add auto-reply to the chat
        setMessages((prevMessages) => [...prevMessages, { text: autoReply, isAutoReply: true }]);
      }

      e.target.elements.message.value = '';
    }
  };

  return (
    <div>
      <Navbar />


      <div id="chatbg">

        <div className="chat-container">
          <div id="chatus"><h1>Chat with us</h1></div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.isAutoReply ? 'auto-reply' : ''}`}>
                {message.text}
              </div>
            ))}
          </div>
          <form className="chat-form" onSubmit={handleMessageSend}>
            <input
              type="text"
              name="message"
              placeholder="Type your message..."
              className="message-input"
            />
            <button type="submit" className="send-button">
              Send
            </button>
          </form>
        </div>
      </div>
      <footer/>
    </div>
  );
};

export default Chat;
