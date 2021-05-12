import './HasNotMatched.css';
import thumbsDown from '../img/thumbsDownRed.png';

const HasNotMatched = () => {
  return (
    <div className='thumbs-up-circle align-center transition-fast'>
      <span className='thumbs-down transition-fast'>
        <img src={thumbsDown} className='thumbs-down' alt='thumbsDown' />
      </span>
    </div>
  );
};
export default HasNotMatched;
