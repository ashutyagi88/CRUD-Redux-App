import React from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/userSlice";

function InputData() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.userList);

  const handleAdd = () => {
    dispatch(
      userActions.addUser({
        id: userList[userList.length - 1].id + 1,
        name,
        userName,
      })
    );
    setName("");
    setUserName("");
  };

  return (
    <InputDataStyle>
      <TextField
        label="Name"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></TextField>
      <TextField
        label="Username"
        variant="outlined"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      ></TextField>
      <Button variant="contained" size="large" onClick={handleAdd}>
        Add User
      </Button>
    </InputDataStyle>
  );
}

const InputDataStyle = styled.div`
  margin: auto;
  width: 80vw;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fbf5f3;
  border-radius: 15px;
`;

export default InputData;
