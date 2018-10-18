import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeForm from './EmployeeForm';
import Employee from './Employee'

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeForm,
  employees: Employee,
});
