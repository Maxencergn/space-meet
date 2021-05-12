import './LoadingPage.scss';
import { useHistory } from 'react-router-dom';
import rocket from '../img/rocket-ship.png';

function LoadingPage() {
  const history = useHistory();

  const handleClick = () => {
    if (localStorage.getItem('pseudo')) {
      history.push('/match');
    } else {
      history.push('/signup');
    }
  };

  return (
    <div>
      <section className='preloader'>
        <div className='preloader__wrapper'>
          <div className='preloader__circle'>
            <div className='preloader__circle-line preloader__circle-line--1'></div>
            <div className='preloader__circle-line preloader__circle-line--2'></div>
            <div className='preloader__circle-line preloader__circle-line--3'></div>
            <div className='preloader__circle-line preloader__circle-line--4'></div>
            <div className='preloader__circle-line preloader__circle-line--5'></div>
            <div className='preloader__circle-line preloader__circle-line--6'></div>
            <div className='preloader__circle-line preloader__circle-line--7'></div>
            <div className='preloader__circle-line preloader__circle-line--8'></div>
            <div className='preloader__circle-line preloader__circle-line--9'></div>
          </div>
          <img className='preloader__img' alt='' src={rocket} />
        </div>
        <h1 className='preloader__h1'>
          Welcome to <br /> Space Meet
        </h1>
        <button className='preloader__loading-page-btn' onClick={handleClick}>
          Let's go
        </button>
      </section>
    </div>
  );
}

export default LoadingPage;
