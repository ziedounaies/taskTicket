import React, { useEffect, useState, useRef, useContext } from "react";

import { classes } from "istanbul-lib-coverage";

import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import {forgotPassword} from "../../store/action/auth/auth"
import { useDispatch } from "react-redux";
import rafiki from "../../assets/rafiki.png";

import untitled1 from "../../assets/untitled1.png";

import { useHistory, useRouteMatch ,Route} from "react-router-dom";




export default function Index() {
  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
  const history = useHistory();

  const [email, setEmail] = useState("");

  const EMAIL_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;


  const dispatch = useDispatch();

   
const handleForgotPassword = () => {
  const data = { email };
  dispatch(forgotPassword(data));
};



      
     
 
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
          width: "50%",
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
            // onSubmit: {onLogin},
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
              Email address
            </p>
          </div>

          <TextField
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
        </form>

        <div
          style={{
            width: "126%",
            color: "#00a5ab ",
            cursor: "po",
          }}
        ></div>

        <div
          style={{
            width: "98.1%",
            marginTop:30
          }}
        >
          <Button
            style={{
              color: "white",
              backgroundColor: "#3e41a8 ",
              width: "44.5%",
              cursor: "pointer",
            }}
            onClick={handleForgotPassword}
            //  onClick={() => history.push("/")&&dispatch(login())}
          >
            send code password to email
          </Button>
        </div>


        <div
          style={{
            width: "126%",
            color: "#00a5ab ",
            cursor: "pointer",
          }}
        >
          <h5 onClick={() => history.push(`/resetPassword`)}>
            code 
          </h5>
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

    </div>
  );
}
