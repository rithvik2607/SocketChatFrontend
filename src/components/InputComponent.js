import React from 'react';

const Input = ({ message, setMessage, sendMessage }) => {
  return(
    <form className="container mx-auto px-1 flex items-center justify-center">
      <input
        className="h-9 w-4/12 pl-2 my-0.5 focus:outline-none "
        type="string"
        placeholder="Send a message...."
        value={message}
        onChange = {({target: {value} }) => setMessage(value)}
        onKeyPress = {event => event.key === 'Enter' ? sendMessage(event) : null }
      />
      <button className="text-white py-1.5 px-12 bg-blue-400 focus:outline-none" onClick={(event) => sendMessage(event)}>Send</button>
    </form>
  );
}

export default Input;
