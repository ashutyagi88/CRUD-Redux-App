import React from "react";
import styled from "styled-components";
import { Button, TextField, Card, CardContent, Snackbar } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";

function UserItem({ id, name, username }) {
  const [updateUser, setUpdateUser] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    dispatch(userActions.deleteUser({ id }));
  };

  const handleUpdate = () => {
    if (updateUser) {
      dispatch(userActions.updateUser({ id, userName: updateUser }));
      setUpdateUser("");
      setSnackbarMessage("Username Updated");
      setOpen(true);
    } else {
      setSnackbarMessage("Input New User Name");
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <UserItemStyle>
      <Card
        sx={{
          minWidth: "25rem",
          backgroundColor: "#e0cba8",
          marginTop: "1.25rem",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
        </CardContent>
      </Card>
      <Snackbar
        open={open}
        message={snackbarMessage}
        onClose={handleClose}
        autoHideDuration={2000}
      />
    </UserItemStyle>
  );
}

const UserItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
