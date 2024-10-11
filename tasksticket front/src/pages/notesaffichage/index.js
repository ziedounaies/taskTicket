import React, { useEffect,useState } from "react";

import Modal from "@material-ui/core/Modal";
import { Divider } from "@material-ui/core";

import Pagination from "@mui/material/Pagination";
import { getNote } from "../../store/action/tasks/getTasks";


import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  BrowserRouter as Router,

  useLocation,
} from "react-router-dom";

export default function Index({
  open,
  handleClose,
  setOpennoteaffichagedetail,
}) {
  const dispatch = useDispatch();
  const query = useQuery();
  function useQuery() {
    const { search } = useLocation();





    return React.useMemo(() => new URLSearchParams(search), [search]);
  }


  const { tasksDetails, Note ,totalPages, totalItem, currentPage} = useSelector(
    (state) => state.getByidTasDetailsReducer
  );

  
  const { getNoteList, totalPagesNote ,totalItemNote, currentPageNote} = useSelector(
    (state) => state.getNoteReducer
  );



  const handleChange = (event, value) => {
  setPage(value)
  };
  const [page,setPage] = useState()
  useEffect(() => {
    dispatch(getNote(query.get("id")));
  }, []);

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
        <p
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
            width: "24%",
          }}
        >
          {tasksDetails?.Note?.map((item, index) => (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 15,
                  paddingRight: 18,
                  paddingLeft: 18,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <a
                      style={{
                        fontSize: 15,
                        fontFamily: "Inter-Bold",
                        color: "#3e41a8",
                        marginLeft: 10,
                      }}
                    >
                      {item.user}
                    </a>
                    <a
                      style={{
                        fontSize: 12,
                        fontFamily: "Inter-Medium",
                        color: "#9592a6",
                        marginLeft: 5,
                        color: "#00a5ab",
                      }}
                    >
                      {item.createAt}
                    </a>
                  </div>
                </div>
                <a
                  style={{
                    fontSize: 12,
                    fontFamily: "Rubik-Regular",
                    color: "#00a5ab",
                    marginLeft: 75,
                    marginTop: 12,
                    cursor: "pointer",
                  }}
                  onClick={() => setOpennoteaffichagedetail(item)}
                >
                  View Note >
                </a>
              </div>
              <div
                style={{
                  marginTop: 15,
                }}
              >
                <div
                  style={{
                    color: "black",
                    fontSize: "15px",
                    fontFamily: "Rubik-Regular",
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 23,
                  }}
                >
                  <a>{item.description}</a>
                </div>
              </div>

              <Divider style={{ marginTop: 15 }} variant="fullWidth" />
            </>
          ))}

          <div style={{ display: "flex", flexDirection: "row" }}>
            <a
              style={{
                color: "#3e41a8",
                fontSize: 14,
                fontFamily: "Rubik-Meduim",
                marginTop: 35,
                marginRight: -20,
                marginLeft: 15,
              }}
            >
              {" "}
              Showing {`${(currentPage - 1) * 6 + 1}`} -{" "}
              {(currentPageNote - 1) * 6+ tasksDetails?.Note?.length} of {totalItemNote}{" "}
            </a>
            <Pagination
              style={{ marginTop: 30, marginLeft: 22 }}
              count={totalPagesNote}
              size="small"
              onChange={handleChange}
            />
          </div>
        </p>
      </Modal>
    </div>
  );
}
