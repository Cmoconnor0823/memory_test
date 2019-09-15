import React from 'react';

const ImageCard = ({ selectedVillager, onImageClick }) => {
  return (
    <div className='col s3'>
      <div className={'card'}onClick={() => { onImageClick(selectedVillager) }}>
        <div className='card-image'>
          <img src={`assets/img/${selectedVillager}.png`} alt='Villagers' />
        </div>
      </div>
    </div>
  );
};

export default ImageCard