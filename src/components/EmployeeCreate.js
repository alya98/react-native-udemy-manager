import React, {Component} from 'react';
import {Card, CardItem, Button} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress = () => {
    const { name, phone, shift, employeeCreate } = this.props;
    employeeCreate({ name, phone, shift: shift || 'Monday' })
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardItem>
          <Button onButtonPress={this.onButtonPress}>Create</Button>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return {
    name, shift, phone
  }
}
const mapDispatchToProps = {
  employeeCreate: actions.employeeCreate,
}


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate);