import React from "react";
import styled from "styled-components";
import UserItem from "./UserItem";
import { useSelector } from "react-redux";
import { Paper } from "@mui/material";

function User() {
  const userList = useSelector((state) => state.users.userList);
  return (
    <UserStyle>
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          overflowY: "scroll",
          padding: "10px 0",
        }}
      >
        {userList.map((user) => (
          <UserItem
            key={user.id}
            name={user.name}
            username={user.userName}
            id={user.id}
          ></UserItem>
        ))}
      </Paper>
    </UserStyle>
  );
}

const UserStyle = styled.div`
  width: 45em;
  height: 34em;
  padding: 5px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default User;
