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

function AddProjectPopUp({ createProject, closePopUp }) {
  const [color, setColor] = useState("#222222");
  const [name, setName] = useState({ value: "", error: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.value) {
      createProject(color, name.value);
      closePopUp(false);
    } else {
      setName({ ...name, error: "Name can not be empty!" });
    }
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
              value={name.value}
              onChange={(e) => setName({ ...name, value: e.target.value })}
            />
            {name.error && <ErrorMessage>{name.error}</ErrorMessage>}
          </Label>
          <Submit type="submit">Add Project</Submit>
        </form>
      </Container>
    </Background>
  );
}

export default AddProjectPopUp;
