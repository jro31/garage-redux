import React from 'react';

import CarList from '../containers/car_list';
import Garage from '../containers/garage';
import CarPicture from '../containers/car_picture';

const App = () => {
  return (
    <div className="content-container">
      <Garage />
      <CarList />
      <CarPicture />
    </div>
  );
};

export default App;
