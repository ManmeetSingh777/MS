import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './ChatPage.css';

const socket = io('http://localhost:5000'); // Adjust this URL according to your setup

const ChatPage = () => {
  const { user } = useAuth();
  const { appointmentId } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit('joinRoom', { appointmentId });

    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/api/chat/${appointmentId}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();

    return () => {
      socket.disconnect();
    };
  }, [appointmentId]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('sendMessage', { appointmentId, sender: user.email, message });
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender === user.email ? 'own' : ''}`}>
            <strong>{msg.sender}</strong>: {msg.message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
