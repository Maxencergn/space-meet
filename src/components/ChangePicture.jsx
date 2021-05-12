const ChangePicture = ({ pictureUploaded, setPictureUploaded }) => {
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const img = { profileImg: reader.result };
        localStorage.setItem('picture', img.profileImg);
        setPictureUploaded(true);
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
            {pictureUploaded ? 'Picture uploaded' : 'Upload your picture'}
          </label>
        </div>
      </div>
    </div>
  );
};

export default ChangePicture;
