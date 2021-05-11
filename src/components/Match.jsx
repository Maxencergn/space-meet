import db from '../db';
import { useState } from 'react';
import ProfilCard from './ProfilCard';
import cross from './img/cross.png'
import heart from './img/heart.png'
const Match = () => {

const [characters, setCharacters] = useState(db.characters);
const randomId =Math.floor(Math.random() * (characters.length));




console.log(randomId);
  return (
    <div>
{characters.map((character, index) => randomId === index && <ProfilCard key={index}{...character}/>)}

<img src={heart} onClick={} className="heart"/>
<img src={cross} onClick={} className="cross"/>

    </div>
  );
};
export default Match;
