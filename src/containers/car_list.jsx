import React, { Component } from 'react';
import { connect } from 'react-redux';

import Car from '../components/car';

class CarList extends Component {
  render() {
    return (
      <div>
        { // console.log(this.props.cars.map)
          this.props.cars.map((car) => {
            return <Car key={car.id} car={car} />;
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  }
}

export default connect(mapStateToProps)(CarList);
