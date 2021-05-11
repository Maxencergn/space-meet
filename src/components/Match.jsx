import db from '../db';
import { useState, useEffect } from 'react';
import ProfilCard from './ProfilCard';
import cross from '../img/cross.png'
import heart from '../img/heart.png'

const Match = () => {

const [characters, setCharacters] = useState(db.characters);
const randomId =Math.floor(Math.random() * (characters.length));

const HandleLike = () =>{
  characters[randomId].like = true;
}
const HandleDislike = () => {
  characters[randomId].like = false;
}

useEffect(() => {
  setCharacters(characters.filter(character => character.like = undefined));
}, []);


console.log(characters);
  return (
    <div>
{characters.map((character, index) => randomId === index && <ProfilCard key={index}{...character}/>)}

<img src={heart}  alt="heart" className="heart" onClick={HandleLike}/>
<img src={cross} alt="cross" className="cross" onClick={HandleDislike}/>

    </div>
  );
};
export default Match;
