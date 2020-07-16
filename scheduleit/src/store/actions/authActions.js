import { auth, db } from "../../firebase";
import {
  REQUEST_CREATE_USER,
  SUCCESS_CREATE_USER,
  SUCCESS_LOGIN_USER,
  REQUEST_LOGIN_USER,
} from "../constants/authConstants";

export function requestCreateUser() {
  return { type: REQUEST_CREATE_USER };
}

export function successCreateUser(currentUser) {
  return { type: SUCCESS_CREATE_USER, payload: currentUser };
}

export function createUser(userData) {
  const { firstName, lastName, email, password } = userData;
  return async (dispatch) => {
    dispatch(requestCreateUser());

    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await db.collection("users").doc(user.uid).set({
      firstName,
      lastName,
    });
    localStorage.setItem("user", JSON.stringify(user.uid));

    dispatch(successCreateUser(user.uid));
  };
}

export function requestLoginUser() {
  return { type: REQUEST_LOGIN_USER };
}

export function successLoginUser(currentUser) {
  return { type: SUCCESS_LOGIN_USER, payload: currentUser };
}

export function loginUser(email, password) {
  return async (dispatch) => {
    dispatch(requestLoginUser());

    const { user } = await auth.signInWithEmailAndPassword(email, password);
    localStorage.setItem("user", JSON.stringify(user.uid));

    dispatch(successLoginUser(user.uid));
  };
}
