import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userSingUp } from "../../store/action/auth/auth";

import { Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import ProfileSettings from "../profileSettings";
import { upload } from "../../store/action/projects/getProjects";
import Delete from "../Delete";
import Password from "../password";
import Button from "@mui/material/Button";
//import {UserAdd} from "../../store/action/auth/auth";
import { useDispatch } from "react-redux";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { notification } from "../../store/action/auth/auth";
import { Box } from "@material-ui/core";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
export default function Index() {
  const [openpassword, setOpenpassword] = React.useState(false);
  const [openUserAdded, setOpenUserAdded] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fisrtName, setFisrtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profession, setProfession] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nationality, setNationality] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errMsgRegister, setErrMsgRegister] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [openEmail, setOpenEmail] = React.useState(false);
  const [userAdded, setUserAdded] = React.useState(false);
  const [openprofileSettings, setOpenprofileSettings] = React.useState(false);

  const { errorsRegister, registeredUser } = useSelector(
    (state) => state.addUserReducer
  );
  const { uploadFile } = useSelector((state) => state.uploadReducer);

  const { data, subscription, payload } = useSelector(
    (state) => state.setNotificationReducer
  );

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userSingUp());
  }, []);

  useEffect(() => {
    if (errorsRegister !== "") {
      setOpenEmail(true);
    } else {
      setOpenEmail(false);
    }
  }, []);

  const registerHandler = () => {
    //const EMAIL_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
    if (
      email === "" ||
      password === "" ||
      fisrtName === "" ||
      lastName === "" ||
      nationality === "" ||
      address === "" ||
      phoneNumber === "" ||
      profession === "" ||
      birthDate === ""
    ) {
      setErrMsg("missing inormation");
      setOpenEmail(true);
    } else {
      dispatch(
        userSingUp({
          email: email,
          password: password,
          fisrtName: fisrtName,
          lastName: lastName,
          nationality: nationality,
          address: address,
          phoneNumber: phoneNumber,
          profession: profession,
          birthDate: birthDate,
        })
      );
    }

    setUserAdded(true);
    // history.push("/users")
  };

  useEffect(() => {
    registeredUser && history.push("/users");
  }, [registeredUser]);

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const [files, setFiles] = useState([]);

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile); // Assuming 'file' is the field name expected by your API

      dispatch(upload(formData));
    }
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
    setOpenprofileSettings(false);
  };

  const closeDelete = () => {
    setOpenDelete(false);
    setOpenprofileSettings(true);
  };

  const handleOpenpassword = () => {
    setOpenpassword(true);
    setOpenprofileSettings(false);
  };

  const closepassword = () => {
    setOpenpassword(false);
    setOpenprofileSettings(true);
  };

  return (
    <div
      className="App"
      style={{
        flex: 1,
      }}
    >
      <ProfileSettings
        open={openprofileSettings}
        handleClose={() => setOpenprofileSettings(false)}
        setOpenDelete={() => handleOpenDelete()}
        setOpenpassword={() => handleOpenpassword()}
      />
      <Delete open={openDelete} handleClose={() => closeDelete()} />

      <Password open={openpassword} handleClose={() => closepassword()} />

      <p
        style={{
          borderStyle: "solid",
          borderWidth: 1.8,
          borderColor: "#d3d3d3",
          borderRadius: 20,
          width: "92%",
          height: "85%",
          backgroundColor: "white",
          marginLeft: 60,
          marginTop: 44,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "s",
          }}
        >
          <p
            style={{
              marginTop: 20,
              marginLeft: 20,
              borderStyle: "solid",
              borderWidth: 1.8,
              borderColor: "#d3d3d3",
              borderRadius: 20,
              width: 130,
              height: 110,
              // padding: 22,
            }}
          >
            <img
              src={selectedFile && URL.createObjectURL(selectedFile)}
              {...uploadFile[0]}
              // alt="Uploaded Image"
              style={{
                maxWidth: 100,
                maxHeight: 100,
                marginTop: 5,
                borderRadius: 10,
              }}
            />
          </p>
          <input
            style={{ marginRight: 80, marginLeft: 30 }}
            type="file"
            name="file"
            multiple
            onChange={handleFileSelect}
          ></input>

          <div style={{ marginTop: 40 }}>
            <div style={{ display: "flex", flexDirection: "row" }}></div>
          </div>
        </div>

        <Divider variant="fullWidth" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "20%",
              marginLeft: -50,
              marginTop:-20
            }}
          >
            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 40,
                marginLeft: -190,
              }}
            >
              First Name{" "}
            </a>
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ marginLeft: -20, marginTop: 15 }}
              // value={userData?.fisrtName}
              //onChange={(event)=>onChange("fisrtName",event.target.value)}
              onChange={(e) => setFisrtName(e.target.value)}
              value={fisrtName}
            />
            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 40,
                marginLeft: -190,
              }}
            >
              Last Name{" "}
            </a>

            <TextField
              id="standard-basic"
              variant="standard"
              style={{ marginLeft: -20, marginTop: 15 }}
              // value={userData?.lastName}
              // onChange={(event)=>onChange("lastName",event.target.value)}
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 40,
                marginLeft: -225,
              }}
            >
              Email{" "}
            </a>

            <TextField
              id="standard-basic"
              style={{ marginLeft: -20, marginTop: 15 }}
              variant="standard"
              //value={userData?.email}
              //onChange={(event)=>onChange("email",event.target.value)}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "20%",
              marginLeft: -25,
              marginTop:-20
            }}
          >
            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 40,
                marginLeft: -195,
              }}
            >
              Profession{" "}
            </a>
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ marginLeft: -20, marginTop: 15 }}
              // value={userData?.profession}
              // onChange={(event)=>onChange("profession",event.target.value)}
              onChange={(e) => setProfession(e.target.value)}
              value={profession}
            />
            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 40,
                marginLeft: -195,
              }}
            >
              Birth Date{" "}
            </a>

            <TextField
              id="standard-basic"
              variant="standard"
              style={{ marginLeft: -20, marginTop: 15 }}
              //value={userData?.birthDate}
              //onChange={(event)=>onChange("birthDate",event.target.value)}
              onChange={(e) => setBirthDate(e.target.value)}
              value={birthDate}
            />
            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 40,
                marginLeft: -180,
              }}
            >
              Nationality{" "}
            </a>

            <TextField
              id="standard-basic"
              variant="standard"
              style={{ marginLeft: -20, marginTop: 15 }}
              //value={userData?.nationality}
              //onChange={(event)=>onChange("nationality",event.target.value)}
              onChange={(e) => setNationality(e.target.value)}
              value={nationality}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "20%",
              marginLeft: -20,
              marginTop:-20
            }}
          >
            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 40,
                marginLeft: -220,
              }}
            >
              Adress{" "}
            </a>
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ marginLeft: -20, marginTop: 15 }}
              // value={userData?.address}
              // onChange={(event)=>onChange("address",event.target.value)}
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />

            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 40,
                marginLeft: -150,
              }}
            >
              Phone Number{" "}
            </a>

            <TextField
              id="standard-basic"
              variant="standard"
              style={{ marginLeft: -20, marginTop: 15 }}
              // value={userData?.phoneNumber}
              // onChange={(event)=>onChange("phoneNumber",event.target.value)}
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />

            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 40,
                marginLeft: -150,
              }}
            >
              Password{" "}
            </a>

            <TextField
              id="standard-basic"
              variant="standard"
              style={{ marginLeft: -20, marginTop: 15 }}
              // value={userData?.password}
              //onChange={(event)=>onChange("password",event.target.value)}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>

        <Button
          style={{
            marginTop: -70,
            padding: "10px",

            width: "100px",
            marginLeft: "1040px",
            cursor: "pointer",
            color: "#00a5ab",
            borderColor: "#d3d3d3",
            borderRadius: 10,
          }}
          variant="outlined"
          onClick={() =>
            registerHandler() &&
            dispatch(notification(data, subscription, payload, "User added"))
          }
        >
          Add user
        </Button>
      </p>

      <Collapse
        in={openEmail}
        style={{ position: "absolute", bottom: 10, right: 10 }}
      >
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenEmail(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {errorsRegister !== "" ? errorsRegister : "missing information"}
        </Alert>
      </Collapse>

      <Collapse
        in={userAdded}
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
                setUserAdded(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          user added
        </Alert>
      </Collapse>
    </div>
  );
}
