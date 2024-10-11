import React, { useEffect, useState } from "react";
import Divider from "@material-ui/core/Divider";

import monicabing from "../../assets/monicabing.png";
import Pagination from "@mui/material/Pagination";


import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getTasPag,
  getTasToDo,
  getTasInProgress,
  getTasReview,
  getTasConfirmed,
} from "../../store/action/tasks/getTasks";

import points from "../../assets/points.png";
import { Accordion } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


import {
  BrowserRouter as Router,

  useHistory,
  useRouteMatch,
} from "react-router-dom";

const DATA = [1, 1, 1, 1];

export default function Index() {
  const [selectedDate, setSelectedDate] = useState(new Date());



  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    return `${year}-${month}`;
  };
  const history = useHistory();
  const dispatch = useDispatch();

  const [page, setPage] = useState();
  //const [pageTodo,setPageTodo] = useState(1)
  const [pageInProgress, setPageInProgress] = useState();
  const [pageReview, setPageReview] = useState();
  const [pageConfirmed, setPageConfirmed] = useState();

  const handleChangeTodo = (event, value) => {
    setPage(value);
  };

  const handleChangeInProgress = (event, value) => {
    setPageInProgress(value);
  };

  const handleChangeReview = (event, value) => {
    setPageReview(value);
  };
  const handleChangeConfirmed = (event, value) => {
    setPageConfirmed(value);
  };



  const { tasksToDo, totalItemTodo, currentPageToDo, totalPagesToDo } =
    useSelector((state) => state.tasksToDoReducer);

  const {
    totalItemInprogress,
    totalPagesInpr,
    currentPageInp,
    tasksInProgress,
  } = useSelector((state) => state.tasksInProgressReducer);

  const { totalItemReview, totalPagesrev, currentPageRev, tasksReview } =
    useSelector((state) => state.tasksReviewReducer);

  const {
    totalItemConfirmed,
    totalPagesConf,
    currentPageConf,
    tasksConfirmed,
  } = useSelector((state) => state.tasksConfirmedReducer);





  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
    dispatch(getTasToDo(token, page));
    }
  }, [dispatch, page]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
    dispatch(getTasInProgress(token, pageInProgress));
    }
  }, [dispatch, pageInProgress]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
    dispatch(getTasReview(token, pageReview));
    }
  }, [dispatch, pageReview]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
    dispatch(getTasConfirmed(token, pageConfirmed));
    }
  }, [dispatch, pageConfirmed]);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 1,
      }}
    >
     
      <div
        style={{
          height: "9%",
          width: "92%",
          color: "#d3d3d3",
          borderWidth: 1.6,
          borderStyle: "solid",
          marginTop: 30,
          marginLeft: 20,
          borderRadius: 10,

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <a
            style={{
              color: "#00a5ab",
              fontSize: "15px",
              fontFamily: "Rubik-Regular",
              marginLeft: 25,
              lineHeight: "15px",
            }}
          >
            #
          </a>
          <a
            style={{
              color: "#00a5ab",
              fontSize: "15px",
              fontFamily: "Rubik-Regular",
              marginLeft: 50,
              lineHeight: "15px",
            }}
          >
            Task Name
          </a>
        </div>
        <Divider orientation="vertical" flexItem />
        <a
          style={{
            color: "#00a5ab",
            fontSize: "15px",
            fontFamily: "Rubik-Regular",
            // marginLeft: "-100px",
            lineHeight: "15px",
          }}
        >
          Task Tags
        </a>
        <Divider orientation="vertical" flexItem />
        <a
          style={{
            color: "#00a5ab",
            fontSize: "15px",
            fontFamily: "Rubik-Regular",
            //  marginLeft: "-70px",
            lineHeight: "15px",
            marginRight: "-25px",
          }}
        >
          Task Assign Name{" "}
        </a>
        <Divider orientation="vertical" flexItem />
        <a
          style={{
            color: "#00a5ab",
            fontSize: "15px",
            fontFamily: "Rubik-Regular",
            // marginLeft: "-80px",
            lineHeight: "15px",
          }}
        >
          Start Date
        </a>
        <Divider orientation="vertical" flexItem />
        <a
          style={{
            color: "#00a5ab",
            fontSize: "15px",
            fontFamily: "Rubik-Regular",
            //  marginLeft: "20px",
            lineHeight: "15px",
            // marginRight: 70,
          }}
        >
          Due Date
        </a>
        <Divider orientation="vertical" flexItem />

        <a
          style={{
            display: "flex",

            color: "#00a5ab",
            fontSize: "15px",
            fontFamily: "Rubik-Regular",
            //  marginLeft: "-10px",
            lineHeight: "15px",
            marginRight: 60,
          }}
        >
          Action
        </a>
      </div>

  

      <Accordion
        style={{
          width: "92%",
          color: "#d3d3d3",
          position: "static",
          marginTop: 30,
          borderRadius: 10,
          marginLeft: 20,
          boxShadow: "none",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#ffffff",
          color: "#d3d3d3",
          borderWidth: 1.6,
          borderStyle: "solid",
        }}
      >
        <AccordionSummary
          style={{ marginLeft: 50 }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <a
            style={{
              fontSize: "20px",
              fontFamily: "Rubik-Medium",
              color: "black",
              marginLeft:-8
            }}
          >
            To Do{" "}
          </a>
          <a
            style={{
              fontSize: "20px",
              fontFamily: "Rubik-Medium",
              color: "#00a5ab",
              marginLeft: 15,
            }}
          >
            {" "}
            {totalItemTodo}{" "}
          </a>
        </AccordionSummary>
        <Divider variant="fullWidth" />

        <AccordionDetails>
          <Typography>
            {tasksToDo?.map((item, index) => (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
             
    
                  }}
                >

                  <img
                    style={{ height: 25, marginRight: 10, marginTop: 7,maxWidth:'20%' }}
                    src={points}
                  />

                  <a
                    style={{
                      fontFamily: "Rubik-Medium",
                      fontSize: 15,
                      color: "black",
                      marginRight: 30,
                      marginTop: 7,
                      
maxWidth:'20%'
                    }}
                  >{`${(currentPageToDo - 1) * 2 + index + 1}`}</a>
                  <a
                    style={{
                      fontFamily: "Rubik-Regular",
                      fontSize: 15,
                      color: "black",
                   //   marginRight: 65,
                      marginTop: 7,
                      maxWidth:"100%",
                      marginRight:90,
              maxWidth:26.5
                    }}
                  >
                    {item.taksName}{" "}
                  </a>

                  
                  <Divider
                    style={{ height: 50 ,marginRight:5}}
                    orientation="vertical"
                    flexItem
                   
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginRight: 20,
                      maxWidth:"16%"
                 
                    }}
                  >
                    <p
                      style={{
                        backgroundColor: "#dad7fe",
                        borderRadius: 6,
                        paddingLeft: "15px",

                        paddingRight: "15px",
                       
                        paddingTop: "5px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik-Regular",
                        height: 18,
                // maxWidth:"50%"
                        //width:"30%"
                      }}
                    >
                      {item.taksTags}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#ccf8fe",
                        borderRadius: 6,
                        paddingLeft: "18px",

                        paddingRight: "18px",
                     
                        paddingTop: "5px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik-Regular",
                        height: 18,
                       // maxWidth:25,
                      }}
                    >
                      {item.taksTags}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#e2fbd7",
                        borderRadius: 6,
                        paddingLeft: "20px",

                        paddingRight: "20px",
                        marginRight: 10,
                        paddingTop: "5px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik-Regular",
                        height: 18,
                       // maxWidth:25,
                      }}
                    >
                      {item.taksTags}
                    </p>
                  </div>

                  <Divider style={{ marginRight: 50 }} orientation="vertical" flexItem />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    maxWidth:160
                      //maxWidth:200
                    }}
                  >
                    <a>
                      {" "}
                      <img style={{ marginRight: 25,marginLeft:10 }} src={monicabing} />{" "}
                    </a>
                    <a
                      style={{
                        color: "black",
                        fontSize: "15px",
                        fontFamily: "Rubik-Regular",
                        marginTop: "5px",
                        lineHeight: "15px",
                        maxWidth:'20%',
                        marginRight: 50 ,
                      }}
                    >
                      {" "}
                      {item.assignName}{" "}
                    </a>
                  </div>

                  <Divider  style={{ marginRight: 50 }} orientation="vertical" flexItem />

                  <a
                    style={{
                      fontFamily: "Rubik-Regular",
                      fontSize: 15,
                      color: "black",
                      marginRight: 60 ,
                      maxWidth:100
                    }}
                  >
                    {item.startDate}
                  </a>

                  <Divider style={{ marginRight: 35 }} orientation="vertical" flexItem />

                  <a
                    style={{
                      fontFamily: "Rubik-Regular",
                      fontSize: 15,
                      color: "black",
                     marginRight: 60 ,
                     maxWidth:100
                    }}
                  >
                    {item.dueDate}
                  </a>
                  <Divider style={{ marginRight: 35 }} orientation="vertical" flexItem />

                  <a
                    style={{
                      fontFamily: "Rubik-Medium",
                      fontSize: 15,
                      color: "#3e41a8",
                      
                      cursor: "pointer",
                      maxWidth:'20%'
                    }}
                    onClick={() =>
                      history.push(`/tasks/detailsTask?id=${item?._id}`)
                    }
                  >
                    Details>
                  </a>
                </div>

                {index !== DATA.length - 1 && <Divider style={{width:'108%'}} variant="fullWidth" />}
              </>
            ))}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
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
                Showing {`${(currentPageToDo - 1) * 2 + 1}`} -{" "}
                {(currentPageToDo - 1) * 2 + tasksToDo?.length} of{" "}
                {totalPagesToDo}{" "}
              </a>
              <Pagination
                style={{ marginLeft: 25 }}
                count={totalPagesToDo}
                size="small"
                onChange={handleChangeTodo}
              />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* </div> */}

      <Accordion
        style={{
          width: "92%",
          color: "#d3d3d3",
          position: "static",
          marginTop: 30,
          borderRadius: 10,
          marginLeft: 20,
          boxShadow: "none",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#ffffff",
          color: "#d3d3d3",
          borderWidth: 1.6,
          borderStyle: "solid",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <a
                style={{
                  fontSize: "19px",
                  fontFamily: "Rubik-Medium",
                  color: "black",
                  marginLeft: 40,
                }}
              >
                In Progress{" "}
              </a>
              <a
                style={{
                  fontSize: "20px",
                  fontFamily: "Rubik-Medium",
                  color: "#00a5ab",
                  marginLeft: 15,
                }}
              >
                {totalItemInprogress}
              </a>
            </div>
          </Typography>
        </AccordionSummary>
        <Divider variant="fullWidth" />

        <AccordionDetails>
          <Typography>
            <div>
              {tasksInProgress?.map((item, index) => (
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <img
                      style={{ height: 25, marginRight: 20, marginTop: 7 }}
                      src={points}
                    />

                    <a
                      style={{
                        fontFamily: "Rubik-Medium",
                        fontSize: 15,
                        color: "black",
                        marginRight: 30,
                        marginTop: 7,
                      }}
                    >{`${(currentPageInp - 1) * 2 + index + 1}`}</a>
                    <a
                      style={{
                        fontFamily: "Rubik-Regular",
                        fontSize: 15,
                        color: "black",
                        marginRight: 65,
                        marginTop: 7,
                      }}
                    >
                      {item.taksName}
                    </a>
                    <Divider
                      style={{ height: 50 }}
                      orientation="vertical"
                      flexItem
                    />

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginRight: 60,
                      }}
                    >
                      <p
                        style={{
                          backgroundColor: "#dad7fe",
                          borderRadius: 6,
                          paddingLeft: "12px",

                          paddingRight: "12px",
                          marginRight: 5,
                          marginLeft: 29,
                          paddingTop: "5px",
                          color: "black",
                          fontSize: "10px",
                          fontFamily: "Rubik-Regular",
                          height: 18,
                        }}
                      >
                        {item.taksTags}
                      </p>
                      <p
                        style={{
                          backgroundColor: "#ccf8fe",
                          borderRadius: 6,
                          paddingLeft: "18px",

                          paddingRight: "18px",
                          marginRight: 5,
                          paddingTop: "5px",
                          color: "black",
                          fontSize: "10px",
                          fontFamily: "Rubik-Regular",
                          height: 18,
                        }}
                      >
                        {item.taksTags}
                      </p>
                      <p
                        style={{
                          backgroundColor: "#e2fbd7",
                          borderRadius: 6,
                          paddingLeft: "20px",

                          paddingRight: "20px",
                          marginRight: -7,
                          paddingTop: "5px",
                          color: "black",
                          fontSize: "10px",
                          fontFamily: "Rubik-Regular",
                          height: 18,
                        }}
                      >
                        {item.taksTags}
                      </p>
                    </div>

                    <Divider orientation="vertical" flexItem />

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: 45,
                        marginRight: 50,
                      }}
                    >
                      <a>
                        {" "}
                        <img
                          style={{ marginRight: 15 }}
                          src={monicabing}
                        />{" "}
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
                        {item.assignName}{" "}
                      </a>
                    </div>

                    <Divider orientation="vertical" flexItem />

                    <a
                      style={{
                        fontFamily: "Rubik-Regular",
                        fontSize: 15,
                        color: "black",
                        marginLeft: 55,
                        marginRight: 50,
                      }}
                    >
                      {item.startDate}
                    </a>

                    <Divider orientation="vertical" flexItem />

                    <a
                      style={{
                        fontFamily: "Rubik-Regular",
                        fontSize: 15,
                        color: "black",
                        marginLeft: 50,
                        marginRight: 45,
                      }}
                    >
                      {item.dueDate}
                    </a>
                    <Divider orientation="vertical" flexItem />

                    <a
                      style={{
                        fontFamily: "Rubik-Medium",
                        fontSize: 15,
                        color: "#3e41a8",
                        marginLeft: 50,
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        history.push(`/tasks/detailsTask?id=${item?._id}`)
                      }
                    >
                      Details>
                    </a>
                  </div>
                  {index !== DATA.length - 1 && <Divider variant="fullWidth" />}
                </>
              ))}

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
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
                  Showing {`${(currentPageInp - 1) * 2 + 1}`} -{" "}
                  {(currentPageInp - 1) * 2 + tasksInProgress?.length} of{" "}
                  {totalPagesInpr}{" "}
                </a>

                <Pagination
                  style={{ marginLeft: 25 }}
                  count={totalPagesInpr}
                  size="small"
                  onChange={handleChangeInProgress}
                />
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{
          width: "92%",
          color: "#d3d3d3",
          position: "static",
          marginTop: 30,
          borderRadius: 10,
          marginLeft: 20,
          boxShadow: "none",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#ffffff",
          color: "#d3d3d3",
          borderWidth: 1.6,
          borderStyle: "solid",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <a
                style={{
                  fontSize: "20px",
                  fontFamily: "Rubik-Medium",
                  color: "black",
                  marginLeft: 40,
                }}
              >
                Review{" "}
              </a>
              <a
                style={{
                  fontSize: "20px",
                  fontFamily: "Rubik-Medium",
                  color: "#00a5ab",
                  marginLeft: 15,
                }}
              >
                {totalItemReview}
              </a>
            </div>
          </Typography>
        </AccordionSummary>
        <Divider variant="fullWidth" />

        <AccordionDetails>
          <Typography>
            {tasksReview.map((item, index) => (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    style={{ height: 25, marginRight: 20, marginTop: 7 }}
                    src={points}
                  />

                  <a
                    style={{
                      fontFamily: "Rubik-Medium",
                      fontSize: 15,
                      color: "black",
                      marginRight: 30,
                      marginTop: 7,
                    }}
                  >{`${(currentPageRev - 1) * 2 + index + 1}`}</a>
                  <a
                    style={{
                      fontFamily: "Rubik-Regular",
                      fontSize: 15,
                      color: "black",
                      marginRight: 65,
                      marginTop: 7,
                    }}
                  >
                    {item.taksName}{" "}
                  </a>
                  <Divider
                    style={{ height: 50 }}
                    orientation="vertical"
                    flexItem
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginRight: 60,
                    }}
                  >
                    <p
                      style={{
                        backgroundColor: "#dad7fe",
                        borderRadius: 6,
                        paddingLeft: "12px",

                        paddingRight: "12px",
                        marginRight: 5,
                        marginLeft: 29,
                        paddingTop: "5px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik-Regular",
                        height: 18,
                      }}
                    >
                      {item.taksTags}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#ccf8fe",
                        borderRadius: 6,
                        paddingLeft: "18px",

                        paddingRight: "18px",
                        marginRight: 5,
                        paddingTop: "5px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik-Regular",
                        height: 18,
                      }}
                    >
                      {item.taksTags}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#e2fbd7",
                        borderRadius: 6,
                        paddingLeft: "20px",

                        paddingRight: "20px",
                        marginRight: -7,
                        paddingTop: "5px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik-Regular",
                        height: 18,
                      }}
                    >
                      {item.taksTags}
                    </p>
                  </div>

                  <Divider orientation="vertical" flexItem />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: 45,
                      marginRight: 50,
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
                      {item.assignName}{" "}
                    </a>
                  </div>

                  <Divider orientation="vertical" flexItem />

                  <a
                    style={{
                      fontFamily: "Rubik-Regular",
                      fontSize: 15,
                      color: "black",
                      marginLeft: 55,
                      marginRight: 50,
                    }}
                  >
                    {item.startDate}
                  </a>

                  <Divider orientation="vertical" flexItem />

                  <a
                    style={{
                      fontFamily: "Rubik-Regular",
                      fontSize: 15,
                      color: "black",
                      marginLeft: 50,
                      marginRight: 45,
                    }}
                  >
                    {item.dueDate}
                  </a>
                  <Divider orientation="vertical" flexItem />

                  <a
                    style={{
                      fontFamily: "Rubik-Medium",
                      fontSize: 15,
                      color: "#3e41a8",
                      marginLeft: 50,
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      history.push(`/tasks/detailsTask?id=${item?._id}`)
                    }
                  >
                    Details>
                  </a>
                </div>
                {index !== DATA.length - 1 && <Divider variant="fullWidth" />}
              </>
            ))}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
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
                Showing {`${(currentPageRev - 1) * 2 + 1}`} -{" "}
                {(currentPageRev - 1) * 2 + tasksReview?.length} of{" "}
                {totalPagesrev}{" "}
              </a>
              <Pagination
                style={{ marginLeft: 25 }}
                count={totalPagesrev}
                size="small"
                onChange={handleChangeReview}
              />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{
          width: "92%",
          color: "#d3d3d3",
          position: "static",
          marginTop: 30,
          borderRadius: 10,
          marginLeft: 20,
          boxShadow: "none",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#ffffff",
          color: "#d3d3d3",
          borderWidth: 1.6,
          borderStyle: "solid",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <a
                style={{
                  fontSize: "20px",
                  fontFamily: "Rubik-Medium",
                  color: "black",
                  marginLeft: 40,
                }}
              >
                Confirmed{" "}
              </a>
              <a
                style={{
                  fontSize: "20px",
                  fontFamily: "Rubik-Medium",
                  color: "#00a5ab",
                  marginLeft: 15,
                }}
              >
                {totalItemConfirmed}
              </a>
            </div>
          </Typography>
        </AccordionSummary>
        <Divider variant="fullWidth" />

        <AccordionDetails>
          <Typography>
            {tasksConfirmed.map((item, index) => (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    style={{ height: 25, marginRight: 20, marginTop: 7 }}
                    src={points}
                  />

                  <a
                    style={{
                      fontFamily: "Rubik-Medium",
                      fontSize: 15,
                      color: "black",
                      marginRight: 30,
                      marginTop: 7,
                    }}
                  >{`${(currentPageConf - 1) * 2 + index + 1}`}</a>
                  <a
                    style={{
                      fontFamily: "Rubik-Regular",
                      fontSize: 15,
                      color: "black",
                      marginRight: 65,
                      marginTop: 7,
                    }}
                  >
                    {item.taksName}{" "}
                  </a>
                  <Divider
                    style={{ height: 50 }}
                    orientation="vertical"
                    flexItem
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginRight: 60,
                    }}
                  >
                    <p
                      style={{
                        backgroundColor: "#dad7fe",
                        borderRadius: 6,
                        paddingLeft: "12px",

                        paddingRight: "12px",
                        marginRight: 5,
                        marginLeft: 29,
                        paddingTop: "5px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik-Regular",
                        height: 18,
                      }}
                    >
                      {item.taksTags}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#ccf8fe",
                        borderRadius: 6,
                        paddingLeft: "18px",

                        paddingRight: "18px",
                        marginRight: 5,
                        paddingTop: "5px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik-Regular",
                        height: 18,
                      }}
                    >
                      {item.taksTags}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#e2fbd7",
                        borderRadius: 6,
                        paddingLeft: "20px",

                        paddingRight: "20px",
                        marginRight: -7,
                        paddingTop: "5px",
                        color: "black",
                        fontSize: "10px",
                        fontFamily: "Rubik-Regular",
                        height: 18,
                      }}
                    >
                      {item.taksTags}
                    </p>
                  </div>

                  <Divider orientation="vertical" flexItem />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: 45,
                      marginRight: 50,
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
                      {item.assignName}{" "}
                    </a>
                  </div>

                  <Divider orientation="vertical" flexItem />

                  <a
                    style={{
                      fontFamily: "Rubik-Regular",
                      fontSize: 15,
                      color: "black",
                      marginLeft: 55,
                      marginRight: 50,
                    }}
                  >
                    {item.startDate}
                  </a>

                  <Divider orientation="vertical" flexItem />

                  <a
                    style={{
                      fontFamily: "Rubik-Regular",
                      fontSize: 15,
                      color: "black",
                      marginLeft: 50,
                      marginRight: 45,
                    }}
                  >
                    {item.dueDate}
                  </a>
                  <Divider orientation="vertical" flexItem />

                  <a
                    style={{
                      fontFamily: "Rubik-Medium",
                      fontSize: 15,
                      color: "#3e41a8",
                      marginLeft: 50,
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      history.push(`/tasks/detailsTask?id=${item?._id}`)
                    }
                  >
                    Details>
                  </a>
                </div>
                {index !== DATA.length - 1 && <Divider variant="fullWidth" />}
              </>
            ))}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
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
                Showing {`${(currentPageConf - 1) * 2 + 1}`} -{" "}
                {(currentPageConf - 1) * 2 + tasksConfirmed?.length} of{" "}
                {totalPagesConf}{" "}
              </a>
              <Pagination
                style={{ marginLeft: 25 }}
                count={totalPagesConf}
                size="small"
                onChange={handleChangeConfirmed}
              />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
