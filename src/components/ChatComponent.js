import React,{ useState, useEffect } from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';

import InfoBar from './InfoBarComponent';
import Messages from './MessagesComponent';
import Input from './InputComponent';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://socket-chat-react.herokuapp.com/';

  useEffect(() => {
    const {name, room} = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", {name, room}, (error) => {
      if(error) {
        alert(error);
      }
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    }
  }, [ENDPOINT,location.search]);

  useEffect(() => {
    console.log('entered');
    socket.on('message', message => {
      setMessages([ ...messages, message ]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  console.log(message, messages);

  return(
    <div>
      <p className="text-4xl text-center text-white mt-10">Chat</p>
      <InfoBar room={room} />
      <Messages messages={messages} name={name} />
      <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
    </div>
  );
}

export default Chat;
