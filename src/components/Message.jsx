import React from 'react';
import { Card } from 'react-bootstrap';

const Message = ({ message, author }) => (
  <Card>
    <Card.Body>
      <Card.Title>{author}</Card.Title>
      <Card.Text>{message}</Card.Text>
    </Card.Body>
  </Card>
);

export default Message;
