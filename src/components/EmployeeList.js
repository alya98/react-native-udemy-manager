import React, {Component} from 'react';
import { Text, View, FlatList } from 'react-native';
import {Card, CardItem, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import ListItem from './ListItem'

class EmployeeList extends Component {
  async componentDidMount() {
    await this.props.employeesFetch();
  }
  render() {
    console.log('employees',this.props.employees)
    return (
      <FlatList
        data={this.props.employees}
        renderItem={({item}) => <ListItem employee={item}/>}
      />
    );
  }
}
const mapStateToProps = state => ({
  employees: _.map(state.employees, (val, uid) => {
    return { ...val, uid}
  })
})
const mapDispatchToProps = {
  employeesFetch: actions.employeesFetch,
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);