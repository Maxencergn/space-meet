<<<<<<< HEAD
const ChangePicture = () => {
=======
const ChangePicture = ({ pictureUploaded, setPictureUploaded }) => {
>>>>>>> 3080fc6cb87a02747f1332a39257067ed5a09390
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const img = { profileImg: reader.result };
        localStorage.setItem('picture', img.profileImg);
<<<<<<< HEAD
=======
        setPictureUploaded(true);
>>>>>>> 3080fc6cb87a02747f1332a39257067ed5a09390
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
<<<<<<< HEAD
          <label htmlFor='files'>Upload your picture</label>
=======
          <label htmlFor='files'>
            {pictureUploaded ? 'Picture uploaded' : 'Upload your picture'}
          </label>
>>>>>>> 3080fc6cb87a02747f1332a39257067ed5a09390
        </div>
      </div>
    </div>
  );
};

export default ChangePicture;
