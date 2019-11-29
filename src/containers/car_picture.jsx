import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarPicture extends Component {
  render() {
    return (
      <div className="car">
        {this.props.selectedCar.brand}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCar: state.selectedCar
  }
}

export default connect(mapStateToProps)(CarPicture);
