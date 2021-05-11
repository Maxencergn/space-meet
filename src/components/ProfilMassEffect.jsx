import './ProfilMassEffect.css';
import { Link } from 'react-router-dom';
import marker from '../img/marker.png';
import profil from '../img/profil.png';
import leftArrow from '../img/left-arrow.png';

function ProfilMassEffect(props) {
  return (
    <div className='profil-masseffect'>
      <div className='container-img-profil'>
        <Link to='/match'>
          <img className='img-left-arrow' alt='' src={leftArrow} />
        </Link>
        <img className='img-profil-ME' src={props.currentPnj.img} alt='img' />
      </div>
      <div className='infos-container'>
        <h1>{props.currentPnj.name}</h1>
        <p>
          <img className='marker-img-pnj' alt='' src={profil} />
          {props.currentPnj.race}
        </p>
        <p>
          <img className='marker-img-pnj' alt='' src={marker} />
          {props.currentPnj.planet}
        </p>
        <hr width='90%' align='center'></hr>

        <h3>About</h3>
        <p>{props.currentPnj.description}</p>
        <h3>Favourite quote</h3>
        <p style={{ fontStyle: 'italic' }}>" {props.currentPnj.quote} "</p>
      </div>
    </div>
  );
}

export default ProfilMassEffect;
