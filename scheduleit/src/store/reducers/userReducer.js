const {
  SUCCESS_GET_USER_INFO,
  SUCCESS_GET_USER_PROJECTS,
} = require("../constants/userConstants");

const initialState = { firstName: "", lastName: "", projects: {} };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_GET_USER_INFO:
      const { firstName, lastName } = action.payload;
      return { ...state, firstName, lastName };
      break;
    case SUCCESS_GET_USER_PROJECTS:
      return { ...state, projects: action.payload };
    default:
      return state;
  }
}

export default userReducer;
