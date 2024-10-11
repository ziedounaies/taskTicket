import React, { useEffect, useState } from "react";

import Modal from "@material-ui/core/Modal";

import { Divider } from "@material-ui/core";
import { getProPag } from "../../store/action/projects/getProjects";
import Pagination from "@mui/material/Pagination";

import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import {
  BrowserRouter as Router,
  
  useHistory,

} from "react-router-dom";

export default function Index({ open, handleClose }) {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();
  const { logedUser } = useSelector((state) => state.loginReducer);
  const { totalPages, totalItemProject, currentPage, projectPag } = useSelector(
    (state) => state.getProjectsPagReducer
  );
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
    dispatch(getProPag(token,page));
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
            height: "77%",
            width: "30%",
          }}
        >
          {projectPag?.map((item, index) => (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  

                  marginLeft: "-35px",
                }}
              >
                <p
                  style={{
                    backgroundColor: "#f1f2f4",
                   // paddingBottom: 10,
                    borderRadius: 10,
                    padding:7,
                    width: "12%",
                
                    marginTop: "13px",
                  }}
                >
                  <a
                    style={{
                      color: "black",
                      fontSize: "14px",
                      fontWeight: "normal",
                      fontFamily: "Rubik",
                     
                      display:"flex",flexDirection:'row',justifyContent:'center'
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
                  //  paddingBottom: 10,
                    borderRadius: 8,
                    fontFamily: "Rubik",
                   // padding: 5,
                    marginLeft: "100px",
                    width:'14%'
                  }}
                >

                  <a style={{display:"flex",flexDirection:'row',justifyContent:'center'}} >
                  {item.priority}
                  </a>
                </p>
              </div>

              <h2
                style={{
                  color: "black",
                  marginLeft: "45px",
                  marginTop: "-8px",
                }}
              >
                {item.name}
              </h2>
              <h3
                style={{
                  color: "black",
                  marginLeft: "45px",
                  marginTop: "-8px",
                }}
              >
                Task done 18 / 20
              </h3>



            
              <Box
                style={{
                  backgroundColor: "#dad7fe",
                  borderRadius: 6,
                  width: "85%",
                  marginLeft: "20px",
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
                  marginLeft: "40px",
                  marginTop: "-px",
                }}
              >
                <Box
                  style={{
                    backgroundColor: "#dad7fe",
                    borderRadius: 6,
                    height: "55%",
                    width: "15%",
                  }}
                  m={1}
                >
                  <p style={{ marginTop: "3px", color: "black",display:'flex',flexDirection:'row',justifyContent:"center" }}>Design</p>
                </Box>
                <Box
                  style={{
                    backgroundColor: "#ccf8fe",
                    borderRadius: 6,
                    height: "55%",
                    width: "15%",
                  }}
                  m={1}
                >
                  <p style={{ marginTop: "3px", color: "black",display:'flex',flexDirection:'row',justifyContent:"center"  }}>UX</p>
                </Box>
                <Box
                  style={{
                    backgroundColor: "#e2fbd7",
                    borderRadius: 6,
                    height: "55%",
                    width: "15%",
                  }}
                  m={1}
                >
                  <p style={{ marginTop: "3px", color: "black",display:'flex',flexDirection:'row',justifyContent:"center"  }}>UI</p>
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
                      marginLeft:22
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
                      marginTop:20
                    }}
                    onClick={() =>
                      history.push(`/projects/viewall/details/${item?._id}`)
                    }
                  >
                    Details >
                  </p>
                </div>
              </div>
              <Divider style={{ marginTop: "10px" }} variant="middle" />
            </>
          ))}

          <div style={{ display: "flex", flexDirection: "row" }}>
            <a
              style={{
                color: "#3e41a8",
                fontSize: 14,
                fontFamily: "Rubik-Meduim",
                color: "#3e41a8",
                marginTop: 20 ,
                marginLeft: 15,
              }}
            >
              {" "}
              Showing {`${(currentPage - 1) * 2 + 1}`} -{" "}
              {(currentPage - 1) * 2 + projectPag?.length} of {totalItemProject}{" "}
            </a>
            <Pagination
              style={{ marginLeft: 25,marginTop:15 }}
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
