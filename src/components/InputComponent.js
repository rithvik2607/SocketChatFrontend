import React from 'react';

const Input = ({ message, setMessage, sendMessage }) => {
  return(
    <form className="container mx-auto flex items-center justify-center">
      <input
        className="h-8 w-5/12 pl-2 focus:outline-none"
        type="string"
        placeholder="Send a message...."
        value={message}
        onChange = {({target: {value} }) => setMessage(value)}
        onKeyPress = {event => event.key === 'Enter' ? sendMessage(event) : null }
      />
      <button className="text-white py-1 px-6 bg-blue-400 focus:outline-none" onClick={(event) => sendMessage(event)}>Send</button>
    </form>
  );
}

export default Input;
