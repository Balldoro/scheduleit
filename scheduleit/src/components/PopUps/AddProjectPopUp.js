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
} from "./AddProjectPopUpStyles";
import { Label } from "../Auth/AuthStyles";
import { FaWindowClose } from "react-icons/fa";

function AddProjectPopUp({ createProject, uid, closePopUp }) {
  const [color, setColor] = useState("#222222");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject(uid, color, name);
    closePopUp(false);
  };

  return (
    <Background>
      <Container>
        <PopUpHeader>
          <PopUpTitle>Add new project</PopUpTitle>
          <CloseButton onClick={() => closePopUp(false)}>
            <FaWindowClose />
          </CloseButton>
        </PopUpHeader>
        <form onSubmit={handleSubmit}>
          <Label>
            Color
            <ColorInput
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </Label>
          <Label>
            Name of project
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Label>
          <Submit type="submit">Add Project</Submit>
        </form>
      </Container>
    </Background>
  );
}

export default AddProjectPopUp;
