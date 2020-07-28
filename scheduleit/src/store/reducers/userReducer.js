const {
  SUCCESS_GET_USER_INFO,
  SUCCESS_GET_USER_PROJECTS,
} = require("../constants/userConstants");

const initialState = { info: { firstName: "", lastName: "" }, projects: {} };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_GET_USER_INFO:
      return { ...state, info: action.payload };
      break;
    case SUCCESS_GET_USER_PROJECTS:
      return { ...state, projects: action.payload };
    default:
      return state;
  }
}

export default userReducer;
