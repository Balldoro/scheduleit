import { db } from "../../firebase";

export function createProject(userID, color, name) {
  return () => {
    db.collection("users").doc(userID).collection("projects").doc().set({
      color,
      name,
    });
  };
}

export function deleteProject(userID, projectID) {
  return () => {
    db.collection("users")
      .doc(userID)
      .collection("projects")
      .doc(projectID)
      .delete();
  };
}
