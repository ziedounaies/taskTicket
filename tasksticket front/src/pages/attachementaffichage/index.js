import React from 'react'


import Modal from '@material-ui/core/Modal';
import lettre from '../../assets/lettre.png';
import icontrash from '../../assets/icontrash.svg';
import upload from '../../assets/upload.png';
import { Divider } from '@material-ui/core';

import Pagination from '@mui/material/Pagination';



export default function Index({open,handleClose}  ) {





    return (
        <div className="App"
        style={{
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
    flex:1,
          }} >
            

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <p  style={{position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    p: 4,
    flexDirection:'row', backgroundColor:'white',borderColor:'#d3d3d3', borderStyle:'solid',borderWidth:1,borderRadius:10,height:'75%',width:'23%'}}>
        
                

<div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginTop:10}}>
<img src={lettre}/>
<div style={{display:'flex',flexDirection:'column',justifyContent:'center'}} >
<a style={{fontFamily:'Rubik-Regular',fontSize:15,color:'black'}} >Lettre.pdf</a>
<a style={{fontFamily:'Rubik-Regular',fontSize:12,color:'#00a5ab'}} >Added 01 /09 /2021 at 2:00 PM</a>
</div>
<div style={{display:'flex', justifyContent:'end',alignItems:'end'}} >
<img  src={upload} height={20}/>
<img  style={{paddingLeft:15}} src={icontrash}/>
</div>








</div>

       <Divider style={{marginTop:10}} variant='middle' /> 

       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginTop:10}}>
<img src={lettre}/>
<div style={{display:'flex',flexDirection:'column',justifyContent:'center'}} >
<a style={{fontFamily:'Rubik-Regular',fontSize:15,color:'black'}} >Lettre.pdf</a>
<a style={{fontFamily:'Rubik-Regular',fontSize:12,color:'#00a5ab'}} >Added 01 /09 /2021 at 2:00 PM</a>
</div>
<div style={{display:'flex', justifyContent:'end',alignItems:'end'}} >
<img  src={upload} height={20}/>
<img  style={{paddingLeft:15}} src={icontrash}/>
</div>








</div>

       <Divider style={{marginTop:10}} variant='middle' /> 


       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginTop:10}}>
<img src={lettre}/>
<div style={{display:'flex',flexDirection:'column',justifyContent:'center'}} >
<a style={{fontFamily:'Rubik-Regular',fontSize:15,color:'black'}} >Lettre.pdf</a>
<a style={{fontFamily:'Rubik-Regular',fontSize:12,color:'#00a5ab'}} >Added 01 /09 /2021 at 2:00 PM</a>
</div>
<div style={{display:'flex', justifyContent:'end',alignItems:'end'}} >
<img  src={upload} height={20}/>
<img  style={{paddingLeft:15}} src={icontrash}/>
</div>








</div>

       <Divider style={{marginTop:10}} variant='middle' /> 

       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginTop:10}}>
<img src={lettre}/>
<div style={{display:'flex',flexDirection:'column',justifyContent:'center'}} >
<a style={{fontFamily:'Rubik-Regular',fontSize:15,color:'black'}} >Lettre.pdf</a>
<a style={{fontFamily:'Rubik-Regular',fontSize:12,color:'#00a5ab'}} >Added 01 /09 /2021 at 2:00 PM</a>
</div>
<div style={{display:'flex', justifyContent:'end',alignItems:'end'}} >
<img  src={upload} height={20}/>
<img  style={{paddingLeft:15}} src={icontrash}/>
</div>








</div>

  





<Pagination style={{marginTop:15}} count={10} color="primary" />           
              
        </p>
      </Modal>
        </div>
    )
}