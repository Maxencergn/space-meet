/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import './Signup.css';
import { useHistory } from 'react-router-dom';
import ChangePicture from './ChangePicture';

function Signup(props) {
  const [pseudo, setPseudo] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();
  const [enableCreation, setEnableCreation] = useState(false);

  if (pseudo && birthday && email && !enableCreation) setEnableCreation(true);

  const handleClic = () => {
    localStorage.setItem('pseudo', pseudo);
    localStorage.setItem('birthday', birthday);
    localStorage.setItem('email', email);
    localStorage.setItem('xp', localStorage.getItem('result'));
    localStorage.setItem('sp', localStorage.getItem('result'));
    if (localStorage.getItem('xp') === '30') {
      localStorage.setItem('Level', '2');
    } else {
      localStorage.setItem('Level', '1');
    }
    history.push('/home');
  };

  const handleChangePseudo = (event) => {
    setPseudo(event.target.value);
  };
  const handleChangeBirthday = (event) => {
    setBirthday(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className='ProfileCreation'>
      <h1 className='spacemeet'>Sign-up</h1>
      <div className='picture'>
        <ChangePicture />
      </div>
      <div className='infos'>
        <form className='pseudoContainer'>
          <label htmlFor='pseudo' className='pseudo'>
            <p>Pseudo</p>
            <input
              type='text'
              name='pseudo'
              id='pseudo'
              placeholder='Pseudo'
              onChange={handleChangePseudo}
              value={pseudo}
            />
          </label>
        </form>
        <form className='birthdayContainer'>
          <label htmlFor='birthday' className='birthday'>
            <p>Date de naissance</p>
            <input
              type='date'
              name='birthday'
              id='birthday'
              onChange={handleChangeBirthday}
              value={birthday}
            />
          </label>
        </form>
        <form className='emailContainer'>
          <label htmlFor='email' className='email'>
            <p>Email</p>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='spacemeet@mail.com'
              onChange={handleChangeEmail}
              value={email}
            />
          </label>
        </form>
        <form className='submit'>
          <button
            type='submit'
            id='submit'
            onClick={handleClic}
            disabled={!enableCreation}
          >
            Créer mon compte
          </button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
