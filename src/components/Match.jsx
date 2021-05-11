import db from '../db';
import { useState } from 'react';
import ProfilCard from './ProfilCard';

const Match = () => {

const [characters, setCharacters] = useState(db.characters);
const randomId =Math.floor(Math.random() * (characters.length));

console.log(randomId);
  return (
    <div>
{characters.map((character, index) => randomId === index && <ProfilCard key={index}{...character}/>)}

    </div>
  );
};
export default Match;
