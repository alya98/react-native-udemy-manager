import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  email: text,
})
export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  password: text,
});

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    user
  });
  Actions.main();
}

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  })
}
export const loginUser = (email, password) => async dispatch => {
  try {
    dispatch({ type: LOGIN_USER });
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    loginUserSuccess(dispatch, user);
  } catch {
    try {
      const newUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
      loginUserSuccess(dispatch, newUser);
    } catch {
      loginUserFail(dispatch)
    }
  }

}