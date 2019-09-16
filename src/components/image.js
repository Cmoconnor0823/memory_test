import React from 'react';

const ImageCard = ({ selectedVillager, onImageClick }) => {
  return (
    <div className='card' >
        <div className='card-body'>
      <div className={'card-img-top img-fluid'}onClick={() => { onImageClick(selectedVillager) }}>
          <img src={`assets/img/${selectedVillager}.png`} alt='Villager ' />
        </div>
      </div>
    </div>
  );
};

export default ImageCard