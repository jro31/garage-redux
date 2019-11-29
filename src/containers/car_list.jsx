import React, { Component } from 'react';
import { connect } from 'react-redux';

import CarDetails from '../containers/car_details';
import { fetchCars } from '../actions';

class CarList extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  render() {
    console.log("😈")
    console.log(this)
    return (
      <div className="car-list">
        {
          this.props.cars.map((car) => {
            return <CarDetails key={car.id} car={car} />;
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage,
    selectedCar: state.selectedCar
  }
}

const mapDispatchToProps = {
  fetchCars
}

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
