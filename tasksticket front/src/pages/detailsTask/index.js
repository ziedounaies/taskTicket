import React, { useState ,useEffect} from "react";



import { alpha, makeStyles } from "@material-ui/core/styles";

import poubelle from "../../assets/poubelle.png";

import Divider from "@material-ui/core/Divider";
import { Avatar, Paper } from "@material-ui/core";
import ziedd from "../../assets/ziedd.png";

import monicabing from "../../assets/monicabing.png";

import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import  {getTasPag , getTasToDo,addNOT} from '../../store/action/tasks/getTasks';
import {getNote} from   '../../store/action/tasks/getTasks';

import Taksupload from '../tasksupload';
import Createnote from '../create note';
import Noteaffichage from '../notesaffichage';
import Attachementaffichage from '../attachementaffichage';
import ParternsModal from "../parternsModal";
import Noteaffichagedetail from '../noteaffichagedetail';
import Tasksuploadfile from '../tasksuploadfile';
import {getByidTasDetails} from '../../store/action/tasks/getTasks';
import { useParams } from "react-router-dom";

import {
  
  BrowserRouter as Router,
 
  useHistory,useLocation

 
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
export default function Index({multiline}) {

  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(getTasToDo())
    dispatch(getNote(query.get("id")))
    dispatch(getTasPag(1))
    dispatch(getByidTasDetails(query.get("id")))
   
 
  },[]);

   


 

const {tasksDetails,Note} = useSelector((state) => state.getByidTasDetailsReducer
);


const {uploadFileList,uploadFile} =useSelector((state)=>state.uploadReducer)

//const {getNotee} =useSelector((state) =>state.getNoteReducer);



const query =useQuery();

console.log(query.get("id"))




function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}



 
  const classes = useStyles();

  const [openParternsModal, setOpenParternsModal] = React.useState(false);
  const [detailNote,setDetailNote]=useState()
  const [openTasksupload, setOpenTasksupload] = React.useState(false);
  const [checked, setChecked] = React.useState([0]);
  const [opencreatenote,setopencreatenote]=React.useState(false);
  const [opennoteaffichage,setopennoteaffichage]=React.useState(false);

const [openattachementaffichage,setOpenattachementaffichage]=React.useState(false);
  
