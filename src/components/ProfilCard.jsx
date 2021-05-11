import marker from '../img/marker.png';
import './ProfilCard.css';
import db from '../db';
import profil from '../img/profil.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function ProfilCard({
  characterId,
  name,
  img,
  race,
  quote,
  description,
  gender,
  setCurrentPnj,
  currentPnj,
}) {
  let planet = '';

  for (let i = 0; i < db.races.length; i++) {
    if (db.races[i].name.includes(race)) planet = db.races[i].homeWorld;
  }
  if (planet === '') planet = 'Unknown';

  useEffect(() => {
    setCurrentPnj({
      id: characterId,
      name: name,
      race: race,
      gender: gender,
      quote: quote,
      description: description,
      img: img,
      planet: planet,
    });
  }, []);

  return (
    <>
      <Link to='/profilMassEffect'>
        <div className='profil-card'>
          <div className='container-card'>
            <img className='img-profil-card' src={img} alt='img' />
            <h2 className='name'>{name}</h2>
            <p className='race'>
              <img className='marker-img' alt='' src={profil} />
              {race}
            </p>
            <p className='planet'>
              <img className='marker-img' alt='' src={marker} />
              {planet}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProfilCard;
