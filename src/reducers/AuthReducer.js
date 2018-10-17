import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from '../actions/types';

const  initialState = {
  email: '',
  password: '',
}

export default (state = initialState, action) => {
  console.log('action', action)
  switch (action.type) {
    case EMAIL_CHANGED:
    return {...state, email: action.email};
    case PASSWORD_CHANGED:
    return {...state, password: action.password};
    default:
    return state;
  }
}