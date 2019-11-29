import React, { Component } from 'react';
import { connect } from 'react-redux';

class Garage extends Component {
  render() {
    return (
      <div className="garage">{this.props.garage}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  }
}

export default connect(mapStateToProps)(Garage);
