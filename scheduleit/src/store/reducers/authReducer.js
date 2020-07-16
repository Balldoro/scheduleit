import {
  REQUEST_CREATE_USER,
  SUCCESS_CREATE_USER,
  SUCCESS_LOGIN_USER,
  REQUEST_LOGIN_USER,
} from "../constants/authConstants";

const initialState = {
  isLoading: false,
  user: JSON.parse(localStorage.getItem("user")) || null,
};
function authReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CREATE_USER:
    case REQUEST_LOGIN_USER:
      return { ...state, isLoading: true };
      break;
    case SUCCESS_CREATE_USER:
    case SUCCESS_LOGIN_USER:
      return { ...state, isLoading: false, user: action.payload };
      break;
    default:
      return state;
  }
}

export default authReducer;
