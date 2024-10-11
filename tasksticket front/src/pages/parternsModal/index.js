import React, { useEffect,useState } from "react";

import Modal from "@material-ui/core/Modal";
import { Divider } from "@material-ui/core";

import Pagination from "@mui/material/Pagination";
import { getNote } from "../../store/action/tasks/getTasks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getByidTasDetails} from '../../store/action/tasks/getTasks';
import {getPaterns} from '../../store/action/tasks/getTasks';

import {
  BrowserRouter as Router,

  useLocation,
} from "react-router-dom";

export default function Index({
  open,
  handleClose,

}) {
  const dispatch = useDispatch();
  const query = useQuery();

    function useQuery() {
      const { search } = useLocation();
    
      return React.useMemo(() => new URLSearchParams(search), [search]);
    }

useEffect(() => {
    dispatch(getByidTasDetails())
    dispatch(getPaterns())
}, [])


const {paternsList,totalPagesPaterns,totalItemPaterns,currentPagePaterns} = useSelector((state) => state.getPaternsReducer
);

   
  

  const { getNoteList, totalPages, totalItem, currentPage } = useSelector(
    (state) => state.getByidTasDetailsReducer
  );

  const { tasksDetails, Note } = useSelector(
    (state) => state.getByidTasDetailsReducer
  );



  const handleChange = (event, value) => {
  setPage(value)
  };
  const [page,setPage] = useState(1)
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
            display: "flex",
            flexDirection:'column',
            justifyContent:""
          }}
        >


              <div
                style={{
                  display: "flex",
                  flexDirection: 'column',
                  justifyContent:"space-between",
                  marginTop: 15,
                  paddingRight: 18,
                  paddingLeft: 18,
                }}
              >
                {paternsList?.map((value, index) => (
            <>
        
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
                
                    </a>
                   
                  </div>
                </div>
              
             
   

              <Divider style={{ marginTop: 15 }} variant="fullWidth" />
                         </>
          ))}
          <a style={{ display: "flex", flexDirection: "row",justifyContent:'end' }}>
            <div
              style={{
                display: "flex", flexDirection: "row",
                color: "#3e41a8",
                fontSize: 14,
                fontFamily: "Rubik-Meduim",
                marginTop: 35,
                marginRight: -20,
                marginLeft: 15,
              }}
            >
              {" "}
              Showing {`${(currentPagePaterns - 1) * 2 + 1}`} -{" "}
              {(currentPagePaterns - 1) * 3+ paternsList.length} of {totalItemPaterns}{" "}
            </div>
            <Pagination
              style={{ marginTop: 30, marginLeft: 22 }}
              count={totalPagesPaterns}
              size="small"
              onChange={handleChange}
            />
          </a>
          </div>
        </p>
      </Modal>
    </div>
  );
}
