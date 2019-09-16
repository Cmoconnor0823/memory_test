import React from 'react';
import ImageCards from './image';

const Container = ({ villagers, index, onImageClick }) => {
  const Villagers = villagers.map((villager, index) => {

    return (
      <ImageCards
        key={villager.id}
        selectedVillager={villagers[index]}
        onImageClick={onImageClick}
      />
    )
  })
  return (
    <div className="container">
      <div className="row">
        {Villagers}
      </div>
    </div>
  )
};

export default Container;