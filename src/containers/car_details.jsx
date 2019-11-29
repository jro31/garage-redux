import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCar } from '../actions';

class CarDetails extends Component {
  handleClick = (car) => {
    console.log("👹")
    console.log(car)
    this.props.selectCar(car)
  }

  render() {
    return (
      <div onClick={() => this.handleClick(this.props.car)}>
        {this.props.car.id})&#160;
        {this.props.car.brand},&#160;
        {this.props.car.model}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectCar: () => dispatch(selectCar())
  }
}

export default connect(null, mapDispatchToProps)(CarDetails);
