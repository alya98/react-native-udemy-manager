import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_DELETE} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => ({
  type: EMPLOYEE_UPDATE,
  prop,
  value
})

export const employeeCreate = ({ name, phone, shift }) => async dispatch => {
  const { currentUser } = firebase.auth();
  try {
    const ref = await firebase.database().ref(`users/${currentUser.uid}/employees`);
    ref.push({ name, phone, shift });
    dispatch({
      type: EMPLOYEE_CREATE,
    })
    Actions.employeeList({ type: 'reset' });
  } catch {
    console.log('error')
  }
}

export const employeesFetch = () => async dispatch => {
  const { currentUser } = firebase.auth();
  try {
    await firebase.database().ref(`users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          snapshot: snapshot.val()
        })
    });

  } catch {
    console.log('error')
  }
}

export const employeeSave = ({ name, phone, shift, uid }) => async dispatch => {
  const { currentUser } = firebase.auth();
  try {
    await firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift });
      dispatch({
        type: EMPLOYEE_SAVE_SUCCESS
      })
      Actions.employeeList({type: 'reset'});
  } catch (e) {
    console.log('error', e)
  }
}

export const employeeDelete = ({ uid }) => async dispatch =>{
  const { currentUser } = firebase.auth();
  try {
    await firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
      .remove();
      dispatch({
        type: EMPLOYEE_DELETE
      })
      Actions.employeeList({type: 'reset'});
  } catch (e) {
    console.log('error', e)
  }
}