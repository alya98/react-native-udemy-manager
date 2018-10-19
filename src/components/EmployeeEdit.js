import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardItem, Button, Confirm } from './common';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentDidMount() {
    const { employee, employeeUpdate } = this.props;
    if (employee) {
      _.each(employee, (value, prop) => {
        employeeUpdate({prop, value})
      })
    }
  }

  onButtonPress = () => {
    const { name, phone, shift, employeeSave, employee } = this.props;
    employeeSave({name, phone, shift, uid: employee.uid});
  }
  onTextPress = () => {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`)
  }

  onAccept = () => {
    const { employee, employeeDelete } = this.props;
    employeeDelete({ uid: employee.uid });
  }

  onDecline = () =>{
    console.log(this.state)
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardItem>
          <Button onButtonPress={this.onButtonPress}>
            Save Changes
          </Button>
        </CardItem>

        <CardItem>
          <Button onButtonPress={this.onTextPress}>
            Text Schedule
          </Button>
        </CardItem>

        <CardItem>
          <Button onButtonPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Employee
          </Button>
        </CardItem>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);