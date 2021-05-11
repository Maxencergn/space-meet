import marker from '../img/marker.png';
import './ProfilCard.css';
import db from '../db';
import profil from '../img/profil.png';
function ProfilCard({ name, img, race }) {
  let planet = '';

  for (let i = 0; i < db.races.length; i++) {
    if (db.races[i].name.includes(race)) planet = db.races[i].homeWorld;
  }
  if (planet === '') planet = 'Unknown';

  console.log(name, img, race);
  return (
    <div className='profil-card'>
      <div className='container-card'>
        <img className='img-profil-card' src={img} alt='img' />
        <h2 className='name'>{name}</h2>
        <p className="race">
          <img className='marker-img' alt='' src={profil} />
          {race}
        </p>
        <p className="planet">
          <img className='marker-img' alt='' src={marker} />
          {planet}
        </p>
      </div>
    </div>
  );
}

export default ProfilCard;
