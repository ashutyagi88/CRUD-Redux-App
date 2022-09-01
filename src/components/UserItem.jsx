import React from "react";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";

function UserItem({ id, name, username }) {
  const [updateUser, setUpdateUser] = useState("");
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(userActions.deleteUser({ id }));
  };

  const handleUpdate = () => {
    dispatch(userActions.updateUser({ id, userName: updateUser }));
  };

  return (
    <UserItemStyle>
      <Info>
        <h2>{name}</h2>
        <h4>@{username}</h4>
      </Info>
      <Btns>
        <TextField
          label="New Username"
          variant="outlined"
          size="small"
          style={{ margin: "10px" }}
          value={updateUser}
          onChange={(e) => setUpdateUser(e.target.value)}
        ></TextField>
        <Button
          variant="contained"
          size="small"
          style={{ margin: "10px" }}
          onClick={handleUpdate}
        >
          Update Username
        </Button>
        <Button
          variant="contained"
          size="small"
          style={{ margin: "10px" }}
          onClick={handleDelete}
        >
          Delete User
        </Button>
      </Btns>
    </UserItemStyle>
  );
}

const UserItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0cba8;
  width: 80%;
  padding: 5px 10px;
  margin-top: 20px;
  border-radius: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  h2 {
    margin: 5px;
  }

  h4 {
    margin: 5px;
  }
`;

const Btns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export default UserItem;
