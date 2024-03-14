import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import io from 'socket.io-client';
import Message from './Message';

const socket = io('http://localhost:3001'); // Adjust this to your server's address

const ChatApp = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('message', (msg) => {
      setChat([...chat, msg]);
    });
  }, [chat]);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <Container>
      <h2>Chat</h2>
      {chat.map((msg, index) => (
        <Message key={index} message={msg.text} author={msg.author} />
      ))}
      <Form onSubmit={sendMessage}>
        <Form.Group>
          <Form.Control
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message..."
          />
        </Form.Group>
        <Button type="submit">Send</Button>
      </Form>
    </Container>
  );
};

export default ChatApp;
