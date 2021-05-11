import db from '../db';
import { useState } from 'react';

const Match = () => {

const [characters, setCharacters] = useState(db.characters);
  return (
    <div>
{characters.map(character => <p>{character.name}</p>)}

    </div>
  );
};
export default Match;
