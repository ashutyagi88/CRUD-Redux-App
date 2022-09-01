import React from "react";
import styled from "styled-components";
import UserItem from "./UserItem";
import { useSelector } from "react-redux";

function User() {
  const userList = useSelector((state) => state.users.userList);
  return (
    <UserStyle>
      {userList.map((user) => (
        <UserItem
          key={user.id}
          name={user.name}
          username={user.userName}
          id={user.id}
        ></UserItem>
      ))}
    </UserStyle>
  );
}

const UserStyle = styled.div`
  width: 45vw;
  height: 70vh;
  padding: 5px;
  background-color: #fbf5f3;
  margin-top: 20px;
  border-radius: 15px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default User;
