import styled from "styled-components";
import { FaRegUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 0.7rem;
`;

export const UserIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  background: radial-gradient(
    circle,
    rgba(117, 255, 205, 1) 0%,
    rgba(82, 181, 145, 1) 100%
  );
  border-radius: 50%;
`;

export const UserIcon = styled(FaRegUser)`
  width: 30px;
  height: 35px;
  color: #006541;
`;

export const UserName = styled.span`
  font-size: 1.05rem;
  margin: 0.7rem 0;
`;

export const ManageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SettingsLink = styled(Link)`
  position: relative;

  &::before {
    font-size: 0.9rem;
    content: "Settings";
    position: absolute;
    display: none;
    background-color: #52b591;
    color: #fff;
    text-align: left;
    width: 80px;
    padding: 5px 10px;
    border-radius: 5px;
    top: 45%;
    right: -8px;
    transform: translateY(-50%);
  }
  &:hover,
  &:focus {
    color: #fff;
    &::before {
      display: block;
    }
  }
`;

export const SettingsIcon = styled(FaCog)`
  font-size: 1.1rem;
  position: relative;
  z-index: 5;
`;

export const LogoutButton = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 1.5rem;
  cursor: pointer;
  position: relative;

  &::before {
    font-size: 0.9rem;
    content: "Log Out";
    position: absolute;
    display: none;
    background-color: #52b591;
    color: #fff;
    text-align: right;
    width: 80px;
    padding: 5px 10px;
    border-radius: 5px;
    top: 45%;
    left: -8px;
    transform: translateY(-50%);
  }
  &:hover,
  &:focus {
    color: #fff;
    &::before {
      display: block;
    }
  }
`;

export const LogoutIcon = styled(FaSignOutAlt)`
  font-size: 1.1rem;
  position: relative;
  z-index: 5;
`;
