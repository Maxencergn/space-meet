/* eslint-disable react-hooks/exhaustive-deps */
import db from '../db';
import './Match.css';
<<<<<<< HEAD
import MatchNoMore from './MatchNoMore';
import { useEffect, useState } from 'react';
=======
import { useState } from 'react';
>>>>>>> afd6b0ce041936918e6c19543d6b306db1a0303d
import ProfilCard from './ProfilCard';
import cross from '../img/cross.png';
import heart from '../img/heart.png';

const Match = ({ setCurrentPnj, currentPnj }) => {
  if (localStorage.getItem('characters') === null)
    localStorage.setItem('characters', JSON.stringify(db.characters));

  const characters = JSON.parse(localStorage.getItem('characters'));

  const [filteredCharacters, setFilteredCharacters] = useState(db.characters);
  const [randomId, setRandomId] = useState(
    Math.floor(Math.random() * characters.length)
  );

  useEffect(() => {
    if (currentPnj.id) {
      for (let i = 0; i < filteredCharacters.length; i++) {
        if (filteredCharacters[i].characterId === currentPnj.id) setRandomId(i);
      }
    }
  }, []);

  const HandleLike = () => {
    let charId = filteredCharacters[randomId].characterId;
    for (let i = 0; i < filteredCharacters.length; i++) {
      if (filteredCharacters[i].characterId === charId)
        characters[charId].like = 1;
    }
    setFilteredCharacters(
      characters.filter((character) => character.like === 0)
    );
    setRandomId(Math.floor(Math.random() * (filteredCharacters.length - 1)));
    localStorage.setItem('characters', JSON.stringify(characters));
  };

  const HandleDislike = () => {
    let charId = filteredCharacters[randomId].characterId;
    for (let i = 0; i < filteredCharacters.length; i++) {
      if (filteredCharacters[i].characterId === charId)
        characters[charId].like = 2;
    }
    setFilteredCharacters(
      characters.filter((character) => character.like === 0)
    );
    setRandomId(Math.floor(Math.random() * (filteredCharacters.length - 1)));
    localStorage.setItem('characters', JSON.stringify(characters));
  };

  return (
    <div className='div-match'>
      {!filteredCharacters.length && <MatchNoMore />}
      {filteredCharacters.length
        ? filteredCharacters.map(
            (character, index) =>
              randomId === index && (
                <ProfilCard
                  key={index}
                  {...character}
                  setCurrentPnj={setCurrentPnj}
                  currentPnj={currentPnj}
                />
              )
          )
        : ''}
      {filteredCharacters.length ? (
        <div className='container-img'>
          <img src={heart} alt='heart' className='heart' onClick={HandleLike} />
          <img
            src={cross}
            alt='cross'
            className='cross'
            onClick={HandleDislike}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Match;
