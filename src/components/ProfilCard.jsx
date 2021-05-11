import marker from '../img/marker.png';
import './ProfilCard.css';
const character = {
  characterId: 3,
  name: "Kaidan Alenko",
  gender: "Male",
  race: "Human",
  img: "https://static.wikia.nocookie.net/masseffect/images/1/19/Kaidan_Character_Box.png",
  quote: "We finally get out here, and the final frontier was already settled. And the residents don't even seem impressed by the view. Or the dangers.",
  description: "Kaidan Alenko is a human Sentinel and a Systems Alliance Marine. While serving aboard the SSV Normandy, he is a Staff Lieutenant and head of the ship's Marine detail. He's also an initial member of Commander Shepard's squad. Kaidan is a biotic wired with the controversial L2 implants, which are known to cause severe neurological damage to the user. However, he is fortunate enough to only suffer from occasional severe migraines. He is a possible love interest.",
  class: "Sentinel",
  appearance: ["Mass Effect", "Mass Effect 2", "Mass Effect 3"],
  isRomanceable: true
};

function ProfilCard() {
  return (
    <div className='profil-card'>
      <div className='container-card'>
        <img className='img-profil-card' src={character.img} alt='img' />
        <h2>
          {character.name}, {character.race}
        </h2>
        <p>
          <img className='marker-img' alt='' src={marker} />
          Asari Planet
        </p>
      </div>
    </div>
  );
}

export default ProfilCard;
