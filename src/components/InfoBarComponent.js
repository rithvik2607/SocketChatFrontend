import React from 'react';

const InfoBar = ({room}) => {
  return (
    <div className="container mx-auto flex items-center justify-center bg-blue-400 w-5/12 py-4 mt-16">
      <div className="inline flex items-center justify-center">
        <div className="space-x-4 px-56 -ml-56 flex items-center">
          <img className="inline" src="assets/images/onlineIcon.png" alt="status" />
          <p className="inline text-2xl text-white">{room}</p>
        </div>
        <div className="flex items-center justify-center">
          <a className="ml-64" href="/"><img src="assets/images/close.png" alt="leave" /></a>
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
