import React, {Component} from 'react';
import { Text, View } from 'react-native';
import {Card, CardItem, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }
  onPasswordChange = text => {
    this.props.passwordChanged(text);
  }

  renderButton = () => {
    const { email, password } = this.props;
    return this.props.loading ? <View style={{flex: 1}}><Spinner /></View> : <Button onButtonPress={() =>this.props.loginUser(email, password)}> Login</Button>;
  }
  render() {
    const { email, password, error } = this.props;
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
          <View>
            <Text style={styles.error}>{error}</Text>
          </View>
          <CardItem>
            {this.renderButton()}
          </CardItem>
        </Card>

    );
  }
}
const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading,
})
const mapDispatchToProps = {
  emailChanged: actions.emailChanged,
  passwordChanged: actions.passwordChanged,
  loginUser: actions.loginUser,
}

const styles = {
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
