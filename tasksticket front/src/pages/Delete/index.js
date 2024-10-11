
import React ,{useEffect,useState}from "react";

import Modal from '@material-ui/core/Modal';
import { Divider } from '@material-ui/core';
import Vector11 from '../../assets/Vector11.png';

import ButtonDelete from  '../../assets/ButtonDelete.png';
 import Vectorred from '../../assets/Vectorred.png';
 import {UserDelete} from '../../store/action/auth/auth'
 import Collapse from "@mui/material/Collapse";
 import Alert from "@mui/material/Alert";
 import IconButton from "@mui/material/IconButton";
 import CloseIcon from "@mui/icons-material/Close";
 import { useSelector } from "react-redux";
 import { useDispatch } from "react-redux";


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

 

export default function Index({open,handleClose}) {

const dispatch = useDispatch();

  const {logedUser}=useSelector((state)=>state.loginReducer)
  const [userDeleted, setUserDeleted] = React.useState(false);
  const handleDelete = (id) => {
   
    dispatch(UserDelete(id))
   //console.log(id)
    setUserDeleted(true);
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
    p: 4, backgroundColor:'white',borderColor:'#d3d3d3', borderStyle:'solid',borderWidth:1,borderRadius:10,height:'30%',width:'35%'}}>
        <div  style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}} >
        
       
       
    <img src={ButtonDelete}height={40} width={40} style={{marginLeft:250,marginTop:25}} />

    <a style={{color:'black',fontFamily:'Rubik-Regular',fontSize:25,marginLeft:45,marginTop:30}}                 
                 
>Do you really want to delete your account ? </a>
   

    <Divider style={{marginTop:30}} variant='fullWidth' />

<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around',marginTop:25}} >


    <div style={{marginLeft:-40}} >
    <img src={Vector11} />
    <a style={{color:'#00a5ab'}} >  Cancel</a>
</div>
<div  style={{marginRight:-40}} >
<a style={{color:'red',fontFamily:'Rubik-Regular',fontSize:20,cursor:'pointer'}}     onClick={() =>  handleDelete(logedUser?._id) }   > Delete  </a>  
<img src={Vectorred}/>
</div>
</div>

</div>

  

     
        </p>
      </Modal>
      <Collapse in={userDeleted} style={{position:'absolute',bottom:10,right:10}} >
        <Alert
        severity="success"
          action={
            <IconButton
              aria-label="close"
              color="success"
              size="small"
              onClick={() => {
                setUserDeleted(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
            user deleted
        </Alert>
      </Collapse>
        </div>
    )
}
