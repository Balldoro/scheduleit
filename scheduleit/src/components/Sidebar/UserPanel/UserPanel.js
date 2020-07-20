import React from "react";
import {
  UserIcon,
  UserIconWrapper,
  UserName,
  Container,
  ManageContainer,
  SettingsIcon,
  LogoutIcon,
  LogoutButton,
  SettingsLink,
} from "./UserPanelStyles";

function UserPanel() {
  return (
    <Container>
      <UserIconWrapper>
        <UserIcon />
      </UserIconWrapper>
      <UserName>Marek Miklaszewski</UserName>
      <ManageContainer>
        <SettingsLink to="/account">
          <SettingsIcon />
        </SettingsLink>
        <LogoutButton>
          <LogoutIcon />
        </LogoutButton>
      </ManageContainer>
    </Container>
  );
}

export default UserPanel;
