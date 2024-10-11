import "./App.css";
import React, { useEffect, useState, useRef, useContext } from "react";

import { classes } from "istanbul-lib-coverage";
import forgetPassword from '../forgetPassword/index';
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";

import rafiki from "../../assets/rafiki.png";
import Alert from "@mui/material/Alert";
import untitled1 from "../../assets/untitled1.png";

import { useHistory, useRouteMatch } from "react-router";
import { getUser, login } from "../../store/action/auth/auth";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { isBlank, isEmptyObj } from "../../utility/dataValidation";
import authContext from "../authProvider/authProvider";

import InputAdornment from "@material-ui/core/InputAdornment";

import Input from "@material-ui/core/Input";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Index(props) {
  const history = useHistory();
  //const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
});
const handleClickShowPassword = () => {
  setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

const handlePasswordChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};
  const userRef = useRef();
  const [openEmail, setOpenEmail] = React.useState(false);
  const [openPassword, setOpenPassword] = React.useState(false);
  const [userLoged, setUserLoged] = React.useState(false);
  const [errors, setErrors] = useState({});
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
  ></link>;

  const errRef = useRef();
  const { setAuth } = useContext(authContext);
  //const [token, setToken] = useState();

  


 
 

const {token}=useSelector((state)=>state.loginReducer)

useEffect(() => {
  localStorage.setItem("stateString", JSON.stringify(token));
}, [token]);


 const { errorsLogin, logedUser } = useSelector((state) => state.loginReducer);
useEffect(() => {
  if (errorsLogin !== ""){
    setOpenEmail(true)
    setErrMsg(errorsLogin)
  }

}, [errorsLogin])

  const loginHandler = () => {
    const EMAIL_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
    if (email ==="" || password ===""){
      setErrMsg("missing inormation")
      setOpenEmail(true) 
    }
    else {
       dispatch(
         login({
           email: email,
            password: password,
      })
    );
    }
    }

  
    


  

useEffect(() => {
  
  setOpenPassword&&setOpenEmail(errorsLogin ?true : false)

}, [errorsLogin])

  useEffect(() => {
    logedUser && history.push("/")
  

  }, [logedUser]);








  useEffect(() => {
    dispatch(login());

    // setErrMsg("");
  }, [email, password]);
/*
  useEffect(() => {
    userRef.current?.focus();
  }, []);
  
  useEffect(() => {
    setValidName(EMAIL_REGEX.test(email));
  }, [email]);
  
  useEffect(() => {
    setValidPwd(PASSWORD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);
  
  useEffect(() => {
    setErrMsg("");
  }, [email, password, matchPwd]);

  useEffect(() => {
    userRef.current?.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);
*/
  
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#F7FCFC",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          backgroundColor: "#ebebeb",
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <div style={{ marginTop: "30px", marginLeft: "-230px" }}>
          <img src={untitled1} height={80} width={130} />
        </div>

        <div
          style={{
            height: "20%",
            width: "100%",

            display: "flex",
          }}
        >
          <div style={{ flexDirection: "column" }}>
            <h1
              style={{
                color: "#00a5ab",
                width: "87%",
                height: "1%",
                fontFamily: "Rubik-Medium ",
                marginRight: "500px",
              }}
            >
              {" "}
              Unlock Your{" "}
            </h1>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "80%",
              }}
            >
              <h1
                style={{
                  color: "#00a5ab",
                  width: "63%",
                  fontFamily: "Rubik-Medium ",
                  marginRight: "-30px",
                  marginLeft: "75px",
                }}
              >
                Team
              </h1>
              <h1
                style={{
                  width: "1%",
                  color: "#3e41a8",
                  fontFamily: "Rubik-Medium ",
                  marginLeft: "-87px",
                }}
              >
                Performance
              </h1>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "65%",
          }}
        >
          {" "}
          <img src={rafiki} height={420} width={400} />
        </div>
      </div>

      <div
        style={{
          borderRadius: 17,
          backgroundColor: "",
          // width: "50%",
          height: "100%",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "87.5%",
            Color: "#2A5555",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Rubik-Medium",
                fontSize: "40px",
                color: "#00a5ab",
                marginBlockEnd: "-40px",
                marginLeft: "-110px",
              }}
            >
              Welcome{" "}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginBlockEnd: "-45px",
                marginLeft: "-10px",
              }}
            >
              <p
                style={{
                  fontFamily: "Rubik-Medium",
                  fontSize: "40px",
                  color: "#00a5ab",
                  marginRight: "20px",
                }}
              >
                To{" "}
              </p>
              <p
                style={{
                  fontFamily: "Rubik-Medium",
                  fontSize: "40px",
                  color: "#3e41a8",
                }}
              >
                {" "}
                Task Ticket{" "}
              </p>
            </div>
          </div>
          <div
            style={{
              width: "74.5%",
              color: "#2A5555",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                color: "#00a5ab",
                marginLeft: "169px",
              }}
            >
              Unlock Your Team Performance
            </p>
          </div>
        </div>
        <form
          style={{
         //   onSubmit: { onLogin },
            width: "70%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <div
            style={{
              width: "110%",
              color: "#2A5555",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                color: "#00a5ab",
                marginLeft: "59px",
                marginTop: "90px",
              }}
            >
              current password
            </p>
          </div>

          <Input
            style={{ width: "61.5%", marginTop: "-10px" }}
            id="filled-basic"
            label=""
            variant="outlined"
            onChange={(event) => {
              event.preventDefault();
              setEmail(event.target.value);
            }}
            value={email}
          />

          <div
            style={{
              width: "114%",
              color: "#2A5555",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                color: "#00a5ab",
                marginLeft: "43px",
                marginBlockEnd: "5px",
              }}
            >
             new Password
            </p>
          </div>
<div>
      
        
      
<Input  style={{ width: "99%", color: " ",marginRight:'70px' }}
            id="filled-basic"
            label="Enter password"
            variant="outlined"
            color="#00a5ab "
            onChange={(event) => {
              event.preventDefault();
              setPassword(event.target.value);
              
            }}
            value={password}

                type={values.showPassword ? "text" : "password"}
               // onChange={handlePasswordChange("password")}
                //value={values.password}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                           
                        </IconButton>
                    </InputAdornment>
                }
            />
             </div>

             
        </form>


    

        <div
          style={{
            width: "98.1%",
          }}
        >
          <Button
            style={{
              color: "white",
              backgroundColor: "#3e41a8 ",
              width: "44.5%",
              cursor: "pointer",
              marginTop:30
            }}
            onClick={() => loginHandler()}
          >
            update password
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          
        </div>
      </div>
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
         {errMsg}
        </Alert>
      </Collapse>

      <Collapse
        in={openPassword}
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
                setOpenPassword(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          password is wrong
        </Alert>
      </Collapse>

    
    </div>
  );
}
