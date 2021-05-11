import './ProfilMassEffect.css';
import marker from '../img/marker.png';
import profil from '../img/profil.png';

function ProfilUser() {
  const pseudo = localStorage.getItem('pseudo');
  const race = localStorage.getItem('race');
  const photoOK = localStorage.getItem('picture');

  return (
    <div className='profil-masseffect'>
      <div className='container-img-profil'>
        <img className='img-profil-ME' src={photoOK} alt='img' />
      </div>
      <div className='infos-container'>
        <h1>{pseudo}</h1>
        <p>
          <img className='marker-img-pnj' alt='' src={profil} />
          {race}
        </p>
        <p>
          <img className='marker-img-pnj' alt='' src={marker} />
          Asari Planet
        </p>
        <hr width='90%' align='center'></hr>
        <h3>About</h3>
        <p>Nothing</p>
        <h3>Favourite quote</h3>
        <p style={{ fontStyle: 'italic' }}>" Nothing "</p>
      </div>
    </div>
  );
}

export default ProfilUser;
