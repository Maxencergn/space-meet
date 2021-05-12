/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Signup.css';
import './ProfilEdit.css';
import leftArrow from '../img/left-arrow.png';
import ChangeMiniPicture from './ChangeMiniPicture';

function ProfilEdit(props) {
  const [pseudo, setPseudo] = useState(localStorage.getItem('pseudo'));
  const [birthday, setBirthday] = useState(localStorage.getItem('birthday'));
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [race, setRace] = useState(localStorage.getItem('race'));
  const [gender, setGender] = useState(localStorage.getItem('gender'));
  const [about, setAbout] = useState(localStorage.getItem('about'));
  const [quote, setQuote] = useState(localStorage.getItem('quote'));

  useEffect(() => {
  if (localStorage.getItem('about') === null) setAbout("");
  if (localStorage.getItem('quote') === null) setQuote("");
  }, []);
  
  const history = useHistory();

  const [url, setUrl] = useState(localStorage.getItem('picture'));

  const handleClic = () => {
    localStorage.setItem('pseudo', pseudo);
    localStorage.setItem('birthday', birthday);
    localStorage.setItem('email', email);
    localStorage.setItem('race', race);
    localStorage.setItem('gender', gender);
    localStorage.setItem('about', about);
    localStorage.setItem('quote', quote);
    history.push('/match');
  };

  return (
    <div className='ProfileCreation'>
      <Link to='/ProfilUser'>
          <img className='img-left-arrow-edit' alt='' src={leftArrow} />
        </Link>
      <h1 className='spacemeet'>Edit profile</h1>
      <div className='pictureEdit'>
        <ChangeMiniPicture url={url} setUrl={setUrl} />
      </div>
      
      <div className='infos'>
        <form className='pseudoContainer'>
          <label htmlFor='pseudo' className='pseudo'>
            <input
              className='input-pseudo'
              type='text'
              name='pseudo'
              id='pseudo'
              placeholder='Pseudo'
              onChange={(event) => setPseudo(event.target.value)}
              value={pseudo}
            />
          </label>
        </form>

        <form className='birthdayContainer'>
          <label htmlFor='birthday' className='birthday'>
            <input
              className='input-birthday'
              type='date'
              name='birthday'
              id='birthday'
              onChange={(event) => setBirthday(event.target.value)}
              value={birthday}
            />
          </label>
        </form>
        <form className='emailContainer'>
          <label htmlFor='email' className='email'>
            <input
              className='input-email'
              type='email'
              name='email'
              id='email'
              placeholder='spacemeet@mail.com'
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </label>
        </form>
        <form className='raceContainer'>
          <label>
            <select
              className='input-race'
              type='text'
              name='race'
              id='race'
              onChange={(event) => setRace(event.target.value)}
              value={race}
            >
              <option value='' disabled selected>
                Select your race
              </option>
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
        <div className='genderContainer'>
          <div className='form-check form-check-inline'>
            <label>
              <select
                className='input-gender'
                type='text'
                name='gender'
                id='gender'
                onChange={(event) => setGender(event.target.value)}
                value={gender}
              >
                <option value='' disabled selected>
                  Select your gender
                </option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='A.I.'>A.I.</option>
                <option value='Other'>Other</option>
              </select>
            </label>
            <form className='aboutContainer'>
              <label htmlFor='about' className='about'>
                <input
                  className='input-about'
                  type='text'
                  name='about'
                  id='about'
                  placeholder='Your description'
                  onChange={(event) => setAbout(event.target.value)}
                  value={about}
                />
              </label>
            </form>
            <form className='quoteContainer'>
              <label htmlFor='quote' className='quote'>
                <input
                  className='input-quote'
                  type='text'
                  name='quote'
                  id='quote'
                  placeholder='Your quote'
                  onChange={(event) => setQuote(event.target.value)}
                  value={quote}
                />
              </label>
            </form>
            <form className='submit'>
              <Link to='/ProfilUser'>
                <button
                  className='signup-btn'
                  type='submit'
                  id='submit'
                  onClick={handleClic}
                >
                  Modifier mon compte
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilEdit;
