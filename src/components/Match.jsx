import db from '../db';
import { useState } from 'react';
import ProfilCard from './ProfilCard';
import cross from '../img/cross.png';
import heart from '../img/heart.png';

const Match = ({ setCurrentPnj, currentPnj }) => {
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
      <img src={heart} alt='heart' className='heart' />
      <img src={cross} alt='cross' className='cross' />
    </div>
  );
};

export default Match;
