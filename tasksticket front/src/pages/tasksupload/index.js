import React from 'react'

import upload from '../../assets/upload.png';
import Modal from '@material-ui/core/Modal';
import { Divider } from '@material-ui/core';





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
export default function Index({open,handleClose,setOpentasksuploadfile}) {
   



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
    p: 4,display:'flex',flexDirection:'row', backgroundColor:'white',borderColor:'#d3d3d3', borderStyle:'solid',borderWidth:1,borderRadius:10,height:250,width:400}}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}} >
          <img style={{marginLeft:160, display:'flex',flexDirection:'row',justifyContent:'center'}} src={upload}height={50} width={50} />
         <a style={{fontFamily:'Rubik-Regular', fontSize:25,color:'black',marginLeft:50}} >Upload File for attachements</a>
         <Divider width={'118%'} variant='fullWidth' />
         <a style={{fontFamily:'Rubik-Regular', fontSize:25,color:'#3e41a8',marginLeft:130,cursor:'pointer' }}                 onClick={() =>setOpentasksuploadfile()}
 >Upload File</a>

         </div>
        </p>
      </Modal>
        </div>
    )
}
