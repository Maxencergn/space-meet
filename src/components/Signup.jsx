/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import './Signup.css';
import ChangePicture from './ChangePicture';

function Signup(props) {
  const [pseudo, setPseudo] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [race, setRace] = useState('');
  const [male, setMale] = useState('');
  const [female, setFemale] = useState('');
  const [ai, setAi] = useState('');
  const [other, setOther] = useState('');
  const [enableCreation, setEnableCreation] = useState(false);

  if (
    pseudo &&
    birthday &&
    email &&
    race &&
    male &&
    female &&
    ai &&
    other &&
    !enableCreation
  )
    setEnableCreation(true);

  const handleClic = () => {
    localStorage.setItem('pseudo', pseudo);
    localStorage.setItem('birthday', birthday);
    localStorage.setItem('email', email);
    localStorage.setItem('race', race);
    localStorage.setItem('male', male);
    localStorage.setItem('female', female);
    localStorage.setItem('ai', ai);
    localStorage.setItem('other', other);
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
  const handleChangeRace = (event) => {
    setRace(event.target.value);
  };
  const handleChangeMale = (event) => {
    setMale(event.target.value);
  };
  const handleChangeFemale = (event) => {
    setFemale(event.target.value);
  };
  const handleChangeAi = (event) => {
    setAi(event.target.value);
  };
  const handleChangeOther = (event) => {
    setOther(event.target.value);
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
        <div className='form-group'>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='genderOptions'
              id='inlineRadio1'
              onChange={handleChangeMale}
              value={male}
            />
          </div>
          <div className='form-check-label' htmlFor='inlineRadio1'>
            Male
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='genderOptions'
              id='inlineRadio2'
              onChange={handleChangeFemale}
              value={female}
            />
          </div>
          <div className='form-check-label' htmlFor='inlineRadio2'>
            Female
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='genderOptions'
              id='inlineRadio2'
              onChange={handleChangeAi}
              value={ai}
            />
          </div>
          <div className='form-check-label' htmlFor='inlineRadio2'>
            A.I.
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='genderOptions'
              id='inlineRadio2'
              onChange={handleChangeOther}
              value={other}
            />
          </div>
          <div className='form-check-label' htmlFor='inlineRadio2'>
            Other
          </div>
        </div>
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
        <form className='raceContainer'>
          <label>
            Your race :&nbsp;
            <select
              type='text'
              name='race'
              id='race'
              onChange={handleChangeRace}
              value={race}
            >
              <option value='Human'>Human</option>
              <option value='Turian'>Turian</option>
              <option value='Asari'>Asari</option>
              <option value='Quarian'>Quarian</option>
              <option value='Krogan'>Krogan</option>
              <option value='Geth'>Geth</option>
              <option value='Salarian'>Salarian</option>
              <option value='Drell'>Drell</option>
              <option value='A.I.'>A.I.</option>
              <option value='Prothean'>Prothean</option>
              <option value='Reaper'>Reaper</option>
              <option value='Collector'>Collector</option>
              <option value='Yagh'>Yagh</option>
            </select>
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
