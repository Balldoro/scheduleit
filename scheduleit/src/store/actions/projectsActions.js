import { db } from "../../firebase";

export function createProject(userID, project) {
  return () =>
    db
      .collection("users")
      .doc(userID)
      .collection("projects")
      .doc()
      .set(project);
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
