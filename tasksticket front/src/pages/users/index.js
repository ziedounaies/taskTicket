import { Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUser } from "../../store/action/auth/auth";

import Pagination from "@mui/material/Pagination";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import { alpha, makeStyles } from "@material-ui/core/styles";

import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import icontrash from "../../assets/icontrash.svg";
import { BrowserRouter as Router, useHistory ,useLocation} from "react-router-dom";
import {UserDelete} from '../../store/action/auth/auth'

const DATA = [0, 1, 2, 3, 4, 5, 6];

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

export default function Index() {
  const [checked, setChecked] = React.useState([0]);
  const classes = useStyles();

  const [userDeleted, setUserDeleted] = React.useState(false);


  const dispatch = useDispatch();

  

   const { user,totalPages,currentPage ,totalItem} = useSelector((state) => state.getUserReducer);
;

 function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}




  const history = useHistory();

 ;

 
const handleChange = (event, value) => {
  setPage(value)
  };
const [page,setPage] = useState(1)

  useEffect(() => {
  
    const token = window.localStorage.getItem("token");
    if (token) {
    dispatch(getUser(token,page));
    }
  }, [dispatch,page]);



  const handleDelete = (id) => {
   
    dispatch(UserDelete(id))
   console.log(id)
    setUserDeleted(true);
  };



  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <div
        style={{
          height: "8%",
          width: "92%",
          color: "#d3d3d3",
          borderWidth: 1.6,
          borderStyle: "solid",
          marginLeft: "18px",
          borderRadius: 10,
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",

          backgroundColor: "#ffffff",
        }}
      >
        <div>
          <a
            style={{
              color: "#00a5ab",
              fontSize: "15px",
              fontFamily: "Rubik-Regular",

              lineHeight: "15px",
            }}
          >
            FirstName
          </a>
        </div>
        <Divider
          style={{ marginLeft: "-10px" }}
          orientation="vertical"
          flexItem
        />
        <a
          style={{
            color: "#00a5ab",
            fontSize: "15px",
            fontFamily: "Rubik-Regular",
            marginLeft: "0px",
            lineHeight: "15px",
          }}
        >
          lastName{" "}
        </a>
        <Divider style={{}} orientation="vertical" flexItem />
        <a
          style={{
            color: "#00a5ab",
            fontSize: "15px",
            fontFamily: "Rubik-Regular",
            marginLeft: "-20px",
            marginRight: "20px",
            lineHeight: "15px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "",
          }}
        >
          Email{" "}
        </a>
        <Divider style={{}} orientation="vertical" flexItem />
        <a
          style={{
            color: "#00a5ab",
            fontSize: "15px",
            fontFamily: "Rubik-Regular",
            marginLeft: "-20px",
            marginRight: "20px",
            lineHeight: "15px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "",
          }}
        >
          Action{" "}
        </a>
      </div>

      <div
        style={{
          height: "74%",
          width: "92%",
          color: "#d3d3d3",
          borderWidth: 1.6,
          borderStyle: "solid",
          marginLeft: "18px",
          borderRadius: 10,
          marginTop: "35px",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 10,
            marginTop: "-10px",
          }}
        >
          <a
            style={{
              color: "#00a5ab",
              fontSize: "20px",
              fontFamily: "Rubik-Medium",
              marginRight: "20px",
              marginLeft: "10px",
              lineHeight: "15px",
              marginTop: "25px",
              cursor: "pointer",
            }}
          >
            {" "}
            Users{" "}
           
          </a>

      <div  style={{
        marginTop:20,
        marginLeft:-5,
              color: "#00a5ab",
              fontSize: "20px",
              fontFamily: "Rubik-Medium"}} >
         ({totalItem})
        </div>    

          <Button
            style={{
              marginTop: "10px",
              borderRadius: 10,
              width: "90px",
              height: "45px",
              marginLeft: "975px",
              cursor: "pointer",
              backgroundColor: "",
              color: "#00a5ab",
              borderColor: "#d3d3d3",
            }}
            variant="outlined"
            onClick={() => history.push(`/users/addUser`)}
          >
            Add user
          </Button>
        </div>
        <Divider component="li" />

        <List dense className={classes.root}>
          {user?.map((value, index) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <>
                <ListItem
                  style={{
                    color: "black",
                    justifyContent: "space-between",
                    paddingRight: 18,
                    height: 55,
                  }}
                  key={value}
                >
                  <ListItemText
                    id={labelId}
                    primary={`${(currentPage - 1) * 5 + index + 1}`}
                    style={{ flex: "none" }}
                  />
                    <ListItemText
                      id={labelId}
                      primary={value.fisrtName}
                      style={{ maxWidth:'25%'}}
                    />

                  <ListItemText
                    id={labelId}
                    primary={value.lastName}
                    style={{ maxWidth:'25%'}}
                  />

                  <ListItemText
                    id={labelId}    
                    primary={value.email}
                    style={{ maxWidth:'25%'}}
                  />

                  <ListItemSecondaryAction
                    style={{ position: "static", transform: "none" }}
                  ></ListItemSecondaryAction>

                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() =>  handleDelete(value._id) }   
                  >
                                 <img src={icontrash} height={20} width={20} />
                    
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      history.push(`/detailsUsers?id=${value?._id}`)
                    }
                  >
                    Details>
                  </p>
                </ListItem>
                {index !== DATA.length - 1 && <Divider variant="middle" />}
              </>
            );
          })}
        </List>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <a
          style={{
            color: "#3e41a8",
            fontSize: 14,
            fontFamily: "Rubik-Meduim",
            color: "#3e41a8",
            marginTop: 5,
            marginLeft: 15,
          }}
        >
          {" "}
          Showing   {`${(currentPage - 1) * 5 +   1}`} - {(currentPage - 1) * 5 +  user.length} of {totalItem}{" "}
        </a>
        <Pagination
          style={{ marginLeft: 25 }}
          count={totalPages}
          size="small"
          onChange={handleChange}
        />
      </div>
      <Collapse in={userDeleted} style={{position:'absolute',bottom:10,right:10}} >
        <Alert
        severity="success"
          action={
            <IconButton
              aria-label="close"
              color="success"
              size="small"
              onClick={() => {
                setUserDeleted(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
            user deleted
        </Alert>
      </Collapse>
    </div>
  );
}
