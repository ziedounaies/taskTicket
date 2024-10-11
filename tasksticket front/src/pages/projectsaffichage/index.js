import { Divider } from "@material-ui/core";
import React, { useEffect } from "react";
import monicabing from "../../assets/monicabing.png";

import { useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";

import {
  BrowserRouter as Router,
  useParams,
  useHistory,
  useLocation,
} from "react-router-dom";


export default function Index() {
  
const DATA = [1, 1, 1, 1, 1, 1, 1, 1];
  const history = useHistory();
  const dispatch = useDispatch();


  const query = useQuery();
   function useQuery() {
    const { search } = useLocation();
  } 

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
          marginTop: "-30px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{}}>
          <a
            style={{
              color: "#00a5ab",
              fontSize: "15px",
              fontFamily: "Rubik-Regular",
              marginLeft: "10px",
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
              marginLeft: "10px",
              lineHeight: "15px",
            }}
          >
            Project Name
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
            marginLeft: "-40px",
            lineHeight: "15px",
          }}
        >
          Project Tags
        </a>
        <Divider
          style={{ marginLeft: "20px" }}
          orientation="vertical"
          flexItem
        />
        <a
          style={{
            color: "#00a5ab",
            fontSize: "15px",
            fontFamily: "Rubik-Regular",
            marginLeft: "-70px",
            lineHeight: "15px",
            marginRight: "-55px",
          }}
        >
          Project Assign Name{" "}
        </a>
        <Divider
          style={{ marginRight: "-20px" }}
          orientation="vertical"
          flexItem
        />
        <a
          style={{
            color: "#00a5ab",
            fontSize: "15px",
            fontFamily: "Rubik-Regular",
            marginLeft: "-75px",
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
            marginLeft: "-75px",
            lineHeight: "15px",
          }}
        >
          Due Date
        </a>
        <Divider
          style={{ marginRight: "-15px" }}
          orientation="vertical"
          flexItem
        />
        <a
          style={{
            color: "#00a5ab",
            fontSize: "15px",
            fontFamily: "Rubik-Regular",
            marginRight: "65px",
            marginLeft: "-45px",
            lineHeight: "15px",
          }}
        >
          Details
        </a>
      </div>

      <div
        style={{
          height: "75%",
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
            padding: 24,
            marginTop: "-10px",
          }}
        >
          <a
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "Rubik-Medium",
              marginRight: "20px",
              marginLeft: "10px",
              lineHeight: "15px",
              marginTop: "5px",
            }}
          >
            {" "}
            New{" "}
          </a>
          <a
            style={{
              color: "#00a5ab",
              fontSize: "20px",
              fontFamily: "Rubik-Medium",
              lineHeight: "15px",
              marginTop: "5px",
            }}
          >
            {" "}
            (9)
          </a>
        </div>
        <Divider component="li" />

     
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: 54,
                borderStyle: " solid",
                borderRightWidth: "0px",
                borderLeftWidth: "0px",
                borderBottomWidth: "0px",
                borderTopWidth: "0px",
              }}
            >
              <a
                style={{
                  color: "black",
                  fontSize: "15px",
                  fontFamily: "Rubik-Regular",
                  marginLeft: "25px",
                  marginRight: "-30px",
                  lineHeight: "15px",
                }}
              >
                0 
              </a>
           
              <a
                style={{
                  color: "black",
                  fontSize: "15px",
                  fontFamily: "Rubik-Regular",
                  lineHeight: "15px",
                }}
              >
                HR Dashboard {" "}
              </a>

              <Divider orientation="vertical" flexItem />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
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
              <Divider orientation="vertical" flexItem />

              <div style={{ display: "flex", flexDirection: "row" }}>
                <a>
                  {" "}
                  <img src={monicabing} />{" "}
                </a>
                <a
                  style={{
                    color: "black",
                    fontSize: "15px",
                    fontFamily: "Rubik-Regular",
                    marginTop: "5px",
                    marginLeft: "10px",
                    lineHeight: "15px",
                  }}
                >
                  {" "}
                  Monica Bing{" "}
                </a>
              </div>

              <Divider orientation="vertical" flexItem />

              <a
                style={{
                  fontFamily: "15px",
                  fontFamily: "Rubik-Regular",
                  color: "black",
                  lineHeight: "15px",
                }}
              >
                04 /08 /2021
              </a>
              <Divider orientation="vertical" flexItem />

              <a
                style={{
                  fontFamily: "15px",
                  fontFamily: "Rubik-Regular",
                  color: "black",
                  lineHeight: "15px",
                }}
              >
                15 /09 /2021
              </a>
              <Divider orientation="vertical" flexItem />

              <a
                style={{
                  fontFamily: "15px",
                  fontFamily: "Rubik-Medium",
                  color: "#3e41a8",
                  lineHeight: "15px",
                  cursor: "pointer",
                  marginLeft: "5px",
                  marginRight: "40px",
                }}
                onClick={() => history.push(`/projects/projectsDetails`)}
                ///projects/viewall/details/${item?._id}`
              >
                {" "}
                Details >{" "}
              </a>
            </div>

           
   

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
            Showing {1} of {2}{" "}
          </a>
          <Pagination
            style={{ marginLeft: 25 }}
            count={1}
            size="small"
            //onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
