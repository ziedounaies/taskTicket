
import React, { useEffect, useState,useRef } from "react";

import { classes } from "istanbul-lib-coverage";

import { Button, Paper } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Alert from '@mui/material/Alert';
import rafiki from "../../assets/rafiki.png";
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { useHistory } from "react-router";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {userSingUp} from '../../store/action/auth/auth';


export default function Index(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fisrtName, setFisrtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profession, setProfession] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nationality, setNationality] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [openEmail, setOpenEmail] = React.useState(false);
const [userAdded,setUserAdded]= React.useState(false);
const [errMsg, setErrMsg] = useState("");

  const dispatch = useDispatch()

  const { errorsRegister,registeredUser }=useSelector(state=>state.addUserReducer)


useEffect(() => {
 if(errorsRegister!==""){
 setOpenEmail(true)
 
}else {
  setOpenEmail(false)
}
}, [errorsRegister])



  const registerHandler = () => {
    //const EMAIL_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
    if (email ==="" || password===""||fisrtName===""||lastName===""||nationality===""||address===""||phoneNumber===""||profession===""||birthDate===""){
      setErrMsg("missing inormation")
      setOpenEmail(true)
  }

    else {
       dispatch(
        userSingUp ({
            email:email,
            password:password,
            fisrtName:fisrtName,
            lastName:lastName,
            nationality:nationality,
            address:address,
            phoneNumber:phoneNumber,
            profession:profession,
            birthDate:birthDate
      })
    );
    }
    }

   useEffect(() => {
   
    registeredUser && history.push("/login")
   
   }, [registeredUser])
   



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

          // width: "50%",
          height: "100%",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
       
        <Paper
 elevation={3}
          style={{
           
      backgroundColor:"00a5ab",
            width: "72%",marginLeft:'100px',height:'75%',marginTop:'110px',
            display:'flex',flexDirection:'row',justifyContent:'space-around',borderRadius:10
          }}
          className={classes.root}
          noValidate
          autoComplete="off"
        >

        <div  >
          <div
            style={{
              width: "110%",
              color: "#2A5555",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#00a5ab",
                marginLeft: "-100px",
                fontFamily: "Rubik-Medium "
              }}
            >
       fisrtName
            </p>
          </div>

          <TextField
            style={{ width: "61.5%"}}
            id="filled-basic"
            label=""
            variant="outlined"
            onChange={(e) => setFisrtName(e.target.value)}
            
            value={fisrtName}
          />

<div
            style={{
              width: "110%",
              color: "#2A5555",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#00a5ab",
                marginLeft: "-100px",
                fontFamily: "Rubik-Medium "
                
              }}
            >
       lastName
            </p>
          </div>

          <TextField
            style={{ width: "61.5%"}}
            id="filled-basic"
            label=""
            variant="outlined"
            onChange={(e) => setLastName(e.target.value)}
            
            value={lastName}
          />

<div
            style={{
              width: "110%",
              color: "#2A5555",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#00a5ab",
                marginLeft: "-120px",
                fontFamily: "Rubik-Medium "
              }}
            >email
            </p>
          </div>

          <TextField
            style={{ width: "61.5%" }}
            id="filled-basic"
            label=""
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            
            value={email}
          />

<div
            style={{
              width: "110%",
              color: "#2A5555",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#00a5ab",
                marginLeft: "-100px",
                fontFamily: "Rubik-Medium "
                
              }}
            >profession
            </p>
          </div>

          <TextField
            style={{ width: "61.5%" }}
            id="filled-basic"
            label=""
            variant="outlined"
            onChange={(e) => setProfession(e.target.value)}
            
            value={profession}
          />

<div
            style={{
              width: "110%",
              color: "#2A5555",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#00a5ab",
                marginLeft: "-100px",
                fontFamily: "Rubik-Medium "
               
              }}
            >birthDate
            </p>
          </div>

          <TextField
            style={{ width: "61.5%",marginBottom:'20px'}}
            id="filled-basic"
            label=""
            variant="outlined"
            onChange={(e) => setBirthDate(e.target.value)}
            
            value={birthDate}
          />
</div>
<div style={{}} >
<div
            style={{
              width: "110%",
              color: "#2A5555",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#00a5ab",
                marginLeft: "-100px",
                fontFamily: "Rubik-Medium "
              
              }}
            >nationality
            </p>
          </div>

          <TextField
            style={{ width: "61.5%" }}
            id="filled-basic"
            label=""
            variant="outlined"
            onChange={(e) => setNationality(e.target.value)}
            
            value={nationality}
          />


<div
            style={{
              width: "110%",
              color: "#2A5555",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#00a5ab",
                marginLeft: "-110px",
                fontFamily: "Rubik-Medium "
               
              }}
            >address
            </p>
          </div>

          <TextField
            style={{ width: "61.5%" }}
            id="filled-basic"
            label=""
            variant="outlined"
            onChange={(e) => setAddress(e.target.value)}
            
            value={address}
          />



<div
            style={{
              width: "110%",
              color: "#2A5555",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#00a5ab",
                marginLeft: "-75px",
                fontFamily: "Rubik-Medium "
               
              }}
            >    phoneNumber

            </p>
          </div>

          <TextField
            style={{ width: "61.5%" }}
            id="filled-basic"
            label=""
            variant="outlined"
            onChange={(e) => setPhoneNumber(e.target.value)}
            
            value={phoneNumber}
          />



<div
            style={{
              width: "110%",
              color: "#2A5555",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#00a5ab",
                marginLeft: "-100px",
                fontFamily: "Rubik-Medium "
              }}
            >    password

            </p>
          </div>

          <TextField
            style={{ width: "61.5%" }}
            id="filled-basic"
            label=""
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            
            value={password}
          />
</div>
     
   </Paper>
   

        <div
          style={{
            width: "98.1%",
            
          }}
        >
          <Button
            style={{
              color: "white",
              backgroundColor: "#3e41a8 ",
              width: "30%",
              cursor: "pointer",
            marginTop:50
            }}
        
          
            onClick={()=>registerHandler()}
          >
            REGISTER
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          <div
            style={{
              width: "99%",
              color: "#2A5555",
            }}
          >
            <div style={{ height: "120%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <h5> </h5>
                <h5 style={{ color: "#3e41a8" }}></h5>
              </div>

              <p
                style={{
                  color: " #00a5ab",
                  fontSize: "12px",
                  marginTop: "65px",
                  marginBlockEnd: "45px",
                }}
              >
                ©2021 all rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    
    
     
      <Collapse in={openEmail} style={{position:'absolute',bottom:10,right:10}} >
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
           {errorsRegister !=="" ? errorsRegister :  "missing information" }  
        </Alert>
      </Collapse>
  

      <Collapse in={userAdded} style={{position:'absolute',bottom:10,right:10}} >
        <Alert
        severity="error"
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
