import db from '../db';
import { useState } from 'react';
import ProfilCard from './ProfilCard';
import cross from '../img/cross.png';
import heart from '../img/heart.png';

const Match = () => {
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

  const HandleClick = () => {
    console.log(characters);
    console.log(filteredCharacters);
  };

  return (
    <div>
      {filteredCharacters.map(
        (character, index) =>
          randomId === index && <ProfilCard key={index} {...character} />
      )}

      <img src={heart} alt='heart' className='heart' onClick={HandleLike} />
      <img src={cross} alt='cross' className='cross' onClick={HandleDislike} />
      <button type='button' onClick={HandleClick}>
        bouton
      </button>
    </div>
  );
};
export default Match;