const [opennoteaffichagedetail,setOpennoteaffichagedetail]=React.useState(false);
const [Opentasksuploadfile,setOpentasksuploadfile]=React.useState(false);

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



  const openNoteaffichagedetail =(item)=>{
  setDetailNote(item)
    setopennoteaffichage(false)
    setOpennoteaffichagedetail(true)
  }

  const closeNoteaffichagedetail =()=>{
  
    setopennoteaffichage(true)
    setOpennoteaffichagedetail(false)
  }


  const opentasksuploadfile =()=> {

    setOpenTasksupload(false)
    setOpentasksuploadfile(true)
  }

  const closeTasksuploadfile =()=> {

    setOpenTasksupload(true)
    setOpentasksuploadfile(false)
  }

  


  const handleChange = (event, value) => {
   // dispatch(addNOT(value))
    dispatch(getTasPag(value))
   

  }




  return (
    <div
      className="App"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tasksuploadfile open={Opentasksuploadfile} handleClose={()=>closeTasksuploadfile()   }/>
<Taksupload open={openTasksupload} handleClose={()=>setOpenTasksupload(false)} setOpentasksuploadfile={()=>opentasksuploadfile()}  />
<Createnote open={opencreatenote} handleClose={()=>setopencreatenote(false)} id={query.get("id")}   />
<Noteaffichage open={opennoteaffichage} handleClose={()=>setopennoteaffichage(false) } setOpennoteaffichagedetail={(item)=>openNoteaffichagedetail(item)}/>
<Attachementaffichage  open={openattachementaffichage} handleClose={()=>setOpenattachementaffichage(false) }/>
<Noteaffichagedetail open={opennoteaffichagedetail} handleClose={()=>closeNoteaffichagedetail() }   item={detailNote}   />
<ParternsModal     open={openParternsModal}
        handleClose={() => setOpenParternsModal(false)}   />



      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            color: "#d3d3d3",
            borderWidth: 1.6,
            borderStyle: "solid",
            marginTop: 15,
            borderRadius: 10,
            width: "89.8%",
            marginLeft: 60,
            paddingLeft: 15,
            paddingRight: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#ffffff",
            height: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "100%",
              alignItems: "center",
            }}
          >
            <a
              style={{
                fontSize: "20px",
                fontFamily: "Rubik-Medium",
                color: "#00a5ab",
              }}
            >
              Actions{" "}
            </a>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                height: "100%",
                alignItems: "center",
              }}
            >
              <Divider orientation="vertical" variant="middle" flexItem />

              <a
                style={{
                  fontFamily: "Rubik-Medium",
                  fontSize: 15,
                  color: "#3e41a8",
                  cursor: "pointer",
                }}
                onClick={() =>setOpenTasksupload(true)}
              >
                Start Task >
              </a>

              <Divider orientation="vertical" variant="middle" flexItem />

              <a
                style={{
                  fontFamily: "Rubik-Medium",
                  fontSize: 15,
                  color: "#00a5ab",
                  cursor: "pointer",
                }}
                onClick={() => setopencreatenote(true)}
                   >
                Create Note >{" "}
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              marginBlockEnd: -3,
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
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
                  marginTop: 20,
                  marginBottom: 20,
                  marginLeft: -50,
                }}
              >
                Informations
              </a>{" "}
            </div>
            <Paper
              elevation={0}
              style={{
                display: "flex",
                height: "90%",
                width: "127%",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#d3d3d3",
                borderWidth: 1.6,
                borderStyle: "solid",
                borderRadius: 15,
                marginLeft: -65,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <div style={{ marginTop: -15 }}>
                  <p
                    style={{
                      backgroundColor: "#f1f2f4",
                      paddingBottom: 5,
                      paddingRight: 3,
                      paddingLeft: 3,
                      marginRight: 35,
                      borderRadius: 10,
                      width: "84%",
                      marginTop: 30,
                    }}
                  >
                    <a
                      style={{
                        color: "black",
                        fontWeight: "normal",
                        fontFamily: "Rubik-Regular",
                        fontSize: 10,
                      }}
                    >
               {tasksDetails?.status}
           
                    </a>{" "}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 8,
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
                          {tasksDetails?.taksTags}
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
                    {tasksDetails?.taksTags}
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
                            {tasksDetails?.taksTags}
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
               {tasksDetails?.taksName}
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
              <div style={{ display: "flex", flexDirection: "column",maxHeight:"50%" }}>
                <a
                  style={{
                    color: "black",
                    fontSize: "15px",
                    fontFamily: "Rubik-Regular",
                    marginLeft: "-35px",
                  }}
                >
                        {tasksDetails?.description}{" "}
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
                Task Assign Name
              </a>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 25,
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
                  {tasksDetails?.assignName}{" "}
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
                Task Partners
              </a>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <div 
                
                style={{
                  color: "black",
                  fontSize: "15px",
                  fontFamily: "Rubik-Regular",
                  marginTop: "5px",
                  lineHeight: "15px",
                  marginLeft: -95
                }}
                
                >
                {tasksDetails?.parterns}
              
                </div>

              

                <a
                  style={{
                    fontFamily: "Rubik-Regular",
                    fontSize: 12,
                    color: "#00a5ab",
                    marginTop: 10,
                    marginRight: -90,
                    cursor:'pointer'
                  }}
                  onClick={() =>    setOpenParternsModal(true)}
              
                >
                  View All
                </a>
              </div>

              <div
                style={{ display: "flex", flexDirection: "row", marginTop: -5 }}
              >
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
                    marginLeft: "5px",
                  }}
                >
                  {tasksDetails?.startDate}
          
                </p>

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
                    marginLeft: "35px",
                    marginRight:4
                  }}
                >
                    {tasksDetails?.dueDate}
                </p>
              </div>
            </Paper>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  color: "#00a5ab",
                  fontSize: "20px",
                  fontFamily: "Rubik-Medium",
                }}
              >
                <p>Notes     
                
                
                 </p>
         
              </div>
              <p
                style={{
                  color: "#00a5ab",
                  marginLeft: "130px",
                  fontFamily: "Rubik-Regular",
                  fontSize: "12px",
                  marginTop: 27,
                  cursor:'pointer',
                  marginRight: -15,
                }}
                onClick={() => setopennoteaffichage(true)}
                >
                {" "}
                View All >
              </p>
            </div>
            <Paper
              elevation={0}
              className={classes.paper}
              style={{
                display: "flex",
                height: "92%",
                width: "127%",
                flexDirection: "column",
                color: "#d3d3d3",
                borderWidth: 1.6,
                borderStyle: "solid",
                borderRadius: 15,
                marginLeft: -25,
                marginRight: 20,
              }}
            >
              {tasksDetails?.Note?.slice(0,4)?.map((item,index)=> (

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
                  <img src={ziedd} height={35} width={35} />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <a
                      style={{
                        fontSize: 15,
                        fontFamily: "Inter-Bold",
                        color: "#3e41a8",
                        marginRight: -20,
                      }}
                    >
                      {item.user}
         
                    </a>
                    <a
                      style={{
                        fontSize: 12,
                        fontFamily: "Inter-Medium",
                        color: "#9592a6",
                        marginLeft: 10,
                        color: "#00a5ab",
                      }}
                    >
                    {item.createAt}
                    </a>
                  </div>
                </div>
               
              </div>
              <textarea
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 15,
                  id:"outlined-multiline",
                  label:"Multiline",
                  multiline ,
                  maxRows:4,
                  
                  onChange:{handleChange}
           
                }}

                
              >
              
              {item.description}
           
              </textarea>

              <Divider style={{ marginTop: 15 }} variant="middle" />
              </> 
              ))}
             
            


            </Paper>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: "#00a5ab",
                fontSize: "20px",
                fontFamily: "Rubik-Medium",
                marginLeft: -95,
                cursor:'pointer',
              }}
              onClick={() =>setOpenattachementaffichage(true)}

            >
                <p>Attachments </p>
              </div>

              <Paper
                elevation={0}
                style={{
                  height: "90%",
                  width: "127%",
                  color: "#d3d3d3",
                  borderWidth: 1.6,
                  borderStyle: "solid",
                  borderRadius: 15,
                }}
              >



{uploadFile && uploadFile.length > 0 && (  
<div>
<img src={URL.createObjectURL(uploadFile[0])} alt={`Uploaded Attachment`} />
</div>
 )}
              <img style={{ marginTop: 50 }} width={250} src={poubelle} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a
                  style={{
                    fontSize: 40,
                    color: "#00a5ab",
                    fontFamily: "Rubik-Medium",
                  }}
                >
                  There is no
                </a>
                <a
                  style={{
                    fontSize: 40,
                    color: "#00a5ab",
                    fontFamily: "Rubik-Medium",
                  }}
                >
                  Attachment
                </a>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}

