import db from '../db';
import './Match.css';
import { useState, useEffect } from 'react';
import ProfilCard from './ProfilCard';
import cross from '../img/cross.png';
import heart from '../img/heart.png';

const Match = ({ setCurrentPnj, currentPnj }) => {

  useEffect(() => {

  }, [])

    // eslint-disable-next-line no-unused-vars
  const [characters, setCharacters] = useState(db.characters);
  const randomId = Math.floor(Math.random() * characters.length);

  return (
    <div>
      {characters.map(
        (character, index) =>
          randomId === index && (
            <ProfilCard
              key={index}
              {...character}
              setCurrentPnj={setCurrentPnj}
              currentPnj={currentPnj}
            />
          )
      )}
      <div className='container-img'>
        <img src={heart} alt='heart' className='heart' />
        <img src={cross} alt='cross' className='cross' />
      </div>
    </div>
  );
};

export default Match;
