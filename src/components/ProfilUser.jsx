import './ProfilMassEffect.css';
import './ProfilUser.css';
import marker from '../img/marker.png';
import profil from '../img/profil.png';
import buttonEdit from '../img/edit.png';
import { Link } from 'react-router-dom';

function ProfilUser() {
  const pseudo = localStorage.getItem('pseudo');
  const race = localStorage.getItem('race');
  const photoOK = localStorage.getItem('picture');
  const about = localStorage.getItem('about');
  const quote = localStorage.getItem('quote');

  return (
    <div className='profil-masseffect'>
      <div className='container-img-profil'>
        <img className='img-profil-ME' src={photoOK} alt='img' />
      </div>
      <div className='infos-container'>
        <div className="button-edit-container">
        <Link to='/ProfilEdit'>
          <img className='button-edit' src={buttonEdit} alt='button-edit' />
        </Link>
        </div>
        <h1>{pseudo}</h1>
        <p>
          <img className='marker-img-pnj' alt='' src={profil} />
          {race}
        </p>
        <p>
          <img className='marker-img-pnj' alt='' src={marker} />
          Terra
        </p>
        <hr width='90%' align='center'></hr>
        <h3>About</h3>
        <p>{about}</p>
        <h3>Favourite quote</h3>
        <p style={{ fontStyle: 'italic' }}>" {quote} "</p>
      </div>
    </div>
  );
}

export default ProfilUser;
