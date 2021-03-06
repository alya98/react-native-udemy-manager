import { EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_DELETE } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
    console.log(action)
    return action.snapshot;
    case EMPLOYEE_DELETE:
    return initialState;
    default:
    return state;
  }
}