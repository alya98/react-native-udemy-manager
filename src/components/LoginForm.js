import React, {Component} from 'react';
import { Text, View } from 'react-native';
import {Card, CardItem, Input, Button} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }
  onPasswordChange = text => {
    this.props.passwordChanged(text);
  }
  render() {
    const { email, password } = this.props;
    return (
        <Card>
          <CardItem>
            <Input
              value={email}
              placeholder='user@gmail.com'
              label='Email'
              onChangeText={this.onEmailChange}
            />
          </CardItem>
          <CardItem>
            <Input
              secureTextEntry
              label='Password'
              placeholder='password'
              onChangeText={this.onPasswordChange}
              value={password}
            />
          </CardItem>
          <CardItem>
            <Button onButtonPress={() =>this.props.loginUser(email, password)}> Login</Button>
          </CardItem>
        </Card>
    );
  }
}
const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
})
const mapDispatchToProps = {
  emailChanged: actions.emailChanged,
  passwordChanged: actions.passwordChanged,
  loginUser: actions.loginUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
