import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './MessageComponent';

const Messages = ({messages, name}) => {
  return(
    <div className="flex items-center justify-center">
      <ScrollToBottom className="bg-white overflow-auto h-96 w-5/12">
        {messages.map((message, i) => <div id={i}><Message message={message} name={name} /></div>)}
      </ScrollToBottom>
    </div>
  );
}

export default Messages;