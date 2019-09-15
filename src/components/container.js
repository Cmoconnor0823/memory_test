import React from 'react';
import ImageCards from './image';

const Container = ({ villagers, onImageClick }) => {
  return (
    <ImageCards
      selectedVillager={villagers}
      onImageClick={onImageClick}
    />
  )
};

export default Container;