import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({message: { user, text },  name}) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user == trimmedName){
    isSentByCurrentUser = true;
  }

  return(
    isSentByCurrentUser
    ? (
      <div className="flex justify-end items-center my-1 px-2">
        <p className="px-1">{user}</p>
        <div>
          <p className="rounded-2xl bg-blue-300 text-white py-2 px-2">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    )
    : (
      <div className="flex justify-start items-center my-1 px-2">
        <div>
          <p className="rounded-2xl bg-gray-300 py-2 px-2">{ReactEmoji.emojify(text)}</p>
        </div>
        <p className="px-1">{user}</p>
      </div>
    )
  );
}

export default Message;