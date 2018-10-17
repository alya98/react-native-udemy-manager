import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';
import firebase from 'firebase';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  email: text,
})
export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  password: text,
});

export const loginUser = (email, password) => async dispatch => {
  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch({
      type: LOGIN_USER_SUCCESS,
      user
    });
  } catch {

  }

}