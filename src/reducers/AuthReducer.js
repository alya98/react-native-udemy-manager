import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from '../actions/types';

const  initialState = {
  email: '',
  password: '',
  user: '',
  error: '',
  loading: false,
}

export default (state = initialState, action) => {
  console.log('action', action)
  switch (action.type) {
    case EMAIL_CHANGED:
    return {...state, email: action.email};
    case PASSWORD_CHANGED:
    return {...state, password: action.password};
    case LOGIN_USER_SUCCESS:
    return {...state, ...initialState, user: action.user,}
    case LOGIN_USER_FAIL:
    return {...state, error: 'Auth failed', password: '', loading: false} 
    case LOGIN_USER:
    return {...state, loading: true, error: ''}
    default:
    return state;
  }
}