import React, { useState } from "react";


import Modal from "@material-ui/core/Modal";
import { Divider } from "@material-ui/core";
import Vector11 from "../../assets/Vector11.png";
import Vector111 from "../../assets/Vector111.png";

import TextField from "@material-ui/core/TextField";
import {resetPassword} from "../../store/action/auth/auth"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};




export default function Index({ open, handleClose }) {
  const dispatch = useDispatch();
const [currentPassword,setCurrentPassword]=useState("")
const [newPassword,setNewPassword]=useState("")
const [confirmNewPassword,setConfirmNewPassword]=useState("")
const [passwordUpdated,setPasswordUpdated ]=React.useState(false);
const { logedUser } = useSelector((state) => state.loginReducer);
const {password}=useSelector((state)=> state.resetPasswordReducer)


const handleResetPassword = () => {
  if (newPassword !== confirmNewPassword) {
    // Handle password mismatch error
    return;
  }

  const data = {
    newPassword: newPassword,
  };

  dispatch(resetPassword(data, logedUser?.token));
};

useEffect(() => {
  //dispatch(resetPassword());
}, [])

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <p
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: 24,
            p: 4,
            backgroundColor: "white",
            borderColor: "#d3d3d3",
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: 10,
            height: "47%",
            width: "25%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column",justifyContent:'space-between' }}>


          <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginLeft: 25,
                marginTop:20
              }}
            >
              current Password{" "}
          

            <div style={{ display: "flex", flexDirection: "row" }}>
              <TextField
                style={{
            
                  marginTop:10,
                  backgroundColor: "white",
                  borderColor: "#d3d3d3",
                  borderStyle: "solid",
                 // borderWidth: 2.3,
                  borderRadius: 10,
                  height: 20,
                  width: "90%",
                }}
                onChange={(event) => {
                  event.preventDefault();
                  setCurrentPassword(event.target.value);
                }}
                value={currentPassword}
              />{" "}
           
            </div>
  </a>

            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginLeft: 25,
                marginTop:20
              }}
            >
              New Password{" "}
          

            <div style={{ display: "flex", flexDirection: "row" }}>
              <TextField
                style={{
            
                  marginTop:10,
                  backgroundColor: "white",
                  borderColor: "#d3d3d3",
                  borderStyle: "solid",
                 // borderWidth: 2.3,
                  borderRadius: 10,
                  height: 20,
                  width: "90%",
                }}
                onChange={(event) => {
                  event.preventDefault();
                  setNewPassword(event.target.value);
                }}
                value={newPassword}
              />{" "}
           
            </div>
  </a>
            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginLeft: 25,
                marginTop:20,
                cursor:'pointer'
              }}
             
            >
              Confirm New Password{" "}
          
            <div style={{ display: "flex", flexDirection: "row" }}>
              <TextField
                style={{
                  marginTop:10,
                  backgroundColor: "white",
                  borderColor: "#d3d3d3",
                  borderStyle: "solid",
                //  borderWidth: 2.3,
                  borderRadius: 10,
                  height: 20,
                  width: "90%",
                }}
                
                onChange={(event) => {
                  event.preventDefault();
                  setConfirmNewPassword(event.target.value);
                }}
                value={confirmNewPassword}
              />{" "}
           
            </div>
  </a>


<div style={{display:'flex',flexDirection:'column'}} >
            <Divider style={{marginTop:75}}  variant="fullWidth" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop:20
           
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: -25,
                }}
              >
                <img
                  src={Vector11}
                  height={10}
                  width={10}
                  style={{ marginTop: 7 }}
                />
                <a
                  style={{
                    fontFamily: "Rubik-Regular",
                    fontSize: 20,
                    color: "#00a5ab",
                    marginLeft:5
                  }}
                  
                >
                  Cancel
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: -25,
                }}
              >
                <a
                  style={{
                    fontFamily: "Rubik-Regular",
                    fontSize: 20,
                    color: "#3e41a8",
                    cursor:'pointer'
                  }}
                  onClick={handleResetPassword}
                >
                  Confirm
                </a>
                <img
                  src={Vector111}
                  height={10}
                  width={10}
                  style={{ marginTop: 7 ,marginLeft:5}}
                />
              </div>
            </div>

</div>

          </div>
        </p>
      </Modal>
      <Collapse
        in={passwordUpdated}
        style={{ position: "absolute", bottom: 10, right: 10 }}
      >
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="success"
              size="small"
              onClick={() => {
                setPasswordUpdated(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          password updated
        </Alert>
      </Collapse>
    </div>
  );
}
