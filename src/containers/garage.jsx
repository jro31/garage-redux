import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Garage extends Component {
  render() {
    return (
      <div className="garage">
        <div>{this.props.garage}</div>
        <div>
          <Link to={'/car/new'}>
            Add new car
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  }
}

export default connect(mapStateToProps)(Garage);
