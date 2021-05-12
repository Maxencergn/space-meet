import './Navbar.css';
import { Link } from 'react-router-dom';
import Profil from '../img/profil.png';
import chat from '../img/chat.png';
import rocketShip from '../img/rocket-ship.png';

function Navbar() {
  return (
    <div className='navbar-first'>
      <Link to='/profilUser'>
        <img className='img-profil-navbar' alt='' src={Profil} />
      </Link>
      <Link to='/match'>
        <img className='img-profil-navbar' alt='' src={rocketShip} />
      </Link>
      <Link to='/chat'>
        <img className='img-profil-navbar' alt='' src={chat} />
      </Link>
    </div>
  );
}

export default Navbar;
