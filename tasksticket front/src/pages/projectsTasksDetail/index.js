import React ,{useEffect} from 'react';
import { alpha, makeStyles } from "@material-ui/core/styles";

import Pagination from '@mui/material/Pagination';

import Modal from '@material-ui/core/Modal';
import { Divider } from '@material-ui/core';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import List from "@material-ui/core/List";
import Checkbox from "@material-ui/core/Checkbox";

import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { getPro, getProPag } from "../../store/action/projects/getProjects";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const DATA = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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



export default function Index({open,handleClose}) {
    const classes = useStyles();

    const [checked, setChecked] = React.useState([0]);
    const dispatch = useDispatch();


  const handleChange = (event, value) => {
    dispatch(getProPag(value))

  };

    
    useEffect(() => {
      dispatch(getPro())
      dispatch(getProPag(1))
    }, []);

    const {project,totalPages,totalItem,currentPage} = useSelector((state) => state.getProjectsReducer );
   



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
        <div className="App"
        style={{
        display:'flex',
        justifyContent:'center', 
     alignItems:'center',
  
          }} >
       
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <p  style={{ position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    p: 4, backgroundColor:'white',borderColor:'#d3d3d3', borderStyle:'solid',borderWidth:1,borderRadius:10,height:'76%',width:'25%'}}>
        <List dense className={classes.root}>
              {project?.map((value, index) => {
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
                        primary={`${(currentPage-1)*9 + index+1}`}
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
            <div style={{display:'flex',flexDirection:'row'}} >
               <a  style={{color:'#3e41a8',fontSize:14,fontFamily:'Rubik-Meduim',color:'#3e41a8',marginTop:5,marginLeft:15}} > Showing {currentPage} of {totalPages} </a>
               <Pagination style={{marginLeft:25}} count={totalPages}  size="small"  onChange={handleChange} 

   />
                
             
             

              
              </div>
        </p>
      </Modal>
        </div>
    )
}

