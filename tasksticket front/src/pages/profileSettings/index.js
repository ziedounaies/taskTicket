import React from 'react'


import Modal from '@material-ui/core/Modal';
import { Divider } from '@material-ui/core';

import setting from '../../assets/setting.png';

 


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
export default function Index({open,handleClose,setOpenDelete,setOpenpassword}) {
   



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
    p: 4, backgroundColor:'white',borderColor:'#d3d3d3', borderStyle:'solid',borderWidth:1,borderRadius:10,height:'47%',width:'30%'}}>
        <div  style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}} >
        <img src={setting} height={85} width={85} style={{display:'flex',flexDirection:'row',marginLeft:180,marginTop:50,marginBottom:25}} />

        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}} >
        <Divider style={{marginTop:80,marginBottom:10}} variant='fullWidth' />
        <a style={{color:'#3e41a8',fontFamily:'Rubik-Regular',fontSize:25,marginLeft:150,cursor:'pointer',marginTop:30}}                  onClick={() =>setOpenpassword(true)}
 >Reset Password  > </a>
   
</div>

    </div>


     
        </p>
      </Modal>
        </div>
    )
}
