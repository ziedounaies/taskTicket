import { React, useState } from "react";

import Modal from "@material-ui/core/Modal";

import { useHistory, useLocation } from "react-router";
import { searchh } from "../../store/action/auth/auth";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Paper } from "@material-ui/core";
import TextField from "@mui/material/TextField";


import zzz from  "../../assets/zzz.jpg";
import filter from "../../assets/filter.png";

import Checkbox from "@mui/material/Checkbox";

export default function Index({ open, setOpenSearch }) {

  const [params, setParams] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const {  userSearch ,listProjet,listTasks} = useSelector((state) => state.searchReducer);
    
  const { totalItemProject, } = useSelector(
    (state) => state.getProjectsReducer
  );
  const { totalItemAll } = useSelector(
    (state) => state.getTasksAllReducer
  );

  const { totalItem } = useSelector(
    (state) => state.getUserReducer
  );


  const [showResults, setShowResults] = useState(false);

  const handleCloseSearch = () => {
    setOpenSearch(false);
    dispatch(
      searchh({
        userSearch: [],
        listProjet: [],
        listTasks: []
      
      })
    );
  };


  

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const chercher = (e) => {
    dispatch(searchh(e));
    setShowResults(e.length > 0 && userSearch.length === 0 && listProjet.length === 0 && listTasks.length === 0);
  
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseSearch}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              backgroundColor: "white",
              color: "#d3d3d3",
              borderWidth: 1.6,
              borderStyle: "solid",
              paddingBottom: 10,
              borderRadius: 5,
              padding: 40,
              position: "absolute",
              top: "41%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              overflowY: "scroll",

              marginTop: 50,
              width: 1200,
              height: 510,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
            elevation={0}
          >
            <div style={{ cursor: "pointer" }}>
              <div style={{ cursor: "pointer" }}>
                <img
                  style={{
                    marginLeft: "97.5%",
                    marginBottom: -40,
                    cursor: "pointer",
                  }}
                  src={filter}
                  height={20}
                  width={20}
                />
              </div>

              <div style={{ borderRadius: 20, marginBottom: "2%" }}>
                <TextField
                  color="grey"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  label="Search"
                  onChange={(event) => chercher(event.target.value)}
                />
              </div>
            </div>

            {userSearch.length === 0 &&
              listProjet.length === 0 &&
              listTasks.length === 0 && (
             
                <div
                  style={{
                    color: "#00a5ab",
                    fontSize: 50,
                    marginLeft: "35%",
                    marginTop: 160,
                  }}
                >
              
                  {" "}
                  
                </div>
               
              )  || (
                <>

                
                  {userSearch.length > 0 && (
                    <>
                      <div
                        style={{
                          display: "flex",

                          flexDirection: "row",
                          justifyContent: "start",
                        }}
                      >
                        <div
                          style={{
                            color: "black",
                            marginBottom: 18,
                            marginLeft: 10,
                            fontSize: 18,
                            fontWeight: -50,
                            color: "#00a5ab",
                          }}
                        >
                          {" "}
                          User( {totalItem} ){" "}
                        </div>
                        <Checkbox
                          {...label}
                          size="small"
                          style={{ color: "#00a5ab", marginTop: -13 }}
                        />
                      </div>

                      {userSearch.map((item, index) => (
                        <>
                          <Paper
                            elevation={1}
                            style={{
                              width: "100%",
                              height: "18%",
                              display: "flex",
                              marginBottom: 5,
                              color: "grey",
                              borderWidth: 1.6,
                              borderStyle: "solid",
                              borderRadius: 10,
                              cursor: "pointer",
                              backgroundColor:"#F8F5F5"
                        
                            }}
                            onClick={() =>
                              history.push(`/detailsUsers?id=${item?._id}`)
                            }
                            onClose={handleCloseSearch}
                            onChange={(e) => setParams(e.target.value)}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginLeft: 30,
                                marginTop: 25,
                                color: "black",
                                maxWidth:"40%"
                              }}
                            >
                              <div style={{ maxWidth: "15%" }}>
                                {item.fisrtName}
                              </div>

                              <div style={{ marginLeft: "15%" }}>
                                {item.lastName}
                              </div>

                              <div style={{ marginLeft: "15%" }}>
                                {item.email}
                              </div>

                              <div style={{ marginLeft: "15%" }}>
                                {item.profession}
                              </div>

                              <div style={{ marginLeft: "15%" }}>
                                {item.birthDate}
                              </div>

                              <div style={{ marginLeft: "15%" }}>
                                {item.nationality}
                              </div>

                              <div style={{ marginLeft: "15%" }}>
                                {item.address}
                              </div>

                              <div style={{ marginLeft: "15%" }}>
                                {item.phoneNumber}
                              </div>
                            </div>

                            <div> </div>

                            <div></div>

                            <div></div>

                            <div> </div>

                            <div></div>

                            <div></div>
                          </Paper>
                        </>
                      ))}
                    </>
                  )}

                  {listProjet.length > 0 && (
                  
                    <>
                    
                      <div
                        style={{
                          display: "flex",

                          flexDirection: "row",
                          justifyContent: "start",
                        }}
                      >
                        <div
                          style={{
                            color: "black",
                            marginBottom: 18,
                            marginLeft: 10,
                            fontSize: 18,
                            fontWeight: -50,
                            color: "#00a5ab",
                          }}
                        >
                          {" "}
                          Projets( {totalItemProject} ){" "}
                        </div>

                        <Checkbox
                          {...label}
                          size="small"
                          style={{ color: "#00a5ab", marginTop: -13 }}
                        />
                      </div>

                      {listProjet.map((item, index) => (
                       
                        <>
                        
                          <Paper
                            elevation={1}
                            style={{
                              width: "100%",
                              height: "18%",
                              display: "flex",
                              marginBottom: 5,
                              color: "grey",
                              borderWidth: 1.6,
                              borderStyle: "solid",
                              borderRadius: 10,
                              cursor: "pointer",
                              backgroundColor:"#F8F5F5"
                            }}
                            onClick={() =>
                              history.push(
                                `/projects/viewall/details/:${item?._id}`
                              )
                            }
                            //onClick={() =>setopenSearchUser(true)}
                            onClose={handleCloseSearch}
                            onChange={(e) => setParams(e.target.value)}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginLeft: 30,
                                marginTop: 25,
                                color: "black",
                              }}
                            >
                              <div style={{ maxWidth: "50%" }}>{item.name}</div>

                              <div style={{ marginLeft: "30%" }}>
                                {item.priority}
                              </div>

                              <div style={{ marginLeft: "30%" }}>
                                {item.statue}
                              </div>

                              <div style={{ marginLeft: "30%" }}>
                                {item.date}
                              </div>

                              <div style={{ marginLeft: "30%" }}>
                                {item.description}
                              </div>
                            </div>

                            <div> </div>

                            <div></div>

                            <div></div>

                            <div> </div>

                            <div></div>

                            <div></div>
                          </Paper>
                          
                        </>
                        
                      ))}
                      
                    </>
                    
                  )}

                  {listTasks.length > 0 && (
                    <>
                      <div
                        style={{
                          display: "flex",

                          flexDirection: "row",
                          justifyContent: "start",
                        }}
                      >
                        <div
                          style={{
                            color: "black",
                            marginBottom: 18,
                            marginLeft: 10,
                            fontSize: 18,
                            fontWeight: -50,
                            color: "#00a5ab",
                          }}
                        >
                          {" "}
                          Tasks( {totalItemAll} ){" "}
                        </div>

                        <Checkbox
                          {...label}
                          size="small"
                          style={{ color: "#00a5ab", marginTop: -13 }}
                        />
                      </div>

                      {listTasks.map((item, index) => (
                        <>
                          <Paper
                            elevation={1}
                            style={{
                              width: "100%",
                              height: "18%",
                              display: "flex",
                              marginBottom: 5,
                              color: "grey",
                              borderWidth: 1.6,
                              borderStyle: "solid",
                              borderRadius: 10,
                              cursor: "pointer",
                              backgroundColor:"#F8F5F5"
                            }}
                            onClick={() =>
                              history.push(`/tasks/detailsTask?id=${item?._id}`)
                            }
                            //onClick={() =>setopenSearchUser(true)}
                            onClose={handleCloseSearch}
                            onChange={(e) => setParams(e.target.value)}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginLeft: 30,
                                marginTop: 25,
                                color: "black",
                              }}
                            >
                              <div style={{ maxWidth: "50%" }}>
                                {item.taksName}
                              </div>

                              <div style={{ marginLeft: "30%" }}>
                                {item.assignName}
                              </div>

                              <div style={{ marginLeft: "30%" }}>
                                {item.taksTags}
                              </div>

                              <div style={{ marginLeft: "30%" }}>
                                {item.startDate}
                              </div>

                              <div style={{ marginLeft: "30%" }}>
                                {item.dueDate}
                              </div>
                            </div>

                            <div> </div>

                            <div></div>

                            <div></div>

                            <div> </div>

                            <div></div>

                            <div></div>
                          </Paper>
                        </>
                      ))}
                    </>
                  )}
                </>
              )}

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              ></div>
              <div
                style={{
                  color: "#000000",
                  fontSize: "25px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
