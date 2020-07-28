import React, { useState } from "react";
import {
  Background,
  PopUpTitle,
  Submit,
  ColorInput,
  Input,
  Container,
  PopUpHeader,
  CloseButton,
  ErrorMessage,
} from "./AddProjectPopUpStyles";
import { Label } from "../Auth/AuthStyles";
import { FaWindowClose } from "react-icons/fa";

function AddProjectPopUp({ createProject, togglePopUp }) {
  const [projectData, setProjectData] = useState({
    name: "",
    color: "#222222",
    errors: {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectData.name.trim()) {
      setProjectData({
        ...projectData,
        errors: { ...projectData.errors, name: "Name can not be empty!" },
      });
    } else {
      createProject(projectData);
      togglePopUp(false);
    }
  };
  const handleOnChange = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  return (
    <Background>
      <Container>
        <PopUpHeader>
          <PopUpTitle>Add new project</PopUpTitle>
          <CloseButton onClick={togglePopUp}>
            <FaWindowClose />
          </CloseButton>
        </PopUpHeader>
        <form onSubmit={handleSubmit}>
          <Label>
            Color
            <ColorInput
              type="color"
              value={projectData.color}
              name="color"
              onChange={handleOnChange}
              required
            />
          </Label>
          <Label>
            Name of project
            <Input
              type="text"
              name="name"
              value={projectData.name}
              onChange={handleOnChange}
              required
            />
            {projectData.errors.name && (
              <ErrorMessage>{projectData.errors.name}</ErrorMessage>
            )}
          </Label>
          <Submit type="submit">Add Project</Submit>
        </form>
      </Container>
    </Background>
  );
}

export default AddProjectPopUp;
