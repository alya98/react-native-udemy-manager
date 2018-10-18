
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import Router from './src/Router';
import configureStore from './store'

const store = configureStore({});
class App extends Component {
  componentDidMount(){
    const config = {
      apiKey: "AIzaSyB3YVWA1T1D_P5Bj4Ung1614xBjiE9Il78",
      authDomain: "manager-103b4.firebaseapp.com",
      databaseURL: "https://manager-103b4.firebaseio.com",
      projectId: "manager-103b4",
      storageBucket: "manager-103b4.appspot.com",
      messagingSenderId: "93910215785"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
