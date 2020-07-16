import {
  REQUEST_CREATE_USER,
  SUCCESS_CREATE_USER,
} from "../constants/authConstants";

const initialState = {
  isLoading: false,
  user: null,
};
function authReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CREATE_USER:
      return { ...state, isLoading: true };
      break;
    case SUCCESS_CREATE_USER:
      return { ...state, isLoading: false, user: action.payload };
    default:
      return state;
  }
}

export default authReducer;
