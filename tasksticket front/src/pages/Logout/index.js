import React from 'react';

import Modal from '@material-ui/core/Modal';
import { Divider } from '@material-ui/core';
import iconlogoutred from '../../assets/iconlogoutred.svg';
import Vector1 from '../../assets/Vector1.svg';
import Vector2 from '../../assets/Vector2.svg';
import { useHistory } from 'react-router';
import  {logout} from '../../store/action/auth/auth';
import { useDispatch } from "react-redux";


export default function Index({open,setOpen}) {
    const history = useHistory();

    const dispatch = useDispatch();

  const handleClose = () => setOpen(false);




    return (
<div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

          
   <div style={{justifyContent:'center',alignItems:'center'}} >
        <div  style={{backgroundColor:'white', color:'#d3d3d3',borderWidth:1.6,borderStyle:'solid',paddingBottom:10,borderRadius: 15 ,padding:40,position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4}}  elevation={0} >

          <div style={{display:'flex',flexDirection:'column'}} >
              <div  style={{display:'flex',flexDirection:'row',justifyContent:'center' }} >
         < img src={iconlogoutred} height={40} width={40} style={{marginTop:'-15x'}}  />
         </div>
         <div style={{color:'#000000',  fontSize: '25px'  , display:'flex',flexDirection:'row' ,justifyContent:'center',marginTop:'15px'}} >
          Do you really want to Logout ?

          </div>
         <Divider variant='inset' style={{marginBlockEnd:'-25px',marginTop:'25px',color:'#c2c2c2' ,width:'120%',marginLeft:'-42px'  }} />


   

         </div>  
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBlockEnd:'-20px'}}>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'-moz-initial'}} >
<img src={Vector1} height={15} width={15}  style={{marginTop:'54px',marginRight:'10px'}}/>
<p style={{color:'#00a5ab',fontFamily: 'Rubik',  fontSize: '20px',marginTop:'50px',   cursor: "pointer"
}}                  onClick={() => setOpen(false)}
>  Cancel </p>
</div>   


<div style={{display:'flex',flexDirection:'row',justifyContent:'-moz-initial'}} >

<p style={{color:'#ff0000',fontFamily: 'Rubik',fontSize: '20px',marginTop:'50px',    cursor: "pointer"}}               
                onClick={() => history.push("/login")&&dispatch(logout())}
                > Confirm </p>
<img src={Vector2} height={15} width={15} style={{marginTop:'54px',marginLeft:'10px'}} />

</div>   
</div>


        </div>
     </div>
      </Modal>
    </div>
    );
}

