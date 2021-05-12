import './MatchNoMore.css';
import wink from '../img/emojiWink.png';

const MatchNoMore = () => {
  return (
    <div className='MatchNoMore'>
      <p className='noMore'>No more candidates around you, come back later !</p>
      <img src={wink} alt='emojiWink' className='emojiWink' />
    </div>
  );
};

export default MatchNoMore;
