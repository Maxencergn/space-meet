import './ChangeMiniPicture.css';

const ChangeMiniPicture = ({ url, setUrl }) => {
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const img = { profileImg: reader.result };
        localStorage.setItem('picture', img.profileImg);
        setUrl(localStorage.getItem('picture'));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className='page'>
      <div className='container'>
        <div className='img-holder'>
          <input
            type='file'
            accept='image/*'
            name='image-upload'
            id='files'
            onChange={imageHandler}
            style={{ display: 'none' }}
          />
          <label htmlFor='files'>
            <img className='miniature' src={url} alt='miniature' />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ChangeMiniPicture;
