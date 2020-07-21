import React from "react";
import UserPanel from "./UserPanel/UserPanel";
import { Container } from "./SidebarStyles";

function Sidebar({ userData: { info, projects }, logOut }) {
  return (
    <Container>
      <UserPanel userInfo={info} logOut={logOut} />
    </Container>
  );
}

export default Sidebar;
