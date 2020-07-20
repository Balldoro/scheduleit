import { auth, db } from "../../firebase";
import {
  REQUEST_CREATE_USER,
  SUCCESS_CREATE_USER,
  SUCCESS_LOGIN_USER,
  REQUEST_LOGIN_USER,
  FAILURE_LOGIN_USER,
  FAILURE_CREATE_USER,
  SUCCESS_LOGOUT_USER,
} from "../constants/authConstants";

export function requestCreateUser() {
  return { type: REQUEST_CREATE_USER };
}

export function successCreateUser(currentUser) {
  return { type: SUCCESS_CREATE_USER, payload: currentUser };
}

export function failureCreateUser(errMessage) {
  return { type: FAILURE_CREATE_USER, payload: errMessage };
}

export function createUser(userData) {
  const { firstName, lastName, email, password } = userData;
  return async (dispatch) => {
    dispatch(requestCreateUser());

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await db.collection("users").doc(user.uid).set({
        firstName,
        lastName,
      });
      localStorage.setItem("user", JSON.stringify(user.uid));

      dispatch(successCreateUser(user.uid));
    } catch (err) {
      dispatch(failureCreateUser(err.message));
    }
  };
}

export function requestLoginUser() {
  return { type: REQUEST_LOGIN_USER };
}

export function successLoginUser(currentUser) {
  return { type: SUCCESS_LOGIN_USER, payload: currentUser };
}

export function failureLoginUser(errMessage) {
  return { type: FAILURE_LOGIN_USER, payload: errMessage };
}

export function loginUser(email, password) {
  return async (dispatch) => {
    dispatch(requestLoginUser());
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      localStorage.setItem("user", JSON.stringify(user.uid));
      dispatch(successLoginUser(user.uid));
    } catch (err) {
      dispatch(failureLoginUser(err.message));
    }
  };
}

export function successLogoutUser() {
  return { type: SUCCESS_LOGOUT_USER };
}

export function logoutUser() {
  return async (dispatch) => {
    auth.signOut();
    localStorage.removeItem("user");
    dispatch(successLogoutUser());
  };
}
