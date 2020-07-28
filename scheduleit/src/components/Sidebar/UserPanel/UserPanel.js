import React from "react";
import {
  UserIcon,
  UserIconWrapper,
  UserName,
  Container,
  ActionIcon,
  LogOut,
  Settings,
} from "./UserPanelStyles";
import { FaSignOutAlt } from "react-icons/fa";

function UserPanel({ userInfo, logOut }) {
  return (
    <Container>
      <UserIconWrapper>
        <UserIcon />
      </UserIconWrapper>
      <UserName>
        {userInfo && `${userInfo.firstName} ${userInfo.lastName}`}
      </UserName>
      <div>
        <Settings to="/account">
          <ActionIcon />
        </Settings>
        <LogOut as={"button"} onClick={logOut}>
          <ActionIcon as={FaSignOutAlt} />
        </LogOut>
      </div>
    </Container>
  );
}

export default UserPanel;
