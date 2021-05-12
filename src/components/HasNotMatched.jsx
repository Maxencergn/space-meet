import './HasNotMatched.css';
import thumbsDown from '../img/thumbsDownRed.png';

const HasNotMatched = () => {
  return (
    <div class='thumbs-up-circle align-center transition-fast'>
      <span class='thumbs-down transition-fast'>
        <img src={thumbsDown} class='thumbs-down' alt='thumbsDown' />
      </span>
    </div>
  );
};
export default HasNotMatched;
