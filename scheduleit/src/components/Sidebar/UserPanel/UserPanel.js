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

function UserPanel({ user, logOut }) {
  return (
    <Container>
      <UserIconWrapper>
        <UserIcon />
      </UserIconWrapper>
      <UserName>{user}</UserName>
      <ManageContainer>
        <SettingsLink to="/account">
          <SettingsIcon />
        </SettingsLink>
        <LogoutButton onClick={logOut}>
          <LogoutIcon />
        </LogoutButton>
      </ManageContainer>
    </Container>
  );
}

export default UserPanel;
