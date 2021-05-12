import './MatchItem.css';
import { useHistory } from 'react-router-dom';

function MatchItem(props) {

  const history = useHistory();
  const characters = JSON.parse(localStorage.getItem('characters'));
  
  function handleClick() {
        for (let i = 0; i < characters.length; i++) {
          if (characters[i].characterId === props.id) {
            props.setCurrentPnj(characters[i])
            history.push('/profilPnjChat');
          };
        };
  }

  return (
    <div className='match-item'>
        <img onClick={handleClick} alt='' src={props.img} />
    </div>
  );
}

export default MatchItem;
