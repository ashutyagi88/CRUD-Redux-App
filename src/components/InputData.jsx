import React from "react";
import styled from "styled-components";
import { TextField, Button, Snackbar } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/userSlice";

function InputData() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const userList = useSelector((state) => state.users.userList);

  const handleAdd = () => {
    if (name && userName) {
      if (userList.length === 0) {
        dispatch(
          userActions.addUser({
            id: 1,
            name,
            userName,
          })
        );
      } else {
        dispatch(
          userActions.addUser({
            id: userList[userList.length - 1].id + 1,
            name,
            userName,
          })
        );
      }
      setSnackbarMessage("User Added");
      setOpen(true);
      setName("");
      setUserName("");
    } else {
      setSnackbarMessage("Enter Details");
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setSnackbarMessage("");
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
      <Snackbar
        open={open}
        message={snackbarMessage}
        onClose={handleClose}
        autoHideDuration={2000}
      />
    </InputDataStyle>
  );
}

const InputDataStyle = styled.div`
  margin: 0 auto;
  width: 80vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fbf5f3;
  border-radius: 15px;
`;

export default InputData;
