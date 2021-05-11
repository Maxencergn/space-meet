import db from '../db';
import './Match.css';
import { useState, useEffect } from 'react';
import ProfilCard from './ProfilCard';
import cross from '../img/cross.png';
import heart from '../img/heart.png';

const Match = ({ setCurrentPnj, currentPnj }) => {

  // eslint-disable-next-line no-unused-vars
  const [characters, setCharacters] = useState(db.characters);
  const [filteredCharacters, setFilteredCharacters] = useState(db.characters);
  const [randomId, setRandomId] = useState(
    Math.floor(Math.random() * characters.length)
  );

  const HandleLike = () => {
    let charId = filteredCharacters[randomId].characterId;
    for(let i = 0; i < filteredCharacters.length; i++) {
      if (filteredCharacters[i].characterId === charId) characters[charId].like = 1
    }
    setFilteredCharacters(characters.filter((character) => (character.like === 0)));
    setRandomId(Math.floor(Math.random() * (filteredCharacters.length-1)));
  };

  const HandleDislike = () => {
    let charId = filteredCharacters[randomId].characterId;
    for(let i = 0; i < filteredCharacters.length; i++) {
      if (filteredCharacters[i].characterId === charId) characters[charId].like = 2
    }
    setFilteredCharacters(characters.filter((character) => (character.like === 0)));
    setRandomId(Math.floor(Math.random() * (filteredCharacters.length-1)));
  };

  return (
    <div>
      {filteredCharacters.map(
        (character, index) =>
          randomId === index && <ProfilCard 
          key={index} 
          {...character} 
          setCurrentPnj={setCurrentPnj}
          currentPnj={currentPnj}/>
      )}
      <div className='container-img'>
        <img src={heart} alt='heart' className='heart' onClick={HandleLike} />
        <img src={cross} alt='cross' className='cross' onClick={HandleDislike} />
      </div>
    </div>
  );
};

export default Match;
