import React,{ useState ,useEffect} from 'react'
import TextField from "@material-ui/core/TextField";


import Modal from '@material-ui/core/Modal';
import {  Divider } from '@material-ui/core';
import avatar5 from '../../assets/avatar5.png';
import Vector11 from '../../assets/Vector11.png';
import Vector111 from '../../assets/Vector111.png';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {addNOT} from '../../store/action/tasks/getTasks';

import { useDispatch } from "react-redux";

const style = {
   
  };

export default function Index({open,handleClose,id}) {



  const [noteData, setnoteData] = useState({
    description:"",
    id:id,
    user:"",
    createAt: new Date(),
  })


  const onChange=(input,value)=> {
    setnoteData({...noteData,[input]:value})
  }
  

  const dispatch = useDispatch();


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
    p: 4,display:'flex',flexDirection:'row', backgroundColor:'white',borderColor:'gray', borderStyle:'solid',borderWidth:1,borderRadius:10,height:350,width:550}}>

            <div style={{display:'flex',flexDirection:'column'}}>
                <div>
        <img style={{marginLeft:25,marginTop:20}} src={avatar5} height={70} width={70} />
        <div  style={{display:'flex',flexDirection:'column',marginLeft:130,marginTop:-55}}>
        <TextField
              id="standard-basic"
              variant="standard"
              style={{ marginLeft: -20, marginTop: 15 }}
              value={noteData?.user}
              onChange={(event)=>onChange("user",event.target.value)}
            />
            
        
</div>
</div>
<TextareaAutosize
      aria-label="empty textarea"
      placeholder=""
      value={noteData?.description}
      onChange={(event)=>onChange("description",event.target.value)}
      style={{ width: 420,height:140,marginLeft:60,marginTop:35,marginBottom:30,borderRadius:10,borderColor:'gray',borderStyle:'solid',borderWidth:1}}
    />
<Divider width={'113.2%'} variant='fullWidth'/>
<div style={{display:'flex',flexDirection:'row' ,justifyContent:'space-between',marginTop:10}}>
<div style={{marginLeft:40 }}  >
<img height={13}width={8}src={Vector11}/>
<a style={{fontFamily:'Rubik-Regular',fontSize:20,color:'#00a5ab',cursor:'pointer'}}  onClick={()   =>handleClose()
 } >  Cancel </a>
</div>
<div style={{marginRight:-35}} >
<a style={{fontFamily:'Rubik-Regular',fontSize:20,color:'#3e41a8',cursor:'pointer'}}    onClick={() => dispatch(addNOT(noteData))}    >Send </a>
<img height={13}width={8} src={Vector111}/>
 </div>   

</div>



</div>
        </p>
      </Modal>
        </div>
    )
}