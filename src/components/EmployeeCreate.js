import React, {Component} from 'react';
import { Text, View, Picker } from 'react-native';
import {Card, CardItem, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeCreate extends Component {
  componentDidMount () {
    const { employee, employeeUpdate } = this.props;
    if (employee) {
      _.each(employee, (value, prop) => {
        employeeUpdate({prop, value})
      })
    }
  }
  onButtonPress = () => {
    const { name, phone, shift, employeeCreate, employeeSave, employee } = this.props;
    employee ? employeeSave({name, phone, shift, uid: employee.uid}) : employeeCreate({ name, phone, shift: shift || 'Monday' })
  }
  onTextPress = () => {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`)
  }
  render() {
    const { name, phone, shift, employeeUpdate, employee } = this.props;
    return (
      <Card>
        <CardItem>
          <Input
            label='Name'
            placeholder='Alina'
            value={name}
            onChangeText={(text)=>employeeUpdate({prop: 'name', value: text})}
          />
        </CardItem>
        <CardItem>
          <Input
            label='Phone'
            placeholder='+37529736472'
            value={phone}
            onChangeText={(text)=>employeeUpdate({prop: 'phone', value: text})}
          />
        </CardItem>
        <CardItem stylish={{flexDirection: 'column'}}>
          <Text style={styles.pickerText}>Shift</Text>
          <Picker
            selectedValue={shift}
            onValueChange={itemValue => employeeUpdate({prop: 'shift', value: itemValue})}>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardItem>
        <CardItem>
          <Button onButtonPress={this.onButtonPress}>{employee ? 'Save changes' : 'Create'}</Button>
        </CardItem>
        {employee && 
        <CardItem>
          <Button onButtonPress={this.onTextPress}>Text Schedule</Button>
        </CardItem>}
      </Card>
    );
  }
}
const styles = {
  pickerText: {
    fontSize: 18,
    paddingLeft: 20,
  }
}
const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return {
    name, shift, phone
  }
}
const mapDispatchToProps = {
  employeeUpdate: actions.employeeUpdate,
  employeeCreate: actions.employeeCreate,
  employeeSave: actions.employeeSave
}


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate);