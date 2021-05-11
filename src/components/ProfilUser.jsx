import './ProfilMassEffect.css';
import marker from '../img/marker.png';
import profil from '../img/profil.png';

const character = {
  characterId: 3,
  name: 'Kaidan Alenko',
  gender: 'Male',
  race: 'Human',
  img: 'https://static.wikia.nocookie.net/masseffect/images/1/19/Kaidan_Character_Box.png',
  quote:
    "We finally get out here, and the final frontier was already settled. And the residents don't even seem impressed by the view. Or the dangers.",
  description:
    "Kaidan Alenko is a human Sentinel and a Systems Alliance Marine. While serving aboard the SSV Normandy, he is a Staff Lieutenant and head of the ship's Marine detail. He's also an initial member of Commander Shepard's squad. Kaidan is a biotic wired with the controversial L2 implants, which are known to cause severe neurological damage to the user. However, he is fortunate enough to only suffer from occasional severe migraines. He is a possible love interest.",
  class: 'Sentinel',
  appearance: ['Mass Effect', 'Mass Effect 2', 'Mass Effect 3'],
  isRomanceable: true,
};

function ProfilUser() {
  const pseudo = localStorage.getItem('pseudo');
  const race = localStorage.getItem('race');
  const gender = localStorage.getItem('gender');
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