import React, {Component} from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import {CardItem} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
  onRowPress = () => {
    Actions.employeeCreate({ employee: this.props.employee});
  }
  render() {
    const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardItem>
            <Text style={styles.title}>{name}</Text>
          </CardItem>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15,
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

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);