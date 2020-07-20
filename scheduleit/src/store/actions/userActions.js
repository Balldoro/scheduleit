import { db } from "../../firebase";
import {
  SUCCESS_GET_USER_INFO,
  SUCCESS_GET_USER_PROJECTS,
} from "../constants/userConstants";

export function successGetUserInfo(userInfo) {
  return { type: SUCCESS_GET_USER_INFO, payload: userInfo };
}

export function successGetUserProjects(userProjects) {
  return { type: SUCCESS_GET_USER_PROJECTS, payload: userProjects };
}

export function getUserInfo(id) {
  return (dispatch) => {
    db.collection("users")
      .doc(id)
      .onSnapshot((snapshot) => {
        dispatch(successGetUserInfo(snapshot.data()));
      });
  };
}

export function getUserProjects(id) {
  return (dispatch) => {
    db.collection("users")
      .doc(id)
      .collection("projects")
      .onSnapshot((snapshot) => {
        const allProjects = snapshot.docs.map((doc) => doc.data());
        dispatch(successGetUserProjects(allProjects));
      });
  };
}
