import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { View, Picker, Text } from 'react-native';
import { Input, CardItem } from './common';

class EmployeeForm extends Component {
  render() {
    const { name, phone, shift, employeeUpdate } = this.props;
    return (
      <View>
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
      </View>
    );
  }
}
const styles = {
  pickerText: {
    fontSize: 18,
    paddingLeft: 20,
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);