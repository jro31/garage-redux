import React from 'react';

const CarDetails = (props) => {
  return (
    <div>
      {props.car.id})&#160;
      {props.car.brand},&#160;
      {props.car.model}
    </div>
  )
}

export default CarDetails;
