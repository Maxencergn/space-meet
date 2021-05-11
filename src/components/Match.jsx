import db from '../db';
import { useState } from 'react';
import ProfilCard from './ProfilCard';
import cross from '../img/cross.png'
import heart from '../img/heart.png'
const Match = () => {

const [characters, setCharacters] = useState(db.characters);
const randomId =Math.floor(Math.random() * (characters.length));

function HandleLike () {
  
}


console.log(characters[0].like);
  return (
    <div>
{characters.map((character, index) => randomId === index && <ProfilCard key={index}{...character}/>)}

<img src={heart}  alt="heart" className="heart" />
<img src={cross} alt="cross" className="cross"/>

    </div>
  );
};
export default Match;
