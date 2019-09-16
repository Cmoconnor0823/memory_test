import React from 'react';

const ImageCard = ({ selectedVillager, onImageClick }) => {
  return (
    <div className='card'>
      <div className={'card-body'}onClick={() => { onImageClick(selectedVillager) }}>
        <div className='card-image'>
          <img src={`assets/img/${selectedVillager}.png`} alt='Villager ' />
        </div>
      </div>
    </div>
  );
};

export default ImageCard