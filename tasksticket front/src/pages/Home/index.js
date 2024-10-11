import React, { useState, useEffect } from "react";

import IconButton from "@material-ui/core/IconButton";

import { alpha, makeStyles } from "@material-ui/core/styles";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Box } from "@material-ui/core";


import { Paper } from "@material-ui/core";

import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import zied from "../../assets/zied.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import icontime from "../../assets/icontime.svg";

import fibriefcase from "../../assets/fibriefcase.svg";
import ficlipboard from "../../assets/ficlipboard.svg";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import {
  BrowserRouter as Router,
  useLocation,
  useHistory,
  useParams,
} from "react-router-dom";

import ProjectPagModal from "../projectPagModal";
import TasksPagModal from "../tasksPagModal";
import { useDispatch, useSelector } from "react-redux";
import { getPro } from "../../store/action/projects/getProjects";
import { getTasksAllHome } from "../../store/action/tasks/getTasks";

import { timee } from "../../store/action/auth/auth";


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

const DATA = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default function Index() {
 
  const [openProjectPagModal, setOpenProjectPagModal] = React.useState(false);
  const [openTasksPagModal, setOpenTasksPagModal] = React.useState(false);

  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();


  const { totalItemNewProjectPag } = useSelector(
    (state) => state.getProjectNewReducer
  );
  const { totalItemInprogress } = useSelector(
    (state) => state.tasksInProgressReducer
  );

  const { tasksHome } = useSelector((state) => state.getTasksAllReducer);

  const { project } = useSelector((state) => state.getProjectsReducer);

  const { time } = useSelector((state) => state.timeReducer);

  const { logedUser } = useSelector((state) => state.loginReducer);

 

/*


  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(logedUser));
  }, [logedUser]);


  const [token, setToken] = useState(() => {
    const storedToken = window.localStorage.getItem('token');
    if (storedToken) {
      return JSON.parse(storedToken);
    } else {
      return null;
    }
  });
  
  */



  const [LogedUser, setLogedUser] = useState(null);


   useEffect(() => {
    localStorage.setItem("MY_APP_STATE", JSON.stringify(logedUser));
    
    const data = window.localStorage.getItem("MY_APP_STATE");
    if (data) {
      setLogedUser(JSON.parse(data));
     
    }
  dispatch(getPro(logedUser?.token));
    dispatch(getTasksAllHome(logedUser?.token));
    dispatch(timee());
  }, [logedUser]);



 
  
 
  
  
  
  useEffect(() => {
    
  
    const token = window.localStorage.getItem("token");
    if (token) {
      dispatch(getPro(token));
      dispatch(getTasksAllHome(token));
      dispatch(timee());
    }



  }, [dispatch]);


  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor: "",
      }}
    >
      <ProjectPagModal
        open={openProjectPagModal}
        handleClose={() => setOpenProjectPagModal(false)}
      />

      <TasksPagModal
        open={openTasksPagModal}
        handleClose={() => setOpenTasksPagModal(false)}
      />

      {renderMobileMenu}
      {renderMenu}

      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <div
          style={{ borderRadius: 10 }}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "84%",
            width: "30%",
            margin: "15px",
    marginBottom:60
          }}
        >
          <Paper
            elevation={0}
            style={{
              display: "flex",
              width: "100%",
              height: "50%",
              display: "flex",
              flexDirection: "column",
              color: "#d3d3d3",
              borderWidth: 1.6,
              borderStyle: "solid",
          
              borderRadius: 15,
            }}
          >
            <div>
              <h1
                style={{
                  color: "#00a5ab",
                  marginRight: "210px",
                  marginBlockEnd: "10px",
                }}
              >
                Greetings
              </h1>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <img
                  style={{ marginTop: "12px" }}
                  src={icontime}
                  height={20}
                  width={20}
                />
                <p
                  style={{
                    color: "#000000",
                    marginRight: "220px",
                    marginTop: "10px",
                  }}
                >
                  {time}{" "}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <img
                  style={{ marginTop: "12px", color: "black" }}
                  src={fibriefcase}
                  height={18}
                  width={18}
                />

                <p
                  style={{
                    color: "#000000",
                    marginRight: "178px",
                    marginTop: "10px",
                    maxWidth: "50%",
                  }}
                >
                  {totalItemNewProjectPag} Projects on hold{" "}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <img
                  style={{ marginTop: "12px", color: "black" }}
                  src={ficlipboard}
                  height={20}
                  width={20}
                />

                <p
                  style={{
                    marginRight: "210px",
                    marginTop: "12px",
                    color: "black",
                    maxWidth: "50%",
                  }}
                >
                  {totalItemInprogress} Tasks today{" "}
                </p>
              </div>
            </div>
            <img
              style={{ marginLeft: "260px", marginTop: "-177px" }}
              src={zied}
              height={170}
              width={130}
            />
          </Paper>

          <Paper
            elevation={0}
            style={{
              display: "flex",
              backgroundColor: "white",
            borderColor:"#d3d3d3",
             marginTop:5,
        
              borderWidth: 1.6,
              borderStyle: "solid",
              paddingBottom: 20,
              borderRadius: 15,
            }}
          >
            <DatePicker
              style={{ height: "100%", width: 150, padding: 15 }}
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />
          </Paper>
        </div>


        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            height: "82%",
            width: "30%",
            marginRight: "15px",
            overflowY: "scroll",
            color: "#d3d3d3",
            borderWidth: 1.6,
            borderStyle: "solid",
          marginTop:-50,
            borderRadius: 15,
         
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{ color: "#00a5ab", marginLeft: "10px" }}>
              <p>My Projects </p>
            </div>
            <p
              style={{
                color: "#00a5ab",
                marginLeft: "175px",
                cursor: "pointer",
              }}
              onClick={() => setOpenProjectPagModal(true)}
            >
              {" "}
              View All >
            </p>
          </div>
          <Divider style={{ marginTop: "1px" }} />

          {project?.map((item, index) => (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginTop: "1px",
                  padding: "5px",
                  marginLeft: "-15px",
                }}
              >
                <p
                  style={{
                    backgroundColor: "#f1f2f4",
                    paddingBottom: 10,
                    borderRadius: 10,
                    width: "23%",
                    padding: "5px",
                    marginTop: "13px",
                  }}
                >
                  <a
                    style={{
                      color: "black",
                      fontSize: "14px",
                      fontWeight: "normal",
                      fontFamily: "Rubik",
                    }}
                  >
                    {" "}
                    {item.statue}
                  </a>{" "}
                </p>

                <p
                  style={{
                    color: "red",
                    borderWidth: 1.6,
                    borderStyle: "solid",
                    paddingBottom: 10,
                    borderRadius: 8,
                    fontFamily: "Rubik",
                    padding: 5,
                    marginLeft: "100px",
                    width: "18%",
                  }}
                >
                  {item.priority}
                </p>
              </div>

              <h2
                style={{
                  color: "black",
                  marginRight: "240px",
                  marginTop: "-5px",
                }}
              >
                {item.name}
              </h2>
              <h3
                style={{
                  color: "black",
                  marginRight: "168px",
                  marginTop: "-5px",
                }}
              >
                Task done 18 / 20
              </h3>

              <Box
                style={{
                  backgroundColor: "#dad7fe",
                  borderRadius: 6,
                  width: "85%",
                  marginLeft: "18px",
                }}
                m={1}
              >
                <Box
                  style={{
                    backgroundColor: "#3e41a8",
                    borderRadius: 6,
                    height: "96%",
                    width: "85%",
                    marginTop: "0px",
                    marginLeft: "1px",
                  }}
                  m={1}
                ></Box>
              </Box>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "8px",
                  marginTop: "0px",
                }}
              >
                <Box
                  style={{
                    backgroundColor: "#dad7fe",
                    borderRadius: 6,
                    height: "55%",
                    width: "20%",
                  }}
                  m={1}
                >
                  <p style={{ marginTop: "3px", color: "black" }}>Design</p>
                </Box>
                <Box
                  style={{
                    backgroundColor: "#ccf8fe",
                    borderRadius: 6,
                    height: "55%",
                    width: "20%",
                  }}
                  m={1}
                >
                  <p style={{ marginTop: "3px", color: "black" }}>UX</p>
                </Box>
                <Box
                  style={{
                    backgroundColor: "#e2fbd7",
                    borderRadius: 6,
                    height: "55%",
                    width: "20%",
                  }}
                  m={1}
                >
                  <p style={{ marginTop: "3px", color: "black" }}>UI</p>
                </Box>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginTop: "-10px",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "red",
                      borderWidth: 1.6,
                      borderStyle: "solid",
                      paddingBottom: 8,
                      borderRadius: 8,
                      fontFamily: "Rubik",
                      padding: 5,
                      marginLeft: 15,
                    }}
                  >
                    {item.date}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      color: "#00a5ab",
                      marginLeft: "90px",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      history.push(`/projects/projectsDetails${item?._id}`)
                    }
                  >
                    Details >
                  </p>
                </div>
              </div>
              <Divider style={{ marginTop: "10px" }} variant="middle" />
            </>
          ))}
        </Paper>
        <Paper
          elevation={0}
          className={classes.paper}
          style={{
            display: "flex",
            height: "82%",
            width: "30%",
            flexDirection: "column",
            color: "#d3d3d3",
            borderWidth: 1.6,
            borderStyle: "solid",
            
            borderRadius: 15,
           marginTop:-60
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{ color: "#00a5ab", marginLeft: "10px" }}>
              <p>MY TASKS </p>
            </div>
            <p
              style={{
                color: "#00a5ab",
                marginLeft: "190px",
                cursor: "pointer",
              }}
              onClick={() => setOpenTasksPagModal(true)}
            >
              {" "}
              View All >
            </p>
          </div>
          <Divider />

          <div>
            <List dense className={classes.root}>
              {tasksHome.map((value, index) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                  <>
                    <ListItem
                      style={{ margin: "8px", color: "black" }}
                      key={value}
                    >
                      <ListItemText id={labelId} primary={value.taksName} />

                      <ListItemSecondaryAction>
                        <Checkbox
                          style={{ color: "#3e41a8" }}
                          edge="end"
                          onChange={handleToggle(value)}
                          checked={checked.indexOf(value) !== -1}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                    {index !== DATA.length - 1 && <Divider variant="middle" />}
                  </>
                );
              })}
            </List>
          </div>
        </Paper>
      </div>
    </div>
  );
}
