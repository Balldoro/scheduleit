import {
  REQUEST_CREATE_USER,
  SUCCESS_CREATE_USER,
  SUCCESS_LOGIN_USER,
  REQUEST_LOGIN_USER,
  FAILURE_LOGIN_USER,
  FAILURE_CREATE_USER,
  SUCCESS_LOGOUT_USER,
} from "../constants/authConstants";

const initialState = {
  isLoading: false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  errors: {
    signIn: "",
    signUp: "",
  },
};
function authReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CREATE_USER:
    case REQUEST_LOGIN_USER:
      return { ...state, isLoading: true };
      break;
    case SUCCESS_CREATE_USER:
    case SUCCESS_LOGIN_USER:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        errors: { signIn: "", signUp: "" },
      };
      break;
    case FAILURE_LOGIN_USER:
      return {
        ...state,
        isLoading: false,
        errors: { ...state.errors, signIn: action.payload },
      };
      break;
    case FAILURE_CREATE_USER:
      return {
        ...state,
        isLoading: false,
        errors: { ...state.errors, signUp: action.payload },
      };
      break;
    case SUCCESS_LOGOUT_USER:
      return { ...state, user: null };
      break;
    default:
      return state;
  }
}

export default authReducer;
