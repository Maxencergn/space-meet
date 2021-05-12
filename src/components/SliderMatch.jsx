import { useState } from 'react';

const SliderMatch = () => {

  const [love, setLove] = useState(false);
  const [match, setMatch] = useState(false)

  function handleLove() {
    setLove(!love);
  }



  return (
    <div>
      <button type='button' onClick={handleLove} className="loveButton">
        Love!
      </button>
      {characters.isRomanceable === setLove ? {  } : {  }}
      <button type='button' onClick={notMatch} className="noButton">
        No!
      </button>
    </div>
  );
};

export default SliderMatch;
