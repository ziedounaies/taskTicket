import React, { useEffect, useState } from "react";

import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import { Box } from "@material-ui/core";
import { upload } from "../../store/action/projects/getProjects";
import { Paper } from "@material-ui/core";
import untitled1 from "../../assets/untitled1.png";
import profile from "../../assets/profile.png";
import "react-datepicker/dist/react-datepicker.css";
import iconLogout from "../../assets/iconLogout.svg";
import icondashboard from "../../assets/icondashboard.svg";
import iconproject from "../../assets/iconproject.svg";
import iconTasks from "../../assets/iconTasks.svg";

import iconnotification from "../../assets/iconnotification.svg";
import Tasks from "../tasks";
import icontasksactive from "../../assets/icontasksactive.svg";
import iconprojectactive from "../../assets/iconprojectsactive.svg";
import iconProfilactif from "../../assets/iconProfilactif.jpg";
import icondashboardactive from "../../assets/icondashboardactive.svg";
import Logout from "../Logout";
import Login from "../login";
import projectsaffichage from "../projectsaffichage";
import projectsDetails from "../projectsDetails";
import { ToastContainer, toast } from "react-toastify";
import detailsTask from "../detailsTask";
import Profile from "../profile";
import ProjectsTasks from "../projectsTasksDetail";
import register from "../register/index";
import users from "../users/index";
import detailsUsers from "../detailsUsers/index";
import addUser from "../addUser";
import { getUser } from "../../store/action/auth/auth";
import { useSelector } from "react-redux";
import DeleteUser from "../DeleteUser";
import { useDispatch } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import { notification } from "../../store/action/auth/auth";



import Searchh from "../Searchh";


