import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your server URL

const ExampleComponent = () => {
  useEffect(() => {
    // ComponentDidMount
    socket.on('message', (data) => {
      console.log('Received message:', data);
    });

    return () => {
      // ComponentWillUnmount
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('message', 'Hello from React client');
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default ExampleComponent;
