import React, { Component } from 'react';
export class ChangePicture extends Component {
  state = {
    profileImg: '',
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    return (
      <div className='page'>
        <div className='container'>
          <div className='img-holder'>
            <img
              src={profileImg}
              alt=''
              id='img'
              className='img'
              type='file'
              accept='image/*'
              name='image-upload'
              onChange={this.imageHandler}
            />
          </div>
          <input
            type='file'
            accept='image/*'
            name='image-upload'
            id='files'
            onChange={this.imageHandler}
            style={{ display: 'none' }}
          />
          <label for='files'>Choose your picture</label>
        </div>
      </div>
    );
  }
}

export default ChangePicture;