import { searchh } from "../../store/action/auth/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,

  useRouteMatch,
} from "react-router-dom";
import Home from "../Home";
import Projects from "../Projects";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  paper: { borderRadius: 20, borderColor: "#d3d3d3" },
}));

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
export default function Index(props) {

  const data = {
    title: 'User Added', // The title of your notification
    body: 'A new user has been added.', // The body text of your notification
    // Other notification data...
  };
  
  const subscription = {
    endpoint: 'https://your-push-service-endpoint.com', // The push service endpoint
    keys: {
      p256dh: 'your_p256dh_key',
      auth: 'your_auth_key',
    },
    // Other subscription data...
  };
  
  const payload = {
    // Custom payload data, if needed...
  };

  useEffect(() => {
    dispatch(notification(  data,subscription,payload,   'User added'));
  }, []);

  const fileUploadedHandler = () => {
    // const file = event.target.files[0];
    const fd = new FormData();
    fd.append("file", files, files.name);

    console.log(setFiles);
  };

  const [files, setFiles] = useState([]);


  useEffect(() => {
    dispatch(upload());
  }, []);


  const {notificationMessage} = useSelector(
    (state) => state.setNotificationReducer.message
  );

  const handleApi = (e) => {
    const formData = new FormData();
    formData.append("image", image);
  };

  const [image, setImage] = useState("");
  const classes = useStyles();

  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [openSearch, setOpenSearch] = React.useState(false);

  const dispatch = useDispatch();

  const { pathname } = useLocation();

 

  const { user } = useSelector((state) => state.getUserReducer);

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {

    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const filteredData = user.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
 
  });








  const handleKey = (e) => {
    const trimmedText = e.target.value.trim();
    if (e.key === "enter" && trimmedText) {
      dispatch(searchh);
    //  setsearchTerm("");
    }
  };





  

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

 

  return (
    <div
      className="App"
      style={{
        borderRadius: 15,
        backgroundColor: "#f7f6f4",
        width: "100vw",
        height: "100vh",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "15%",
          height: "95%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={0}
          style={{
            borderRadius: 1,
            color: "#d3d3d3",
            borderWidth: 1.6,
            borderStyle: "solid",
            paddingBottom: 10,
            borderRadius: 15,

            width: "90%",
            height: "95%",
            display: "flex",

            flexDirection: "column",
            justifyContent: "start",
          }}
          component="span"
          m={5}
        >
          <div
            style={{ display: "flex", flex: 1, backgroundColor: "white" }}
          ></div>
          <div>
            <img
              style={{ marginTop: "15px" }}
              src={untitled1}
              height={80}
              width={130}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              width: "100%",
              height: "85%",
            }}
          >
            <div
              style={{
                height: "7%",
                display: "flex",
                width: "100%",
                marginTop: "60px",
                backgroundImage:
                  pathname === "/"
                    ? "linear-gradient(to right, #fff, #bcbeff)"
                    : "none",
                flexDirection: "row",
                cursor: "pointer",
              }}
              onClick={() => history.push("/")}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  flex: 1,
                }}
              >
                <img
                  style={{ marginTop: "6px" }}
                  src={pathname === "/" ? icondashboard : icondashboardactive}
                  height={15}
                  width={15}
                />
                <p
                  style={{
                    color: pathname === "/" ? "#3e41a8" : "#00a5ab",
                    fontFamily: "unset",
                    marginTop: "2px",
                    marginRight: "45px",
                    fontWeight: "500",
                  }}
                >
                  Overview
                </p>
              </div>
              <div
                style={{
                  height: "100%",
                  width: 1,
                  backgroundColor: pathname === "/" ? "#3e41a8" : "transparent",
                }}
              ></div>
            </div>

            <div
              style={{
                height: "7%",
                display: "flex",
                width: "100%",
                marginTop: "40px",
                backgroundImage:
                  pathname === "/projects"
                    ? "linear-gradient(to right, #fff, #bcbeff)"
                    : "none",
                flexDirection: "row",
                cursor: "pointer",
              }}
              onClick={() => history.push("/projects")}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  flex: 1,
                }}
              >
                <img
                  style={{ marginTop: "6px" }}
                  src={
                    pathname === "/projects" ? iconprojectactive : iconproject
                  }
                  height={15}
                  width={15}
                />
                <p
                  style={{
                    color: pathname === "/projects" ? "#3e41a8" : "#00a5ab",
                    fontFamily: "unset",
                    marginTop: "2px",
                    marginRight: "54px",
                    fontWeight: "500",
                  }}
                >
                  Projects
                </p>
              </div>
              <div
                style={{
                  height: "100%",
                  width: 1,
                  backgroundColor:
                    pathname === "/projects" ? "#3e41a8" : "transparent",
                }}
              ></div>
            </div>
            <div
              style={{
                height: "7%",
                display: "flex",
                width: "100%",
                marginTop: "40px",
                marginLeft: "0px",
                backgroundImage:
                  pathname === "/tasks"
                    ? "linear-gradient(to right, #fff, #bcbeff)"
                    : "none",
                flexDirection: "row",
                cursor: "pointer",
              }}
              onClick={() => history.push("/tasks")}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  flex: 1,
                }}
              >
                <img
                  style={{ marginTop: "6px", marginLeft: 1 }}
                  src={pathname === "/tasks" ? icontasksactive : iconTasks}
                  height={15}
                  width={15}
                />
                <p
                  style={{
                    color: pathname === "/tasks" ? "#3e41a8" : "#00a5ab",
                    fontFamily: "unset",
                    marginTop: "2px",
                    marginRight: "75px",
                    fontWeight: "500",
                  }}
                >
                  Tasks
                  <div></div>
                </p>
              </div>
            </div>

            <div
              style={{
                height: "7%",
                display: "flex",
                width: "100%",
                marginTop: "40px",
                marginLeft: "5px",
                backgroundImage:
                  pathname === "/users"
                    ? "linear-gradient(to right, #fff, #bcbeff)"
                    : "none",
                flexDirection: "row",
                cursor: "pointer",
              }}
              onClick={() => history.push("/users")}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",

                  flex: 1,
                }}
              >
                <img
                  style={{ marginTop: "6px", marginLeft: 16 }}
                  src={pathname === "/users" ? iconprojectactive : iconproject}
                  height={15}
                  width={15}
                />
                <p
                  style={{
                    color: pathname === "/users" ? "#3e41a8" : "#00a5ab",
                    fontFamily: "unset",
                    marginTop: "2px",
                    marginLeft: "35px",
                    fontWeight: "500",
                  }}
                >
                  Users
                </p>
              </div>

              <div
                style={{
                  height: "100%",
                  width: 1,
                  backgroundColor:
                    pathname === "/users" ? "#3e41a8" : "transparent",
                }}
              ></div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                marginTop: "120px",
              }}
            >
              {" "}
              <p style={{ height: "7%", marginBlockEnd: "35px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpen(true)}
                >
                  <img
                    style={{ marginTop: "6px" }}
                    src={iconLogout}
                    height={15}
                    width={15}
                  />
                  <p
                    style={{
                      color: "#00a5ab",
                      fontFamily: "unset",
                      marginTop: "2px",
                      marginRight: "60px",
                      fontWeight: "500",
                    }}
                  >
                    Logout
                  </p>
                </div>
              </p>
            </div>
          </div>
        </Paper>
      </div>

      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          backgroundColor: "",
        }}
      >
        <Paper
          elevation={0}
          style={{
            color: "#d3d3d3",
            borderWidth: 1.6,
            borderStyle: "solid",
            paddingBottom: 10,
            borderRadius: 15,
            width: "92%",
            marginTop: "15px",
            borderRadius: 10,
            marginLeft: "60px",
          }}
          className={classes.grow}
        >
          <div style={{ width: "100%" }}>
            <Toolbar>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon
                    style={{ marginLeft: 190, color: "#00a5ab" }}

                    //   onClick={clearInput}
                  />
                </div>

                <Box
                  style={{
                    backgroundColor: "#f7f6f4",
                    borderRadius: 6,
                    height: "55%",
                    width: "130%",
                    color: "#00a5ab",
                  }}
                  m={1}
                >
                  <InputBase
                    placeholder="Search..."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                      input: { inputText },
               
                    //  value: { searchTerm },
                      onChange: { inputHandler },
                      onKeyDown: { handleKey },
                    }}
                    onClick={() => setOpenSearch(true)}
             
                    inputProps={{ "aria-label": "search" }}
                  />

                  <div>
                    {filteredData.map((value, index) => {
                      return (
                        <>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                            }}
                          >
                            {value.fisrtName}
                          </div>
                        </>
                      );
                    })}

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        overflow: "hidden",
                        //onChange:{handleFilter},
                      }}
                    ></div>
                  </div>
                </Box>
              </div>

              <div style={{ width: "90%", textAlign: "right" }}>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  <IconButton
                    style={{ marginTop: "3px" }}
                    color="primary"
                    aria-label="upload picture"
                    component="span"

                

              
                  >
                    <img
                      src={iconnotification}
                      height={18}
                      width={15}
                      {...notificationMessage}
                    />
                  </IconButton>

                  <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />

                  <IconButton
                    onClick={() => history.push("/profile")}
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <img
                      //pathname === "/users" ? iconprojectactive : iconproject

                      src={pathname === "/profile" ? profile : iconProfilactif}
                      height={15}
                      width={15}
                    />
                  </IconButton>
                </div>
              </div>
            </Toolbar>
         
          </div>
 
        </Paper>

        {/*  pages    */}
   
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/projects/viewall" component={projectsaffichage} />

          <Route exact path="/login" component={Login} />

          <Route exact path="/projectsDetails/:" component={projectsDetails}/>
                 
           

       

          <Route exact path="/tasks/detailsTask" component={detailsTask} />

          <Route exact path="/profile" component={Profile} />
          <Route
            exact
            path="/projects/projectsDetails/ProjectsTasks"
            component={ProjectsTasks}
          />
          <Route exact path="/users" component={users} />
          <Route exact path="/detailsUsers" component={detailsUsers} />

          <Route exact path="/users/addUser" component={addUser} />
          <Route exact path="/users/DeleteUser" component={DeleteUser} />

          <Route exact path="/register" component={register} />
         
          <DeleteUser open={open} setOpen={(value) => setOpen(value)} />
  
        </Switch>
      </div>

      <Searchh open={openSearch} setOpenSearch={() => setOpenSearch(false)} />
   
      <Logout open={open} setOpen={(value) => setOpen(value)} />
    </div>
    
  );
}
