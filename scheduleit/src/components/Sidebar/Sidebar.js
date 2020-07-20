import React from "react";
import UserPanel from "./UserPanel/UserPanel";
import { Container } from "./SidebarStyles";

function Sidebar() {
  return (
    <Container>
      <UserPanel />
    </Container>
  );
}

export default Sidebar;
