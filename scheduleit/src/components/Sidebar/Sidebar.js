import React from "react";
import UserPanel from "./UserPanel/UserPanel";
import { Container } from "./SidebarStyles";
import Navigation from "./Navigation/Navigation";

function Sidebar({ userData: { info, projects }, logOut }) {
  return (
    <Container>
      <UserPanel userInfo={info} logOut={logOut} />
      <Navigation userProjects={projects} />
    </Container>
  );
}

export default Sidebar;
