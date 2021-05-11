/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './ProfilMassEffect.css';
import marker from '../img/marker.png';
import leftArrow from '../img/left-arrow.png';

const character = {
  characterId: 3,
  name: 'pseudo',
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
  const [pseudo, setPseudo] = useState(localStorage.getItem('pseudo'));
  const [birthday, setBirthday] = useState(localStorage.getItem('birthday'));
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [race, setRace] = useState(localStorage.getItem('race'));
  const [male, setMale] = useState(localStorage.getItem('male'));
  const [female, setFemale] = useState(localStorage.getItem('female'));
  const [ai, setAi] = useState(localStorage.getItem('ai'));
  const [other, setOther] = useState(localStorage.getItem('other'));

  localStorage.getItem('pseudo');
  localStorage.getItem('birthday');
  localStorage.getItem('email');
  localStorage.getItem('race');
  localStorage.getItem('male');
  localStorage.getItem('female');
  localStorage.getItem('ai');
  localStorage.getItem('other');

  let state = {
    profileImg: '',
  };
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  let { profileImg } = this.state;

  return (
    <div className='profil-masseffect'>
      <div className='container-img-profil'>
        <div className='img-holder'>
          <img
            src={profileImg}
            alt=''
            id='img'
            className='img'
            type='file'
            accept='image/*'
            name='image-upload'
            onChange={imageHandler}
          />
        </div>
        <input
          type='file'
          accept='image/*'
          name='image-upload'
          id='files'
          onChange={imageHandler}
          style={{ display: 'none' }}
        />
        <label for='files'>Choose your picture</label>
        <img className='img-left-arrow' alt='' src={leftArrow} />
        <img className='img-profil-ME' src={character.img} alt='img' />
      </div>
      <div className='infos-container'>
        <h1>{character.name}</h1>
        <p>
          <img className='marker-img' alt='' src={marker} />
          Asari Planet
        </p>
        <hr width='90%' align='center'></hr>
        <p>{character.race}</p>
        <p>{character.class}</p>
        <h3>About</h3>
        <p>{character.description}</p>
        <h3>Favourite quote</h3>
        <p style={{ fontStyle: 'italic' }}>" {character.quote} "</p>
      </div>
    </div>
  );
}

export default ProfilUser;
