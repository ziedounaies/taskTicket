import React, { useState, useEffect } from "react";

import List from "@material-ui/core/List";
import Modal from "@material-ui/core/Modal";

import { Divider } from "@material-ui/core";
import { getTasksAll } from "../../store/action/tasks/getTasks";
import Pagination from "@mui/material/Pagination";

import { useDispatch, useSelector } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { alpha, makeStyles } from "@material-ui/core/styles";

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
export default function Index({ open, handleClose }) {
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
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);


  const { tasks, totalItemAll, totalPages, currentPage } = useSelector(
    (state) => state.getTasksAllReducer
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
    dispatch(getTasksAll(token, page));
    }
  }, [dispatch, page]);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: 24,
            p: 4,
            flexDirection: "row",
            backgroundColor: "white",
            borderColor: "#d3d3d3",
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: 10,
            height: "75%",
            width: "23%",
            display: "flex",
            flexDirection:'column',
            justifyContent:'space-between'
          }}
        >
          <div style={{marginTop:5}} >
            <List dense className={classes.root}>
              {tasks.map((value, index) => {
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

          <div
            style={{ marginLeft:10,marginBottom:30, display: "flex", flexDirection: "row" }}
          >
            <a
              style={{
                color: "#3e41a8",
                fontSize: 14,
                fontFamily: "Rubik-Meduim",
                color: "#3e41a8",
                marginTop: 5,
                marginLeft: 12,
              }}
            >
              {" "}
              Showing {`${(currentPage - 1) * 9 + 1}`} -{" "}{(currentPage - 1)*9+tasks.length} of {totalItemAll}{" "}
            </a>
            <Pagination
              style={{ marginLeft: "5%" }}
              count={totalPages}
              size="small"
              onChange={handleChange}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
