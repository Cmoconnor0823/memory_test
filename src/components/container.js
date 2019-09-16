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
        <div className="col col-lg-12">
          <div className="card-deck">
            {Villagers}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Container;