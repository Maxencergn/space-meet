/* eslint-disable react-hooks/exhaustive-deps */
import db from '../db';
import './Match.css';
import MatchNoMore from './MatchNoMore';
import HasMatched from './HasMatched';
import { useEffect, useState } from 'react';
import { FadeTransform } from 'react-animation-components';
import ProfilCard from './ProfilCard';
import cross from '../img/cross.png';
import heart from '../img/heart.png';
import HasNotMatched from './HasNotMatched';

const Match = ({ setCurrentPnj, currentPnj }) => {
  if (localStorage.getItem('characters') === null)
    localStorage.setItem(
      'characters',
      JSON.stringify(db.characters.filter((character) => character.like === 0))
    );

  const characters = JSON.parse(localStorage.getItem('characters'));

  const [filteredCharacters, setFilteredCharacters] = useState(db.characters);
  const [randomId, setRandomId] = useState(
    Math.floor(Math.random() * characters.length)
  );

  const [match, setMatch] = useState(null);

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
      if (characters[charId].isRomanceable) {
        setMatch(true);
      } else {
        setMatch(false);
      }
    }
    setTimeout(() => {
      setFilteredCharacters(
        characters.filter((character) => character.like === 0)
      );
      setRandomId(Math.floor(Math.random() * (filteredCharacters.length - 1)));
      localStorage.setItem('characters', JSON.stringify(characters));
    }, 2000);
    setTimeout(() => {
      setMatch(null);
    }, 2000);
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
      {match && <HasMatched />}
      {match === false && <HasNotMatched />}
      {!filteredCharacters.length && <MatchNoMore />}
      {filteredCharacters.length
        ? filteredCharacters.map(
            (character, index) =>
              randomId === index && (
                <FadeTransform
                  in
                  transformProps={{
                    exitTransform: 'translateX(-100px)',
                  }}
                  fadeProps={{
                    enterOpacity: 0.85,
                  }}
                >
                  <ProfilCard
                    key={index}
                    {...character}
                    setCurrentPnj={setCurrentPnj}
                    currentPnj={currentPnj}
                  />
                </FadeTransform>
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
