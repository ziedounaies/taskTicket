import { Paper } from "@material-ui/core";
import React from "react";
import { Box } from "@material-ui/core";
import chekblue from "../../assets/chekblue.png";
import IconButton from "@material-ui/core/IconButton";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  getProjectNewPag,
  getProjectInprogrgessPag,
  getProjectCompeltedPag,
} from "../../store/action/projects/getProjects";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { LocalConvenienceStoreOutlined } from "@mui/icons-material";

export default function Index() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { logedUser } = useSelector((state) => state.loginReducer);
  const { projectNew, totalItemNewProjectPag } = useSelector(
    (state) => state.getProjectNewReducer
  );
  const { projectInprogress, totalItemInprogressProjectPag } = useSelector(
    (state) => state.getProjectInprogressReducer
  );
  const { projectCompleted, totalItemCompletedProjectPag } = useSelector(
    (state) => state.getProjectCompletedReducer
  );

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      dispatch(getProjectInprogrgessPag(token));
      dispatch(getProjectNewPag(token));

      dispatch(getProjectCompeltedPag(token));
    }
  }, [dispatch]);

  const handleButtonClickInprogress = () => {
    history.push("/projects/viewall");
    console.log("Inprogress");
  };

  const handleButtonClickNew = () => {
    history.push("/projects/viewall");
    console.log("new");
  };

  const handleButtonClickCompleted = () => {
    history.push("/projects/viewall");
    console.log("Completed");
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#f7f6f4",
        flex: 1,
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-around",
          padding: 16,
        }}
      >
        <div
          style={{
            height: "75%",
            width: "28%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: "-18px",
            }}
          >
            <div
              style={{
                color: "#00a5ab",
                fontSize: "20px",
                fontWeight: 500,
                marginLeft: 18,
              }}
            >
              <p>New ({totalItemNewProjectPag}) </p>
            </div>

            <IconButton
              style={{
                color: "#00a5ab",
                marginLeft: "200px",
                fontSize: "10px",
                fontWeight: "normal",
                marginTop: "30px",
                marginRight: "-19px",
                cursor: "pointer",
                marginTop: 17,
              }}
              onClick={handleButtonClickNew}
            >
              View All >{" "}
            </IconButton>
          </div>

          {projectNew?.map((value, index) => (
            <>
              <Paper
                elevation={0}
                style={{
                  width: "100%",
                  height: "48%",
                  display: "flex",
                  flexDirection: "column",
                  color: "#d3d3d3",
                  borderWidth: 1.6,
                  borderStyle: "solid",
                  paddingBottom: 10,
                  borderRadius: 15,
                  marginLeft: "11px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <p
                    style={{
                      backgroundColor: "#f1f2f4",
                      paddingBottom: 10,
                      borderRadius: 10,
                      width: "24%",
                      padding: 4,
                      marginTop: "13px",

                      maxWidth: "50%",
                    }}
                  >
                    <a
                      style={{
                        color: "black",
                        fontWeight: "normal",
                        fontFamily: "Rubik",
                        maxWidth: "25%",
                      }}
                    >
                      {value?.statue}{" "}
                    </a>{" "}
                  </p>

                  <p
                    style={{
                      color: "red",
                      borderWidth: 1.6,
                      borderStyle: "solid",
                      //paddingBottom: 5,
                      borderRadius: 8,
                      fontFamily: "Rubik",

                      //  paddingBottom:2,
                      marginLeft: "100px",
                      maxWidth: "100%",
                      width: "19%",
                      height: "1",
                    }}
                  >
                    {value?.priority}
                  </p>
                </div>

                <p
                  style={{
                    marginRight: "180px",
                    color: "black",
                    fontWeight: "normal",
                    fontFamily: "Rubik",
                    fontSize: "20px",
                    marginTop: "-5px",
                    maxWidth: "33%",
                  }}
                >
                  {" "}
                  {value?.name}
                </p>
                <a
                  style={{
                    marginRight: "210px",
                    color: "#000000",
                    fontFamily: "Rubik",
                    fontSize: "15px",
                    marginBlockEnd: "11px",
                    marginTop: "-10px",
                    marginLeft: 22,
                  }}
                >
                  Task done {value?.taskDone} / 20
                </a>

                <Box
                  style={{
                    backgroundColor: "#dad7fe",
                    borderRadius: 6,
                    width: "80%",
                    marginLeft: "25px",
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
                      marginLeft: "15px",
                    }}
                    m={1}
                  ></Box>
                </Box>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "15px",
                    marginTop: "-3px",
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
                    <p
                      style={{
                        marginTop: "5px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik",
                      }}
                    >
                      {value?.taksTags}
                      Design
                    </p>
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
                    <p
                      style={{
                        marginTop: "5px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik",
                      }}
                    >
                      {value?.taksTags}
                      UX
                    </p>
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
                    <p
                      style={{
                        marginTop: "5px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik",
                      }}
                    >
                      {value?.taksTags}
                      UI
                    </p>
                  </Box>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: "-15px",
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
                        padding: 6,
                        marginLeft: 18,
                        marginTop: 20,
                      }}
                    >
                      {value?.date}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#00a5ab",
                        marginLeft: "55px",
                        marginTop: "25px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        history.push(`/projectsDetails/${value?._id}`)
                      }
                    >
                      Details >
                    </p>
                  </div>
                </div>
              </Paper>
            </>
          ))}
        </div>

        <div
          style={{
            height: "75%",
            width: "28%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "-25px",
            }}
          >
            <div
              style={{
                color: "#00a5ab",
                fontSize: "19px",
                fontWeight: 500,
                marginTop: "10px",
                marginLeft: 10,
              }}
            >
              <p>In progress ({totalItemInprogressProjectPag})</p>
            </div>
            <IconButton
              style={{
                color: "#00a5ab",
                fontSize: "10px",
                fontWeight: "normal",
                marginTop: "30px",
                cursor: "pointer",
                marginTop: 22,
              }}
              onClick={handleButtonClickInprogress}
            >
              View All >
            </IconButton>
          </div>

          {projectInprogress?.map((value, index) => (
            <>
              <Paper
                elevation={0}
                style={{
                  width: "100%",
                  height: "48%",
                  display: "flex",
                  flexDirection: "column",
                  color: "#d3d3d3",
                  borderWidth: 1.6,
                  borderStyle: "solid",
                  paddingBottom: 10,
                  borderRadius: 15,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginTop: "-10px",
                    padding: 8,
                    marginLeft: -10,
                  }}
                >
                  <p
                    style={{
                      backgroundColor: "#f1f2f4",
                      borderRadius: 10,
                      width: "22%",
                      padding: 4.5,
                      marginTop: "13px",
                    }}
                  >
                    <a
                      style={{
                        fontWeight: "normal",
                        fontFamily: "Rubik",
                        color: "black",
                      }}
                    >
                      {value?.statue}
                    </a>{" "}
                  </p>

                  <p
                    style={{
                      color: "orange",
                      borderWidth: 1.6,
                      borderStyle: "solid",
                      paddingBottom: 10,
                      borderRadius: 8,
                      fontFamily: "Rubik",
                      padding: 5,
                      marginLeft: "100px",
                    }}
                  >
                    {value?.priority}
                  </p>
                </div>

                <p
                  style={{
                    marginRight: "265px",
                    marginTop: "-11px",
                    fontWeight: "normal",
                    fontFamily: "Rubik",
                    fontSize: "20px",
                    color: "black",
                    marginLeft: 30,
                  }}
                >
                  {value?.name}
                </p>
                <a
                  style={{
                    marginRight: "201px",
                    marginTop: "-11px",
                    color: "#000000",
                    fontFamily: "Rubik",
                    fontSize: "15px",
                    marginLeft: 28,
                  }}
                >
                  Task done {value?.taskDone} / 20
                </a>

                <Box
                  style={{
                    backgroundColor: "#dad7fe",
                    borderRadius: 6,
                    width: "80%",
                    marginLeft: "27px",
                    marginTop: "10px",
                  }}
                  m={1}
                >
                  <Box
                    style={{
                      backgroundColor: "#3e41a8",
                      borderRadius: 6,
                      height: "96%",
                      width: "80%",
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
                    marginLeft: "19px",
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
                    <p
                      style={{
                        marginTop: "3px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik",
                      }}
                    >
                      {value?.taksTags}
                      Design
                    </p>
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
                    <p
                      style={{
                        marginTop: "3px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik",
                      }}
                    >
                      {value?.taksTags}
                      UX
                    </p>
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
                    <p
                      style={{
                        marginTop: "3px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik",
                      }}
                    >
                      {value?.taksTags}
                      UI
                    </p>
                  </Box>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
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
                        padding: 6,
                        marginLeft: 22,
                      }}
                    >
                      {value?.date}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#00a5ab",
                        marginLeft: "50px",
                        marginTop: "25px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        history.push(`/projects/projectsDetails/:${value?._id}`)
                      }
                    >
                      Details >
                    </p>
                  </div>
                </div>
              </Paper>
            </>
          ))}
        </div>
        <div
          style={{
            height: "75%",
            width: "28%",
            margin: "5px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "-38px",
            }}
          >
            <div
              style={{
                color: "#00a5ab",

                fontSize: "20px",
                fontWeight: 500,
                marginTop: "15px",
              }}
            >
              <p>Completed ({totalItemCompletedProjectPag})</p>
            </div>
            <IconButton
              style={{
                color: "#00a5ab",
                fontSize: "10px",
                fontWeight: "normal",
                marginTop: "10px",
                cursor: "pointer",
                marginTop: 27,
                marginRight: 5,
              }}
              onClick={handleButtonClickCompleted}
            >
              View All >
            </IconButton>
          </div>

          {projectCompleted?.map((value, index) => (
            <>
              <Paper
                elevation={0}
                style={{
                  width: "100%",
                  height: "48%",
                  display: "flex",
                  flexDirection: "column",
                  color: "#d3d3d3",
                  borderWidth: 1.6,
                  borderStyle: "solid",
                  paddingBottom: 10,
                  borderRadius: 15,
                  marginLeft: "-8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    padding: 5,
                    marginRight: "20px",
                  }}
                >
                  <p
                    style={{
                      backgroundColor: "#f1f2f4",
                      borderRadius: 10,
                      width: "24%",
                      padding: 4,
                      marginTop: "11px",
                    }}
                  >
                    <a
                      style={{
                        fontWeight: "normal",
                        fontFamily: "Rubik",
                        color: "black",
                      }}
                    >
                      {value?.statue}
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
                    }}
                  >
                    {value?.priority}
                  </p>
                </div>

                <p
                  style={{
                    marginRight: "230px",
                    marginTop: "-10px",
                    fontWeight: "normal",
                    fontFamily: "Rubik",
                    fontSize: "20px",
                    color: "black",
                  }}
                >
                  {value?.name}
                </p>
                <a
                  style={{
                    marginRight: "177px",
                    marginTop: "-10px",
                    color: "#000000",
                    fontFamily: "Rubik",
                    fontSize: "15px",
                    marginBlockEnd: "-7px",
                  }}
                >
                  Task done {value?.taskDone} / 20
                </a>

                <img
                  style={{ marginLeft: "325px", marginTop: "14px" }}
                  src={chekblue}
                  height={16}
                  width={15}
                />
                <Box
                  style={{
                    backgroundColor: "#dad7fe",
                    borderRadius: 6,
                    width: "80%",
                    marginLeft: "28px",
                    marginTop: "-10px",
                  }}
                  m={1}
                >
                  <Box
                    style={{
                      backgroundColor: "#3e41a8",
                      borderRadius: 6,
                      height: "96%",
                      width: "100%",
                      marginTop: "0px",
                      marginLeft: "0px",
                    }}
                    m={1}
                  ></Box>
                </Box>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "20px",
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
                    <p
                      style={{
                        marginTop: "3px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik",
                      }}
                    >
                      {value?.taksTags}
                      Design
                    </p>
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
                    <p
                      style={{
                        marginTop: "3px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik",
                      }}
                    >
                      {value?.taksTags}
                      UX
                    </p>
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
                    <p
                      style={{
                        marginTop: "3px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik",
                      }}
                    >
                      {value?.taksTags}
                      UI
                    </p>
                  </Box>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: "-13px",
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
                        padding: 6,
                        marginLeft: 23,
                      }}
                    >
                      {value?.date}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#00a5ab",
                        marginLeft: "48px",
                        marginTop: "25px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        history.push(`/projectsDetails?id=${value?._id}`)
                      }
                    >
                      Details >
                    </p>
                  </div>
                </div>
              </Paper>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
