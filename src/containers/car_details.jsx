import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCar } from '../actions';

class CarDetails extends Component {
  handleClick = () => {
    this.props.selectCar(this.props.car)
  }

  render() {
    return (
      <div onClick={() => this.handleClick()}>
        {this.props.car.id})&#160;
        {this.props.car.brand},&#160;
        {this.props.car.model}
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     selectCar: () => dispatch(selectCar())
//   }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCar }, dispatch);
}

export default connect(null, mapDispatchToProps)(CarDetails);
