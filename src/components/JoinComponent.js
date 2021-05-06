import React,{ useState} from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return(
    <div className="container mx-auto my-64">
      <div className="flex flex-col items-center">
        <p className="text-center text-4xl text-white mb-10">Join</p>
        <div className="flex flex-col items-center justify-center">
        <input className="w-64 mb-2 ring pl-2 focus:outline-none" type="text" placeholder="Your Name" onChange={(event) => setName(event.target.value)}></input>
        <input className="w-64 mb-2 ring pl-2 focus:outline-none" type="text" placeholder="Room" onChange={(event) => setRoom(event.target.value)}></input>
        </div>
      </div>
      <Link
        onClick={e => (!name || !room) ? e.preventDefault() : null}
        className="flex flex-col items-center justify-center"
        to={`/chat?name=${name}&room=${room}`}
      >
        <button className="px-8 py-2 bg-blue-400 text-white" type="Submit">Join Now</button>
      </Link>
    </div>
  );
}

export default Join;
