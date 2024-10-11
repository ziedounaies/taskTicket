import React, { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { alpha, makeStyles } from "@material-ui/core/styles";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { IconButton, Paper } from "@material-ui/core";
import List from "@material-ui/core/List";
import motivationembauche from "../../assets/motivationembauche.jpg";
import icondownload from "../../assets/icondownload.svg";
import icontrash from "../../assets/icontrash.svg";
import monicabing from "../../assets/monicabing.png";
import { Box } from "@material-ui/core";
import ProjectsTasksDetail from "../projectsTasksDetail";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { upload } from "../../store/action/projects/getProjects";

import {

  getByidPro,
} from "../../store/action/projects/getProjects";
import {
  BrowserRouter as Router,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";

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
  const history = useHistory();

  const [openprojectsTasksDetail, setOpenprojectsTasksDetail] =
    React.useState(false);

  const classes = useStyles();

  const query = useQuery();

  const { projectsById } = useSelector((state) => state.getByidProjectReducer);

  function useQuery() {
    const { search } = useLocation();
  }
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getByidPro(query.get("id")));

  }, []);




  const { projet } = useSelector((state) => state.getProjectsReducer);
  



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

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "row",

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProjectsTasksDetail
        open={openprojectsTasksDetail}
        handleClose={() => setOpenprojectsTasksDetail(false)}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "29px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "initial",
          }}
        >
          {" "}
          <a
            style={{
              fontFamily: "Rubik-Medium",
              fontSize: "20px",
              color: "#00a5ab",
              display: "flex",
              flexDirection: "row",
              marginBlockEnd: "20px",
            }}
          >
            Informations
          </a>{" "}
        </div>
        <Paper
          elevation={0}
          style={{
            display: "flex",
            height: "85%",
            width: "93%",
            height: 520,
            flexDirection: "column",
            justifyContent: "space-between",
            color: "#d3d3d3",
            borderWidth: 1.6,
            borderStyle: "solid",
            paddingBottom: 10,
            borderRadius: 15,
            marginRight: "30px",
          }}
        >
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
                flexDirection: "row",
                marginTop: "18px",
                marginLeft: "-50px",
              }}
            >
              <a>
                {" "}
                <img style={{ marginRight: 15 }} src={monicabing} />{" "}
              </a>
              <a
                style={{
                  color: "black",
                  fontSize: "15px",
                  fontFamily: "Rubik-Regular",
                  marginTop: "5px",
                  lineHeight: "15px",
                }}
              >
                {" "}
                {projectsById?.name}{" "}
              </a>
            </div>

            <div>
              <p
                style={{
                  color: "red",
                  borderWidth: 1.6,
                  borderStyle: "solid",
                  paddingBottom: 10,
                  borderRadius: 8,
                  fontFamily: "Rubik",
                  padding: 5,
                  marginRight: "-49px",
                }}
              >
                {projectsById?.priority}
              </p>
            </div>
          </div>

          <a
            style={{
              color: "#00a5ab",
              fontSize: "20px",
              fontFamily: "Rubik-Regular",
              display: "flex",
              flexDirection: "row",
              justifyContent: "-moz-initial",
              marginLeft: "20px",
            }}
          >
            Project Name
          </a>
          <a
            style={{
              color: "black",
              fontSize: "15px",
              fontFamily: "Rubik-Regular",
              marginLeft: "-193px",
            }}
          >
            HR Dashboard
          </a>
          <a
            style={{
              color: "#00a5ab",
              fontSize: "20px",
              fontFamily: "Rubik-Regular",
              display: "flex",
              flexDirection: "row",
              justifyContent: "-moz-initial",
              marginLeft: "21px",
            }}
          >
            Description
          </a>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a
              style={{
                color: "black",
                fontSize: "15px",
                fontFamily: "Rubik-Regular",
                marginLeft: "-35px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur{" "}
            </a>
            <a
              style={{
                color: "black",
                fontSize: "15px",
                fontFamily: "Rubik-Regular",
                marginLeft: "-43px",
              }}
            >
              {" "}
              adipiscing elit. A, vulputate fermentum{" "}
            </a>
            <a
              style={{
                color: "black",
                fontSize: "15px",
                fontFamily: "Rubik-Regular",
                marginLeft: "-25px",
              }}
            >
              {" "}
              tempus et. Ullamcorper neque, non neque{" "}
            </a>
            <a
              style={{
                color: "black",
                fontSize: "15px",
                fontFamily: "Rubik-Regular",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              {" "}
              purus lorem quam sit lectus volutpat. Placerat{" "}
            </a>
            <a
              style={{
                color: "black",
                fontSize: "15px",
                fontFamily: "Rubik-Regular",
                marginLeft: "-60px",
              }}
            >
              {" "}
              orci, ut varius vel. Gravida tincidunt{" "}
            </a>
            <a
              style={{
                color: "black",
                fontSize: "15px",
                fontFamily: "Rubik-Regular",
                marginLeft: "-75px",
              }}
            >
              malesuada vel scelerisque sapien.{" "}
            </a>
          </div>

          <a
            style={{
              color: "#00a5ab",
              fontSize: "20px",
              fontFamily: "Rubik-Regular",
              display: "flex",
              flexDirection: "row",
              marginLeft: "22px",
            }}
          >
            Tags
          </a>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "-89px",
            }}
          >
            <p
              style={{
                backgroundColor: "#dad7fe",
                borderRadius: 6,
                paddingLeft: "12px",
                paddingBottom: "3px",
                paddingRight: "12px",
                marginRight: "15px",
                paddingTop: "5px",
                color: "black",
                fontSize: "12px",
                fontFamily: "Rubik-Regular",
                height: 20,
              }}
            >
              Design
            </p>
            <p
              style={{
                backgroundColor: "#ccf8fe",
                borderRadius: 6,
                paddingLeft: "18px",
                paddingBottom: "3px",
                paddingRight: "18px",
                marginRight: "15px",
                paddingTop: "5px",
                color: "black",
                fontSize: "12px",
                fontFamily: "Rubik-Regular",
                height: 20,
              }}
            >
              UX
            </p>
            <p
              style={{
                backgroundColor: "#e2fbd7",
                borderRadius: 6,
                paddingLeft: "20px",
                paddingBottom: "3px",
                paddingRight: "20px",
                paddingTop: "5px",
                color: "black",
                fontSize: "12px",
                fontFamily: "Rubik-Regular",
                height: 20,
              }}
            >
              UI
            </p>
          </div>

          <a
            style={{
              color: "#00a5ab",
              fontSize: "20px",
              fontFamily: "Rubik-Regular",
              display: "flex",
              flexDirection: "row",
              marginLeft: "20px",
            }}
          >
            Evolution
          </a>

          <a
            style={{
              color: "black",
              fontSize: "15px",
              fontFamily: "Rubik-Regular",
              display: "flex",
              flexDirection: "row",
              marginLeft: "20px",
            }}
          >
            Task done 0 / 20
          </a>
          <Box
            style={{
              backgroundColor: "#dad7fe",
              borderRadius: 6,
              width: "80%",
              marginLeft: "21px",
              marginTop: "1px",
            }}
            m={1}
          >
            <Box
              style={{
                backgroundColor: "",
                borderRadius: 6,
                height: "96%",
                width: "80%",
                marginTop: "0px",
                marginLeft: "2px",
              }}
              m={1}
            ></Box>
          </Box>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                color: "red",
                borderWidth: 1.6,
                borderStyle: "solid",
                paddingBottom: 8,
                borderRadius: 8,
                fontFamily: "Rubik-Regular",
                padding: 6,
                width: 110,
                fontSize: "11px",
                lineHeight: "15px",
                marginLeft: "18px",
              }}
            >
              {projectsById?.date}
            </p>

            <p
              style={{
                color: "#3e41a8",
                borderWidth: 1.6,
                borderStyle: "solid",
                paddingBottom: 8,
                borderRadius: 8,
                fontFamily: "Rubik-Regular",
                padding: 6,
                width: 110,
                fontSize: "11px",
                lineHeight: "15px",
                marginLeft: "35px",
              }}
            >
              {projectsById?.date}
            </p>
          </div>
        </Paper>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "-20px",
          marginLeft: "-25px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              color: "#00a5ab",
              marginLeft: "10px",
              fontSize: "20px",
              fontFamily: "Rubik-Medium",
            }}
          >
            <p>Project’s Tasks </p>
          </div>

          <IconButton
            style={{
              color: "#00a5ab",
              marginLeft: "130px",
              fontFamily: "Rubik-Regular",
              fontSize: "12px",
              marginRight: "35px",
              cursor: "pointer",
            }}
            onClick={() => setOpenprojectsTasksDetail(true)}
          >
            View All >
          </IconButton>
        </div>
        <Paper
          elevation={0}
          className={classes.paper}
          style={{
            display: "flex",
            height: "85%",
            width: "93%",
            height: 520,
            flexDirection: "column",
            color: "#d3d3d3",
            borderWidth: 1.6,
            borderStyle: "solid",
            paddingBottom: 10,
            borderRadius: 15,
            marginRight: "70px",
          }}
        >
          <div>
            <List dense className={classes.root}>
              {projet?.map((value, index) => {
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
                        primary={`0${index + 1}`}
                        style={{ flex: "none" }}
                      />
                      <ListItemText
                        id={labelId}
                        primary={value.name}
                        style={{ flex: "none" }}
                      />

                      <ListItemSecondaryAction
                        style={{ position: "static", transform: "none" }}
                      >
                        <Checkbox
                          style={{ color: "#3e41a8" }}
                          edge="end"
                          onChange={handleToggle(value)}
                          checked={checked.indexOf(value) !== -1}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </ListItemSecondaryAction>

                      <p>Details></p>
                    </ListItem>
                    {index !== DATA.length - 1 && <Divider variant="middle" />}
                  </>
                );
              })}
            </List>
          </div>
        </Paper>
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "-20px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              color: "#00a5ab",
              marginLeft: "-5px",
              fontSize: "20px",
              fontFamily: "Rubik-Medium",
            }}
          >
            <p>Attachments </p>
          </div>
          <IconButton
            style={{
              color: "#00a5ab",
              marginLeft: "100px",
              fontFamily: "Rubik-Regular",
              fontSize: "12px",
            }}
          >
            {" "}
            View All >
          </IconButton>
        </div>

        <Paper
          elevation={0}
          style={{
            height: "82%",
            width: "85%",
            height: 520,
            color: "#d3d3d3",
            borderWidth: 1.6,
            borderStyle: "solid",
            paddingBottom: 10,
            borderRadius: 15,
            marginRight: "70px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <img
              style={{ marginTop: "5px" }}
              src={motivationembauche}
              height={120}
              width={90}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  color: "black",
                  fontFamily: "Rubik-Regular",
                  fontSize: "15px",
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "25px",
                }}
              >
                Lettre.pdf
              </p>
              <p
                style={{
                  color: "#00a5ab",
                  fontFamily: "Rubik-Regular",
                  fontSize: "12px",
                }}
              >
                Added 01 /09 /2021 at 2:00 PM
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
                marginBlockEnd: "5px",
              }}
            >
              <input
                type="file"
                name="file" /*</div> onChange={fileSelectedHandler}*/
              ></input>
              <IconButton>
                <img src={icondownload} height={18} width={18} />
              </IconButton>

              <input
                type="submit"
                value="Envoyer le formulaire"
                onChange={upload} /* onClick={() => fileUploadedHandler()} */
              >
                <div>{/*uploadFile*/}</div>
              </input>

              <IconButton>
                <img src={icontrash} height={20} width={20} />
              </IconButton>
            </div>
          </div>
          <div>
            <Divider
              style={{ marginTop: "5px" }}
              variant="middle"
              component="li"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <img
              style={{ marginTop: "5px" }}
              src={motivationembauche}
              height={120}
              width={90}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  color: "black",
                  fontFamily: "Rubik-Regular",
                  fontSize: "15px",
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "25px",
                }}
              >
                Lettre.pdf
              </p>
              <p
                style={{
                  color: "#00a5ab",
                  fontFamily: "Rubik-Regular",
                  fontSize: "12px",
                }}
              >
                Added 01 /09 /2021 at 2:00 PM
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
                marginBlockEnd: "5px",
              }}
            >
              <IconButton>
                <img src={icondownload} height={18} width={18} />
              </IconButton>

              <IconButton>
                <img src={icontrash} height={20} width={20} />
              </IconButton>
            </div>
          </div>
          <div>
            <Divider
              style={{ marginTop: "5px" }}
              variant="middle"
              component="li"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <img
              style={{ marginTop: "5px" }}
              src={motivationembauche}
              height={120}
              width={90}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  color: "black",
                  fontFamily: "Rubik-Regular",
                  fontSize: "15px",
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "25px",
                }}
              >
                Lettre.pdf
              </p>
              <p
                style={{
                  color: "#00a5ab",
                  fontFamily: "Rubik-Regular",
                  fontSize: "12px",
                }}
              >
                Added 01 /09 /2021 at 2:00 PM
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
                marginBlockEnd: "5px",
              }}
            >
              <IconButton>
                <img src={icondownload} height={18} width={18} />
              </IconButton>
              <IconButton>
                <img src={icontrash} height={20} width={20} />
              </IconButton>
            </div>
          </div>
          <div>
            <Divider
              style={{ marginTop: "5px" }}
              variant="middle"
              component="li"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <img
              style={{ marginTop: "5px" }}
              src={motivationembauche}
              height={120}
              width={90}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  color: "black",
                  fontFamily: "Rubik-Regular",
                  fontSize: "15px",
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "25px",
                }}
              >
                Lettre.pdf
              </p>
              <p
                style={{
                  color: "#00a5ab",
                  fontFamily: "Rubik-Regular",
                  fontSize: "12px",
                }}
              >
                Added 01 /09 /2021 at 2:00 PM
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
                marginBlockEnd: "5px",
              }}
            >
              <IconButton>
                <img src={icondownload} height={18} width={18} />
              </IconButton>
              <IconButton>
                <img src={icontrash} height={20} width={20} />
              </IconButton>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}
