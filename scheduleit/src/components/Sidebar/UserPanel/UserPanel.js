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

function UserPanel({ userInfo, logOut }) {
  return (
    <Container>
      <UserIconWrapper>
        <UserIcon />
      </UserIconWrapper>
      <UserName>
        {userInfo && `${userInfo.firstName} ${userInfo.lastName}`}
      </UserName>
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
