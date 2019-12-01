import React, { Component } from 'react';

import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { addCar } from '../actions';

class NewCar extends Component {
  onSubmit = (values) => {
    this.props.addCar(
      values,
      () =>
        {this.props.history.push('/'); // Navigate after submit
      },
      this.props.garage);
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input} />
      </div>
    );
  }

  render() {

    console.log(this.props)

    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field label="Brand" name="brand" type="text" component={this.renderField} />
          <Field label="Model" name="model" type="text" component={this.renderField} />
          <Field label="Owner" name="owner" type="text" component={this.renderField} />
          <Field label="Plate" name="plate" type="text" component={this.renderField} />
          <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
            Add car
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  }
}

export default reduxForm({ form: 'addCarForm' })(
  connect(mapStateToProps, { addCar })(NewCar)
);

// export default reduxForm({ form: 'addCarForm' })(
//   connect(null, { addCar })(NewCar)
// );

// export default connect(mapStateToProps)(Garage);
